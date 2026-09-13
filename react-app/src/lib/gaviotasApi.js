const WP_NAMESPACE = '/wp-json'

export async function wpFetch(path, { timeout = 6000 } = {}) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  try {
    const res = await fetch(`${WP_NAMESPACE}${path}`, { signal: controller.signal })
    if (!res.ok) throw new Error(`WP ${res.status}`)
    return await res.json()
  } finally {
    clearTimeout(id)
  }
}

function fromWpItem(item) {
  const base = {
    id: item.id,
    alt: item.alt || '',
    isVideo: item.isVideo || false,
    tag: item.proyecto ? item.proyecto.name : undefined,
  }
  if (base.isVideo) {
    return { ...base, poster: item.poster, video: item.video, src: item.src }
  }
  return { ...base, src: item.src }
}

export function fromWpPost(post, { estadoTaxonomies = ['convocatoria_estado'] } = {}) {
  const meta = post.meta || {}
  const term = (slugs) => {
    const groups = post._embedded?.['wp:term'] || []
    for (const group of groups) {
      const hit = group.find((t) => slugs.includes(t.taxonomy))
      if (hit) return hit
    }
    return null
  }
  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || '',
    content: post.content?.rendered || '',
    excerpt: post.excerpt?.rendered || '',
    date: post.date,
    meta,
    estado: term(estadoTaxonomies),
    imagen: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
  }
}

export function parseDetalles(raw) {
  try {
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
    if (Array.isArray(parsed)) return parsed
  } catch { /* noop */ }
  return null
}

export async function getGallery() {
  try {
    const data = await wpFetch('/gaviotas/v1/galeria')
    const list = (data && data.items) || []
    if (!Array.isArray(list) || list.length === 0) return null
    return list.map(fromWpItem)
  } catch {
    return null
  }
}

export async function getConvocatorias() {
  try {
    const data = await wpFetch('/wp/v2/convocatoria?_embed&per_page=30')
    if (!Array.isArray(data) || data.length === 0) return null
    return data.map(fromWpPost).map((post) => ({
      id: post.id,
      tag: post.estado?.name || post.title,
      title: post.title,
      desc: post.excerpt || post.content,
      finalizado: post.estado?.slug === 'finalizada',
      formUrl: post.meta.cpg_url_formulario || '',
      afiche: post.imagen,
      details: parseDetalles(post.meta.cpg_requisitos) || [],
    }))
  } catch {
    return null
  }
}

export async function getProyectos() {
  try {
    const data = await wpFetch('/wp/v2/proyecto?_embed&per_page=30')
    if (!Array.isArray(data) || data.length === 0) return null
    return data.map((p) => {
      const post = fromWpPost(p, { estadoTaxonomies: ['proyecto_cat', 'convocatoria_estado'] })
      return {
        ...post,
        title: post.title,
        desc: post.excerpt || post.content,
        finalizado: post.meta.cpg_estado === 'finalizado' || post.estado?.slug === 'finalizada',
        tag: post.estado?.name || (post.meta.cpg_estado === 'finalizado' ? 'Finalizado' : 'En marcha'),
      }
    })
  } catch {
    return null
  }
}

export async function getNoticias() {
  try {
    const data = await wpFetch('/wp/v2/noticia?_embed&per_page=12')
    if (!Array.isArray(data) || data.length === 0) return null
    return data.map((n) => {
      const post = fromWpPost(n, { estadoTaxonomies: ['proyecto_cat'] })
      return {
        ...post,
        title: post.title,
        desc: post.excerpt || post.content,
        tag: post.estado?.name || '',
      }
    })
  } catch {
    return null
  }
}