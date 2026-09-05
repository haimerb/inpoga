import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import RevealOnScroll from './RevealOnScroll'
import MediaModal from './MediaModal'

const galleryItems = [
  { src: '/assets/gallery/gaviotas-04.jpg', alt: 'Taller de oficios para mujeres emprendedoras en Cali, Valle del Cauca', tag: 'Mujeres Empresarias' },
  { src: '/assets/gallery/gaviotas-16.jpg', alt: 'Capacitación en emprendimiento femenino para mujeres del Valle del Cauca', tag: 'Mujeres Empresarias' },
  { src: '/assets/gallery/gaviotas-19.jpg', alt: 'Capacitación en territorio para mujeres del suroccidente', tag: 'Mujeres Empresarias' },
  { src: '/assets/gallery/gaviotas-12.jpg', alt: 'Equipo de la Corporación con el estandarte en Cali, Valle del Cauca', tag: 'Mujeres Empresarias' },
  { src: '/assets/gallery/gaviotas-20.jpg', alt: 'Reunión de trabajo en Villa Carmelo, Pance', tag: 'La Ruta de los Oficios' },
  { src: '/assets/gallery/gaviotas-31.jpg', alt: 'Trabajo en comunidad de mujeres artesanas en Pance, Cali', tag: 'La Ruta de los Oficios' },
  { src: '/assets/gallery/gaviotas-29.jpg', alt: 'Actividad comunitaria en el suroccidente de Cali', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/gaviotas-21.jpg', alt: 'Equipo reunido en la sede de la Corporación', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-01.jpg', alt: 'Transmisión de Saberes — taller comunitario', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-02.jpg', alt: 'Transmisión de Saberes — formación en territorio', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-03.jpg', alt: 'Transmisión de Saberes — compartir conocimiento', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-04.jpg', alt: 'Transmisión de Saberes — aprendizaje colaborativo', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-05.jpg', alt: 'Transmisión de Saberes — capacitación práctica', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-06.jpg', alt: 'Transmisión de Saberes — comunidad participando', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-07.jpg', alt: 'Transmisión de Saberes — saberes ancestrales', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-08.jpg', alt: 'Transmisión de Saberes — actividades formativas', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-09.jpg', alt: 'Transmisión de Saberes — encuentro de saberes', tag: 'Transmisión de Saberes' },
  { src: '/assets/gallery/transmision-saberes-10.jpg', alt: 'Transmisión de Saberes — integración comunitaria', tag: 'Transmisión de Saberes' },
  { isVideo: true, poster: '/assets/gallery/video-04-poster.jpg', video: '/assets/gallery/video-04.mp4', src: '/assets/gallery/video-04-poster.jpg', alt: 'Video: testimonios y actividades de las mujeres empresarias', tag: 'Mujeres Empresarias' },
  { isVideo: true, poster: '/assets/gallery/video-06-poster.jpg', video: '/assets/gallery/video-06.mp4', src: '/assets/gallery/video-06-poster.jpg', alt: 'Video: celebración y logros de las mujeres empresarias', tag: 'Mujeres Empresarias' },
  { isVideo: true, poster: '/assets/gallery/video-07-poster.jpg', video: '/assets/gallery/video-07.mp4', src: '/assets/gallery/video-07-poster.jpg', alt: 'Video: recorrido de la Ruta de los Oficios', tag: 'La Ruta de los Oficios' },
  { isVideo: true, poster: '/assets/gallery/video-03-poster.jpg', video: '/assets/gallery/video-03.mp4', src: '/assets/gallery/video-03-poster.jpg', alt: 'Video: encuentro comunitario en territorio', tag: 'La Ruta de los Oficios' },
  { isVideo: true, poster: '/assets/gallery/video-01-poster.jpg', video: '/assets/gallery/video-01.mp4', src: '/assets/gallery/video-01-poster.jpg', alt: 'Video: actividad de la Corporación en territorio', tag: 'Transmisión de Saberes' },
  { isVideo: true, poster: '/assets/gallery/video-02-poster.jpg', video: '/assets/gallery/video-02.mp4', src: '/assets/gallery/video-02-poster.jpg', alt: 'Video: jornada formativa con la comunidad', tag: 'Transmisión de Saberes' },
  { isVideo: true, poster: '/assets/gallery/video-05-poster.jpg', video: '/assets/gallery/video-05.mp4', src: '/assets/gallery/video-05-poster.jpg', alt: 'Video: taller de formación en oficios', tag: 'Transmisión de Saberes' },
  { isVideo: true, poster: '/assets/gallery/video-08-poster.jpg', video: '/assets/gallery/video-08.mp4', src: '/assets/gallery/video-08-poster.jpg', alt: 'Video: clausura y reconocimientos del Curso de Piano', tag: 'Curso de Piano y Clausura' },
]

