import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'

export default function VideoModal() {
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState('')
  const [poster, setPoster] = useState('')

  useEffect(() => {
    const handler = (e) => {
      setSrc(e.detail.video)
      setPoster(e.detail.poster || '')
      setOpen(true)
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('open-video-modal', handler)
    return () => window.removeEventListener('open-video-modal', handler)
  }, [])

  const close = () => {
    setOpen(false)
    setSrc('')
    setPoster('')
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <Box
      className={`video-modal${open ? ' is-open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <button className="video-modal-close" aria-label="Cerrar" onClick={close}>
        &times;
      </button>
      {src && <video key={src} controls autoPlay poster={poster || undefined} src={src} />}
    </Box>
  )
}
