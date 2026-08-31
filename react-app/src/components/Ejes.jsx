import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RevealOnScroll from './RevealOnScroll'

const ejes = [
  { num: '01', title: 'Mujeres y economía', sub: 'eje articulador de nuestros proyectos' },
  { num: '02', title: 'Mujeres y participación política' },
  { num: '03', title: 'Vida digna libre de violencias y acceso a la justicia' },
  { num: '04', title: 'Salud integral, derechos sexuales, reproductivos y recreación' },
  { num: '05', title: 'Educación, comunicación y cultura' },
  { num: '06', title: 'Desplazamiento forzado' },
  { num: '07', title: 'Mujeres y equidad étnico-racial' },
  { num: '08', title: 'Diversidad sexual y de género de las mujeres' },
  { num: '09', title: 'Mujeres, territorio, ambiente y movilidad' },
  { num: '10', title: 'Mujer y deporte' },
  { num: '11', title: 'Mujer y familia' },
]

export default function Ejes() {
  return (
    <Box component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: '#faf9f6', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
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
            Política Pública de la Mujer · Cali
          </Box>
          <Typography variant="h2">Once ejes que orientan nuestro trabajo comunitario.</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.98rem', maxWidth: 560, mx: 'auto', mt: 1 }}>
            Nuestros proyectos se construyen en paralelo a los ejes de la política pública de la mujer en Cali, conectando el oficio con el territorio.
          </Typography>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, columnGap: 4, rowGap: 0, borderTop: '1px solid rgba(26,26,26,0.08)' }}>
            {ejes.map((e) => (
              <Box
                component="li"
                key={e.num}
                sx={{
                  display: 'grid', gridTemplateColumns: '2.6rem 1fr auto', alignItems: 'baseline', gap: 1.4,
                  py: 1.4, px: 0.3, borderBottom: '1px solid rgba(26,26,26,0.08)',
                  transition: 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateX(6px)', bgcolor: '#fff', boxShadow: '0 6px 20px rgba(12,79,130,0.06)' },
                }}
              >
                <Typography sx={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', color: 'terracotta.main', fontSize: '1rem' }}>
                  {e.num}
                </Typography>
                <Typography component="strong" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {e.title}
                </Typography>
                {e.sub && (
                  <Typography
                    component="small"
                    sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'gold.main' }}
                  >
                    {e.sub}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </RevealOnScroll>
      </Box>
    </Box>
  )
}
