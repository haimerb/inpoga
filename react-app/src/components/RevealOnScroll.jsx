import { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'

export default function RevealOnScroll({ children, stagger = false, sx = {}, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [stagger])

  return (
    <Box
      ref={ref}
      className={`reveal${stagger ? ' reveal-stagger' : ''}`}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  )
}
