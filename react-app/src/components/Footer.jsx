import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

const footerLinkCol = [
  { title: 'La organización', links: [
    { label: 'Quiénes somos', href: '#nosotros' },
    { label: 'Misión y visión', href: '#mision-vision' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ]},
  { title: 'Líneas de acción', links: [
    { label: 'La Ruta de los Oficios', href: '#proyectos' },
    { label: 'Mujeres Empresarias', href: '#proyectos' },
    { label: 'Galería', href: '#galeria' },
  ]},
]

const h3Sx = {
  mb: 1.2,
  fontSize: '0.85rem',
  fontFamily: '"IBM Plex Mono", monospace',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'gold.main',
  position: 'relative',
  pb: 0.8,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '1.5rem',
    height: 2,
    bgcolor: 'gold.main',
    opacity: 0.5,
  },
}

export default function Footer() {
  useEffect(() => {
    const container = document.getElementById('siteseal')
    if (container && !container.hasChildNodes()) {
      const script = document.createElement('script')
      script.async = true
      script.type = 'text/javascript'
      script.src = 'https://seal.godaddy.com/getSealBasic?sealID=rif1HHNz2qQafGm8wcolj46BEIHT96yrjoyyYCG3gf7hRcAAL3ojzK3vXHKl'
      container.appendChild(script)
    }
  }, [])

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'rgba(255,255,255,0.82)', pt: 5, pb: 3, position: 'relative' }}>
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Grid container columnSpacing={3} rowSpacing={3} sx={{ pb: 4 }}>
          {/* Brand */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <Box component="img" src="/assets/logo-gaviotas.png" alt="Logo de Integración Popular Gaviotas Corporación" sx={{ width: 48, height: 48, objectFit: 'contain' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <Typography component="strong" sx={{ fontFamily: '"Fraunces", serif', fontSize: '1.02rem', color: '#fff', fontWeight: 700 }}>
                  Int. Popular Gaviotas
                </Typography>
                <Typography component="small" sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.66rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                  Corporación · Desde 1990
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.68)', maxWidth: '38ch', fontSize: '0.95rem' }}>
              Organización sin ánimo de lucro dedicada al desarrollo integral de comunidades de Cali y sus corregimientos desde 1990. Línea de acción: Mujeres Empresarias.
            </Typography>
          </Grid>

          {/* Link columns */}
          {footerLinkCol.map((col) => (
            <Grid item xs={6} sm={4} md={3} key={col.title}>
              <Typography component="h3" sx={h3Sx}>
                {col.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                {col.links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 0.7, color: 'rgba(255,255,255,0.66)', fontSize: '0.94rem' }}>
                    <Link href={link.href} underline="none" sx={{ color: 'inherit', '&:hover': { color: 'gold.main' } }}>
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Contact */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography component="h3" sx={h3Sx}>
              Contacto
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {[
                { text: 'Carrera 25 # 42 a 28' },
                { text: 'Cali · Valle del Cauca' },
                { isLink: true, href: 'mailto:contacto@corpogaviotas.org', label: 'contacto@corpogaviotas.org' },
                { isLink: true, href: 'tel:+573202205497', label: '+57 320 220 5497' },
              ].map((item, i) => (
                <Box component="li" key={i} sx={{ mb: 0.7, color: 'rgba(255,255,255,0.78)', fontSize: '0.94rem' }}>
                  {item.isLink ? (
                    <Link href={item.href} underline="none" sx={{ color: 'inherit', '&:hover': { color: 'gold.main' } }}>
                      {item.label}
                    </Link>
                  ) : item.text}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
              {[
                { href: 'https://www.facebook.com/p/Mujeres-Empresarias-Corporacion-Gaviotas-100069559297704/', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://www.instagram.com/', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { href: 'https://x.com/', label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Síguenos en ${social.label}`}
                  sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, height: 40, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.75)',
                    transition: 'background 0.25s ease, color 0.25s ease, transform 0.25s ease',
                    '&:hover': { bgcolor: 'gold.main', color: 'primary.main', transform: 'translateY(-2px)' },
                    '&:active': { transform: 'scale(0.95)' },
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.12)', py: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.8 }}>
          <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.72rem', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.45)', m: 0 }}>
            © 2026 Integración Popular Gaviotas Corporación · Cali, Valle del Cauca
          </Typography>
          <Box id="siteseal" sx={{ display: 'inline-flex', alignItems: 'center', opacity: 0.7, '&:hover': { opacity: 1 } }} />
        </Box>
      </Box>
    </Box>
  )
}
