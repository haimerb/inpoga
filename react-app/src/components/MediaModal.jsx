import { useCallback, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

const ChevronLeft = (
  <svg viewBox="0 0 24 24" width={26} height={26} fill="none" aria-hidden="true">
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ChevronRight = (
  <svg viewBox="0 0 24 24" width={26} height={26} fill="none" aria-hidden="true">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const CloseIcon = (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
)

export default function MediaModal({ items, index, onClose, onNavigate }) {
  const item = items[index]
  const closeRef = useRef(null)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (closeRef.current) closeRef.current.focus()
    return () => { document.body.style.overflow = prevOverflow }
  }, [])

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose() }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); onNavigate(-1) }
    else if (e.key === 'ArrowRight') { e.preventDefault(); onNavigate(1) }
  }, [onClose, onNavigate])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  if (!item) return null

  const hasPrev = index > 0
  const hasNext = index < items.length - 1
  const title = `${item.isVideo ? 'Video' : 'Foto'} de la Corporación Gaviotas`

  return (
    <Box
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — ${index + 1} de ${items.length}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      sx={{
        position: 'fixed', inset: 0, zIndex: 1200,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        bgcolor: 'rgba(8,18,30,0.92)', backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)', px: { xs: 1, sm: 3 },
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: { xs: 1.5, sm: 2 }, zIndex: 2 }}>
        <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {index + 1} / {items.length}{item.tag ? ` · ${item.tag}` : ''}
        </Typography>
        <IconButton ref={closeRef} onClick={onClose} aria-label="Cerrar" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' } }}>
          {CloseIcon}
        </IconButton>
      </Box>

      {hasPrev && (
        <IconButton
          aria-label="Anterior"
          onClick={() => onNavigate(-1)}
          sx={{
            position: 'absolute', left: { xs: 8, sm: 24 }, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
            color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', width: 52, height: 52,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
          }}
        >
          {ChevronLeft}
        </IconButton>
      )}
      {hasNext && (
        <IconButton
          aria-label="Siguiente"
          onClick={() => onNavigate(1)}
          sx={{
            position: 'absolute', right: { xs: 8, sm: 24 }, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
            color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', width: 52, height: 52,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
          }}
        >
          {ChevronRight}
        </IconButton>
      )}

      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {item.isVideo ? (
          <video
            key={item.video}
            controls
            autoPlay
            poster={item.poster || undefined}
            src={item.video}
            style={{ maxWidth: '100%', maxHeight: '68vh', borderRadius: '0.9rem', background: '#000', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            style={{ maxWidth: '100%', maxHeight: '68vh', borderRadius: '0.9rem', objectFit: 'contain', display: 'block', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
          />
        )}
      </Box>

      <Typography sx={{ color: 'rgba(255,255,255,0.72)', mt: 1.6, textAlign: 'center', px: 2, fontSize: '0.92rem', maxWidth: 680 }}>
        {item.alt}
      </Typography>
    </Box>
  )
}