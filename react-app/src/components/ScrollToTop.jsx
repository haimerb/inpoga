import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      if (y > 500 && y < last) setVisible(true)
      else if (y < 300) setVisible(false)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <IconButton
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        position: 'fixed',
        bottom: '5.5rem',
        right: '1.5rem',
        zIndex: 49,
        width: 42,
        height: 42,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        color: '#fff',
        boxShadow: '0 4px 14px rgba(12,79,130,0.3)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(12,79,130,0.4)', bgcolor: 'primary.main' },
        '&:active': { transform: 'scale(0.95)' },
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </IconButton>
  )
}
