import { useState, useEffect, useRef, useCallback } from 'react'
import Box from '@mui/material/Box'

export default function VideoModal() {
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState('')
  const [poster, setPoster] = useState('')
  const closeRef = useRef(null)
  const triggerRef = useRef(null)

  const close = useCallback(() => {
    setOpen(false)
    setSrc('')
    setPoster('')
    document.body.style.overflow = ''
    if (triggerRef.current) triggerRef.current.focus()
  }, [])

  useEffect(() => {
    const handler = (e) => {
      setSrc(e.detail.video)
      setPoster(e.detail.poster || '')
      setOpen(true)
      document.body.style.overflow = 'hidden'
      triggerRef.current = e.target
    }
    window.addEventListener('open-video-modal', handler)
    return () => window.removeEventListener('open-video-modal', handler)
  }, [])

  useEffect(() => {
    if (open && closeRef.current) closeRef.current.focus()
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) close()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Tab' && closeRef.current) {
      e.preventDefault()
      closeRef.current.focus()
    }
  }

  return (
    <Box
      className={`video-modal${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <h2 id="video-modal-title" className="sr-only">Video de la Corporación Gaviotas</h2>
      <button ref={closeRef} className="video-modal-close" aria-label="Cerrar" onClick={close}>
        &times;
      </button>
      {src && (
        <video
          key={src}
          controls
          autoPlay
          poster={poster || undefined}
          src={src}
          aria-label="Video de la Corporación Gaviotas"
        />
      )}
    </Box>
  )
}