const typeChipSx = {
  position: 'absolute', top: 8, left: 8, zIndex: 2,
  display: 'inline-flex', alignItems: 'center', gap: 0.4,
  variant: 'caption', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.06em',
  color: '#fff', bgcolor: 'rgba(12,79,130,0.88)',
  px: 0.7, py: 0.3, borderRadius: '999px', backdropFilter: 'blur(4px)',
}
const tagChipSx = {
  position: 'absolute', top: 8, right: 8, zIndex: 2,
  variant: 'caption', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.03em',
  color: '#3a2f00', bgcolor: 'rgba(255,210,0,0.92)',
  px: 0.7, py: 0.3, borderRadius: '999px', maxWidth: '62%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
}
const filterSx = {
  fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.05em',
  border: '1px solid rgba(26,26,26,0.14)', borderRadius: '999px', px: 1.25, py: 0.5, cursor: 'pointer',
  bgcolor: 'background.paper', color: 'text.secondary', textTransform: 'uppercase',
  transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
  '&:hover': { borderColor: 'secondary.main', color: 'primary.main' },
  '&:focus-visible': { outline: '2px solid', outlineColor: 'secondary.main', outlineOffset: 2 },
}

const ChevronLeft = (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="none" aria-hidden="true">
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ChevronRight = (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="none" aria-hidden="true">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Galeria() {
  const [filter, setFilter] = useState('Todo')
  const [openIndex, setOpenIndex] = useState(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const scrollRef = useRef(null)

  const tags = useMemo(
    () => ['Todo', ...Array.from(new Set(galleryItems.map((i) => i.tag).filter(Boolean)))],
    []
  )
  const items = useMemo(
    () => (filter === 'Todo' ? galleryItems : galleryItems.filter((i) => i.tag === filter)),
    [filter]
  )

  const updateArrows = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 8)
    setCanRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth - 8)
  }, [])

  const scrollBy = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' })
  }

  const close = () => setOpenIndex(null)
  const navigate = (dir) => setOpenIndex((prev) => (prev + dir + items.length) % items.length)

  useEffect(() => {
    const id = requestAnimationFrame(updateArrows)
    return () => cancelAnimationFrame(id)
  }, [updateArrows, items])

  return (
    <Box id="galeria" component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: 'background.paper', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <RevealOnScroll>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 2, mb: 2.5 }}>
            <Box sx={{ maxWidth: 640 }}>
              <Box className="section-tag-bottom">Nuestra gente</Box>
              <Typography variant="h2" sx={{ mt: 1.1 }}>Así construimos comunidad.</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.98rem', maxWidth: 540, mt: 0.5 }}>
                Fotos y videos de nuestros proyectos y convocatorias. Hacé clic para ampliar y desplazate por la fila.
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.75 }}>
              <IconButton
                aria-label="Desplazar a la izquierda"
                disabled={!canLeft}
                onClick={() => scrollBy(-1)}
                sx={{ border: '1px solid rgba(26,26,26,0.14)', color: canLeft ? 'primary.main' : 'text.secondary', '&:hover': { bgcolor: 'rgba(12,79,130,0.06)' } }}
              >
                {ChevronLeft}
              </IconButton>
              <IconButton
                aria-label="Desplazar a la derecha"
                disabled={!canRight}
                onClick={() => scrollBy(1)}
                sx={{ border: '1px solid rgba(26,26,26,0.14)', color: canRight ? 'primary.main' : 'text.secondary', '&:hover': { bgcolor: 'rgba(12,79,130,0.06)' } }}
              >
                {ChevronRight}
              </IconButton>
            </Box>
          </Box>
        </RevealOnScroll>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9, mb: 2.25 }} role="group" aria-label="Filtrar galería">
          {tags.map((t) => (
            <Box
              key={t}
              component="button"
              type="button"
              onClick={() => { setFilter(t); setOpenIndex(null); if (scrollRef.current) scrollRef.current.scrollLeft = 0 }}
              aria-pressed={filter === t}
              sx={{
                ...filterSx,
                bgcolor: filter === t ? 'primary.main' : 'background.paper',
                color: filter === t ? '#fff' : 'text.secondary',
                borderColor: filter === t ? 'primary.main' : 'rgba(26,26,26,0.14)',
                fontWeight: filter === t ? 700 : 500,
              }}
            >
              {t}
              <Box component="span" sx={{ ml: 0.6, opacity: 0.8 }}>
                {t === 'Todo' ? galleryItems.length : galleryItems.filter((i) => i.tag === t).length}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          ref={scrollRef}
          role="region"
          aria-label="Galería de imágenes y videos de proyectos y convocatorias"
          onScroll={updateArrows}
          sx={{
            display: 'flex', gap: { xs: 1, sm: 1.25 },
            overflowX: 'auto', overflowY: 'hidden',
            scrollSnapType: 'x proximity', overscrollBehaviorX: 'contain',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
            px: { xs: 0.5, sm: 1 },
            pb: 0.75,
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {items.map((item, i) => (
            <Box
              key={item.src + (item.video || '')}
              component="button"
              type="button"
              className="gallery-item"
              onClick={() => setOpenIndex(i)}
              aria-label={`${item.isVideo ? 'Ver video' : 'Ampliar foto'}: ${item.alt}`}
              sx={{
                position: 'relative', flex: '0 0 auto',
                width: { xs: 196, sm: 236, md: 260 },
                aspectRatio: '4/3', m: 0, p: 0, border: 'none', cursor: 'pointer', overflow: 'hidden',
                borderRadius: '0.9rem', textAlign: 'left',
                bgcolor: 'background.default',
                boxShadow: '0 4px 16px rgba(12,79,130,0.07)',
                scrollSnapAlign: 'start',
                transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 14px 32px rgba(12,79,130,0.16)' },
                '&:focus-visible': { outline: '3px solid', outlineColor: 'secondary.main', outlineOffset: 2 },
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                loading="lazy"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <Box sx={typeChipSx}>
                <Box
                  component="span"
                  aria-hidden="true"
                  sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: item.isVideo ? '#ffd200' : '#fff', flex: 'none' }}
                />
                {item.isVideo ? 'Vídeo' : 'Foto'}
              </Box>
              {item.tag && <Box sx={tagChipSx}>{item.tag}</Box>}
              <Box
                className="gallery-overlay"
                aria-hidden="true"
                sx={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  bgcolor: 'rgba(8,18,30,0.28)', opacity: 0, transition: 'opacity 0.35s ease',
                  '.gallery-item:hover &': { opacity: 1 },
                  '.gallery-item:focus-visible &': { opacity: 1 },
                  '@media (hover: none)': { opacity: 1, bgcolor: 'rgba(8,18,30,0.1)' },
                }}
              >
                <svg viewBox="0 0 48 48" fill="none" style={{ width: 46, height: 46 }}>
                  {item.isVideo ? (
                    <>
                      <circle cx="24" cy="24" r="22" stroke="#fff" strokeWidth="2.4" opacity="0.9" />
                      <polygon points="20,16 35,24 20,32" fill="#fff" opacity="0.95" />
                    </>
                  ) : (
                    <>
                      <circle cx="24" cy="24" r="19" stroke="#fff" strokeWidth="2.2" opacity="0.9" />
                      <path d="M28 16l7 7v10a2 2 0 01-2 2H16a2 2 0 01-2-2V18a2 2 0 012-2h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                    </>
                  )}
                </svg>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {openIndex !== null && items[openIndex] && (
        <MediaModal items={items} index={openIndex} onClose={close} onNavigate={navigate} />
      )}
    </Box>
  )
}