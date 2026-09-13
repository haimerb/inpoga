<?php
/*
Plugin Name: Corpus Gaviotas Headless
Description: Estructura de datos para el frontend React de Integración Popular Gaviotas Corporación. Registra proyectos, convocatorias, noticias, taxonomías de galería y un endpoint REST.
Version: 0.1.0
Author: Corpogaviotas
Text Domain: corpogaviotas
*/

if (!defined('ABSPATH')) {
    exit;
}

const CPG_PROYECTOS = array('mujeres-empresarias', 'ruta-de-los-oficios', 'transmision-de-saberes', 'benefactor');

function cpg_register_post_types()
{
    register_post_type('proyecto', array(
        'label' => 'Proyectos',
        'labels' => array(
            'name' => 'Proyectos',
            'singular_name' => 'Proyecto',
            'add_new_item' => 'Agregar proyecto',
        ),
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'menu_icon' => 'dashicons-portfolio',
        'has_archive' => false,
    ));

    register_post_type('convocatoria', array(
        'label' => 'Convocatorias',
        'labels' => array(
            'name' => 'Convocatorias',
            'singular_name' => 'Convocatoria',
            'add_new_item' => 'Agregar convocatoria',
        ),
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'menu_icon' => 'dashicons-megaphone',
        'has_archive' => false,
    ));

    register_post_type('noticia', array(
        'label' => 'Noticias',
        'labels' => array(
            'name' => 'Noticias',
            'singular_name' => 'Noticia',
            'add_new_item' => 'Agregar noticia',
        ),
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'menu_icon' => 'dashicons-welcome-write-blog',
        'has_archive' => true,
    ));
}
add_action('init', 'cpg_register_post_types');

function cpg_register_taxonomies()
{
    register_taxonomy('proyecto_cat', 'proyecto', array(
        'label' => 'Línea de proyecto',
        'hierarchical' => true,
        'public' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));

    register_taxonomy('convocatoria_estado', 'convocatoria', array(
        'label' => 'Estado de la convocatoria',
        'hierarchical' => false,
        'public' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));

    register_taxonomy('media_proyecto', 'attachment', array(
        'label' => 'Proyecto de la galería',
        'hierarchical' => true,
        'public' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'update_count_callback' => '_update_generic_term_count',
    ));
}
add_action('init', 'cpg_register_taxonomies');

function cpg_register_meta()
{
    $restringe = array(
        'type' => 'string',
        'single' => true,
        'show_in_rest' => true,
        'auth_callback' => '__return_true',
    );

    register_post_meta('proyecto', 'cpg_subtitulo', $restringe);
    register_post_meta('proyecto', 'cpg_estado', array_merge($restringe, array('default' => 'en_marcha')));
    register_post_meta('proyecto', 'cpg_detalles', $restringe);
    register_post_meta('proyecto', 'cpg_galeria', array_merge($restringe, array('default' => '')));

    register_post_meta('convocatoria', 'cpg_fecha_inicio', $restringe);
    register_post_meta('convocatoria', 'cpg_fecha_cierre', $restringe);
    register_post_meta('convocatoria', 'cpg_requisitos', $restringe);
    register_post_meta('convocatoria', 'cpg_url_formulario', $restringe);

    register_post_meta('noticia', 'cpg_imagen', $restringe);
}
add_action('init', 'cpg_register_meta');

function cpg_seed_proyecto_cats()
{
    if (get_option('cpg_seeded_cats')) {
        return;
    }
    $ids = array();
    foreach (CPG_PROYECTOS as $slug) {
        if (!term_exists($slug, 'proyecto_cat')) {
            $nombres = array(
                'mujeres-empresarias' => 'Mujeres Empresarias',
                'ruta-de-los-oficios' => 'Ruta de los Oficios',
                'transmision-de-saberes' => 'Transmisión de Saberes',
                'benefactor' => 'Benefactor',
            );
            $ids[] = wp_insert_term($nombres[$slug], 'proyecto_cat', array('slug' => $slug));
        }
    }
    if (!term_exists('en-marcha', 'convocatoria_estado')) {
        $ids[] = wp_insert_term('En marcha', 'convocatoria_estado', array('slug' => 'en-marcha'));
    }
    if (!term_exists('finalizada', 'convocatoria_estado')) {
        $ids[] = wp_insert_term('Finalizada', 'convocatoria_estado', array('slug' => 'finalizada'));
    }
    if (!is_wp_error($ids)) {
        update_option('cpg_seeded_cats', 1);
    }
}
add_action('init', 'cpg_seed_proyecto_cats');

function cpg_get_proyecto_de_adjunto($id)
{
    $terms = get_the_terms($id, 'media_proyecto');
    if (!$terms || is_wp_error($terms)) {
        return null;
    }
    $term = reset($terms);
    return array(
        'slug' => $term->slug,
        'name' => $term->name,
    );
}

function cpg_is_video($adjunto)
{
    return strpos($adjunto->post_mime_type, 'video') === 0;
}

function cpg_adjunto_a_item($adjunto)
{
    $item = array(
        'id' => $adjunto->ID,
        'alt' => $adjunto->post_title,
        'mime' => $adjunto->post_mime_type,
        'isVideo' => cpg_is_video($adjunto),
        'proyecto' => cpg_get_proyecto_de_adjunto($adjunto->ID),
    );

    if ($item['isVideo']) {
        $item['video'] = wp_get_attachment_url($adjunto->ID);
        $poster = get_post_meta($adjunto->ID, 'cpg_poster', true);
        $item['poster'] = $poster ? $poster : $item['video'];
        $item['src'] = $item['poster'];
    } else {
        $item['src'] = wp_get_attachment_url($adjunto->ID);
    }

    return $item;
}

function cpg_gallery_endpoint($request)
{
    $proyecto = sanitize_title($request->get_param('proyecto'));
    $args = array(
        'post_type' => 'attachment',
        'post_status' => 'inherit',
        'posts_per_page' => -1,
        'orderby' => 'title',
        'order' => 'ASC',
    );

    if ($proyecto) {
        $args['tax_query'] = array(array(
            'taxonomy' => 'media_proyecto',
            'field' => 'slug',
            'terms' => $proyecto,
        ));
    }

    $adjuntos = get_posts($args);
    $items = array();

    foreach ($adjuntos as $adjunto) {
        $mime = $adjunto->post_mime_type;
        if (strpos($mime, 'image') !== 0 && strpos($mime, 'video') !== 0) {
            continue;
        }
        $items[] = cpg_adjunto_a_item($adjunto);
    }

    return rest_ensure_response(array(
        'total' => count($items),
        'items' => $items,
    ));
}

add_action('rest_api_init', function () {
    register_rest_route('gaviotas/v1', '/galeria', array(
        'methods' => 'GET',
        'callback' => 'cpg_gallery_endpoint',
        'permission_callback' => '__return_true',
        'args' => array(
            'proyecto' => array(
                'type' => 'string',
                'required' => false,
                'sanitize_callback' => 'sanitize_title',
            ),
        ),
    ));
});