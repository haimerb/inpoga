# Migración a WordPress Headless — Corpogaviotas

## Decisión (validada por el cliente)

1. **WordPress en el mismo hosting** (GoDaddy). Frontend React sigue sirviendo `corpogaviotas.org` en la raíz; WordPress instalado en `corpogaviotas.org` (ruta `/wp`) y consumido solo vía REST por el frontend. Las URLs públicas no cambian.
2. **Formulario de contacto**: se mantiene `contact.php` tal cual. No se migra a plugin de formularios.
3. **Noticias**: incorporar CPT `noticia` para actividades y logros. Sí, se agrega al modelo.

## Modelo de datos

### Custom Post Types

| CPT | Slug | Uso |
|---|---|---|
| Proyecto | `proyecto` | Mujeres Empresarias, Ruta de los Oficios, Transmisión de Saberes, Benefactor |
| Convocatoria | `convocatoria` | Talleres, cursos, clases (p.ej. Curso Práctico de Piano) |
| Noticia | `noticia` | Actividades y logros |

### Taxonomías

| Taxonomía | CPT | Términos |
|---|---|---|
| `proyecto_cat` | proyecto | 4 proyectos fijos (jerárquica) |
| `convocatoria_estado` | convocatoria | `en-marcha`, `finalizada` |
| `media_proyecto` | adjunto (media) | mismos 4 proyectos. Recurso sin término = sin etiqueta |

### Campos (meta)

**Proyecto (`proyecto`)**
- `cpg_subtitulo` (texto)
- `cpg_descripcion` (textarea)
- `cpg_estado` (`en_marcha` / `finalizado`)
- `cpg_detalles` (repetidor JSON: label + texto)
- `cpg_galeria` (ids de adjuntos, filtrados por `media_proyecto`)
- `cpg_posicion` (orden en el listado)

**Convocatoria (`convocatoria`)**
- `cpg_proyecto` (taxonomía `proyecto_cat`)
- `cpg_fecha_inicio`, `cpg_fecha_cierre` (fechas)
- `cpg_requisitos` (repetidor: label + texto: inscripción, lugares, requisitos)
- `cpg_url_formulario` (URL de inscripción)
- `cpg_afiche` (adjunto)

**Noticia (`noticia`)**
- título + contenido (editor estándar)
- `cpg_imagen` (adjunto)
- `cpg_proyecto` (taxonomía `proyecto_cat`, opcional)

## Endpoints REST

- Nativos de WP con meta expuesta (`show_in_rest=true`):
  - `/wp-json/wp/v2/proyecto`
  - `/wp-json/wp/v2/convocatoria`
  - `/wp-json/wp/v2/noticia`
- Custom: `/wp-json/gaviotas/v1/galeria` → lista de adjuntos con su proyecto resuelto (o `null` si no tiene etiqueta).

## Reglas de negocio (validación del 13-sep-2026)

- Etiqueta de galería = **solo si se puede determinar el proyecto**. Si no → sin etiqueta.
- Los 4 proyectos son: Mujeres Empresarias, Ruta de los Oficios, Transmisión de Saberes, Benefactor.
- Benefactor → botón "Doná aquí" (actualmente redirige a WhatsApp). Pendiente definir página propia.

## Frontend (React) — adaptación

- Reemplazar arrays hardcodeados de `Galeria.jsx`, `Proyectos.jsx` por `fetch` a los endpoints.
- El hero SVG, la galería custom y el formulario se conservan sin cambio.
- Los textos, colores y tipografías pueden pasar al Customizer sin tocar React.

## Estados

- [x] Plan guardado
- [x] Plugin PHP con CPT + taxonomías + meta (`wp-plugin/corpogaviotas/corpogaviotas.php`, sintaxis validada con PHP 7.4)
- [ ] Instalación WP en hosting (GoDaddy) con frontend en raíz
- [x] Conector frontend → REST (`react-app/src/lib/gaviotasApi.js`)
- [ ] Carga de contenido real (proyectos, convocatorias, noticias, galería)

## Conector frontend (React)

- `Galeria.jsx`: consume `GET /gaviotas/v1/galeria` (fallback: array estático).
- `Proyectos.jsx` (Convocatorias): consume `GET /wp/v2/convocatoria?_embed` (fallback: Curso de Piano).
- `Proyectos.jsx` (Proyectos): consume `GET /wp/v2/proyecto?_embed` y sobreescribe título/descripción por slug (`ruta-de-los-oficios`, `mujeres-empresarias`, `transmision-de-saberes`, `benefactor`) sin perder los componentes visuales (SVG de la ruta, fases, tarjetas).
- `Noticias.jsx`: consume `GET /wp/v2/noticia?_embed`; no se renderiza si no hay noticias.
- Todo fetch tiene timeout de 6s y devuelve `null` en error → el sitio funciona 100% offline de WP.

## Notas de implementación

- Plugin: 3 CPT (`proyecto`, `convocatoria`, `noticia`), 3 taxonomías (`proyecto_cat`, `convocatoria_estado`, `media_proyecto`).
- Meta expuesta en REST con prefijo `cpg_`.
- Endpoint `GET /wp-json/gaviotas/v1/galeria?proyecto=slug` (opcional) devuelve imagen/video + proyecto resuelto o `null`.
- Sembrado automático al activar: términos de los 4 proyectos y estados de convocatoria.
- Videos: el poster se guarda en meta `cpg_poster`; si no existe, se usa el propio video como poster.