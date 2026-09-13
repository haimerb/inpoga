import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import RevealOnScroll from './RevealOnScroll'
import { getNoticias } from '../lib/gaviotasApi'

function stripTags(html) {
  const div = document.createElement('div')
  div.innerHTML = html || ''
  return div.textContent || ''
}

export default function Noticias() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    let active = true
    getNoticias().then((data) => {
      if (active && data) setNoticias(data)
    })
    return () => { active = false }
  }, [])

  if (!noticias.length) return null

  return (
    <Box id="noticias" component="section" sx={{
      py: { xs: 4, md: 7 }, bgcolor: 'background.default',
      borderTop: '1px solid rgba(26,26,26,0.08)', borderBottom: '4px solid #1a7cc7',
      background: 'radial-gradient(ellipse at 0% 50%, rgba(26,124,199,0.05), transparent 50%)',
    }}>
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <RevealOnScroll sx={{ maxWidth: 680, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2 }}>
            <Box sx={{ variant: 'caption', color: '#1a7cc7', bgcolor: 'rgba(26,124,199,0.08)', py: 0.35, px: 0.9, borderRadius: '999px', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em' }}>
              Sección · Noticias
            </Box>
          </Box>
          <Box className="section-tag-bottom">Actividades y logros</Box>
          <Typography variant="h2" sx={{ mt: 1.2 }}>Noticias</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.98rem', maxWidth: 620, mt: 1 }}>
            Actividades, convocatorias y logros de la Corporación y de las mujeres empresarias del suroccidente.
          </Typography>
        </RevealOnScroll>

        <Grid container spacing={2}>
          {noticias.map((n) => (
            <Grid item xs={12} sm={6} md={4} key={n.id}>
              <RevealOnScroll stagger>
                <Box sx={{
                  display: 'flex', flexDirection: 'column', height: '100%',
                  bgcolor: 'background.paper', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '1.25rem', overflow: 'hidden',
                  transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(12,79,130,0.1)' },
                }}>
                  {n.imagen && (
                    <Box
                      component="img"
                      src={n.imagen}
                      alt=""
                      loading="lazy"
                      sx={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                    />
                  )}
                  <Box sx={{ p: { xs: 1.6, sm: 2 }, display: 'flex', flexDirection: 'column', gap: 0.8, flex: 1 }}>
                    {n.date && (
                      <Typography sx={{ variant: 'caption', color: 'terracotta.main', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em' }}>
                        {new Date(n.date).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </Typography>
                    )}
                    {n.tag && (
                      <Typography sx={{ variant: 'caption', alignSelf: 'flex-start', color: 'primary.main', bgcolor: 'rgba(26,124,199,0.08)', py: 0.25, px: 0.8, borderRadius: '999px', fontSize: '0.66rem', fontWeight: 600 }}>
                        {n.tag}
                      </Typography>
                    )}
                    <Typography variant="h3" sx={{ fontSize: '1.15rem', color: 'primary.main', lineHeight: 1.25 }}>{n.title}</Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.55, mt: 'auto' }}>
                      {stripTags(n.desc).slice(0, 220)}{stripTags(n.desc).length > 220 ? '…' : ''}
                    </Typography>
                  </Box>
                </Box>
              </RevealOnScroll>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}