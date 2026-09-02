import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RevealOnScroll from './RevealOnScroll'

const galleryItems = [
  { src: '/assets/gallery/gaviotas-12.jpg', alt: 'Equipo de la Corporación Gaviotas con el estandarte en Cali, Valle del Cauca' },
  { src: '/assets/gallery/gaviotas-20.jpg', alt: 'Reunión de trabajo en Villa Carmelo, Pance' },
  { src: '/assets/gallery/gaviotas-29.jpg', alt: 'Actividad comunitaria en el suroccidente de Cali' },
  { src: '/assets/gallery/gaviotas-04.jpg', alt: 'Taller de oficios para mujeres emprendedoras en Cali, Valle del Cauca' },
  { src: '/assets/gallery/gaviotas-21.jpg', alt: 'Equipo reunido en la sede de la Corporación' },
  { src: '/assets/gallery/gaviotas-16.jpg', alt: 'Capacitación en emprendimiento femenino para mujeres del Valle del Cauca' },
  {
    isVideo: true,
    poster: '/assets/gallery/video-01-poster.jpg',
    video: '/assets/gallery/video-01.mp4',
    src: '/assets/gallery/video-01-poster.jpg',
    alt: 'Video: actividad comunitaria de la Corporación en territorio',
  },
  { src: '/assets/gallery/gaviotas-31.jpg', alt: 'Trabajo en comunidad de mujeres artesanas en Pance, Cali' },
  { src: '/assets/gallery/gaviotas-19.jpg', alt: 'Capacitación en territorio para mujeres del suroccidente' },
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
]

export default function Galeria() {
  const handleVideoClick = (item) => {
    window.dispatchEvent(new CustomEvent('open-video-modal', { detail: { video: item.video, poster: item.poster } }))
  }

  return (
    <Box id="galeria" component="section" sx={{ pt: { xs: 3.5, md: 6 }, pb: 0, overflow: 'hidden' }}>
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <RevealOnScroll sx={{ textAlign: 'center', mx: 'auto', maxWidth: 680, mb: 4 }}>
          <Box
            sx={{
              display: 'inline-block', fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'primary.main',
              border: '1px solid rgba(255,210,0,0.4)', borderRadius: '999px',
              py: 0.45, px: 1.4, mb: 1.5,
            }}
          >
            Nuestra gente
          </Box>
          <Typography variant="h2">Así construimos comunidad.</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.98rem', maxWidth: 560, mx: 'auto', mt: 1 }}>
            Imágenes y testimonios de las actividades de la Corporación en territorio.
          </Typography>
        </RevealOnScroll>
      </Box>

      <Box className="gallery-track-wrap">
        <RevealOnScroll>
          <Box className="gallery-track">
            {galleryItems.map((item, i) => (
              <Box
                key={i}
                className={`gallery-item${item.isVideo ? ' video-item' : ''}`}
                onClick={item.isVideo ? () => handleVideoClick(item) : undefined}
                sx={{
                  flex: '0 0 auto', width: { xs: 220, sm: 260, md: 340 }, aspectRatio: '4/3',
                  borderRadius: '1.25rem', overflow: 'hidden', position: 'relative', m: 0,
                  cursor: item.isVideo ? 'pointer' : 'default',
                  boxShadow: '0 6px 20px rgba(12,79,130,0.06)', scrollSnapAlign: 'center',
                  transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
                  '&:hover': { transform: 'translateY(-6px) scale(1.02)', boxShadow: '0 24px 56px rgba(12,79,130,0.14)', zIndex: 2 },
                  '&:hover img': { transform: 'scale(1.05)' },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                />
                {item.isVideo && (
                  <Box
                    className="play-icon"
                    sx={{
                      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,0,0,0.15)', opacity: 0, transition: 'opacity 0.35s ease',
                      '&:hover': { opacity: 1 },
                      '.gallery-item:hover &': { opacity: 1 },
                    }}
                  >
                    <svg viewBox="0 0 48 48" fill="none" style={{ width: 56, height: 56 }}>
                      <circle cx="24" cy="24" r="23" stroke="#fff" strokeWidth="2" opacity="0.85" />
                      <polygon points="19,15 35,24 19,33" fill="#fff" opacity="0.9" />
                    </svg>
                  </Box>
                )}
                {item.tag && (
                  <Box sx={{
                    position: 'absolute', top: 10, left: 10,
                    fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.65rem', fontWeight: 600,
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                    color: '#fff', bgcolor: 'rgba(12,79,130,0.85)',
                    px: 0.8, py: 0.3, borderRadius: '999px', backdropFilter: 'blur(4px)',
                  }}>
                    {item.tag}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </RevealOnScroll>
      </Box>
    </Box>
  )
}
