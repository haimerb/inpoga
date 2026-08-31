import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import RevealOnScroll from './RevealOnScroll'

const valores = [
  { title: 'Veracidad', desc: 'Actuamos con transparencia y honestidad en cada proceso.' },
  { title: 'Bondad', desc: 'El bienestar de la comunidad es el centro de nuestra acción.' },
  { title: 'Respeto', desc: 'Valoramos la dignidad y la diversidad de cada persona.' },
]

export default function MisionVision() {
  return (
    <Box
      id="mision-vision"
      component="section"
      sx={{
        py: { xs: 3.5, md: 6 },
        background: 'linear-gradient(165deg, #0c4f82 0%, #1068a0 100%)',
        color: 'rgba(255,255,255,0.92)',
      }}
    >
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <RevealOnScroll sx={{ textAlign: 'center', mx: 'auto', maxWidth: 680, mb: 4 }}>
          <Box
            sx={{
              display: 'inline-block', fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'gold.main',
              border: '1px solid rgba(255,210,0,0.4)', borderRadius: '999px',
              py: 0.4, px: 1.4, mb: 1.5,
            }}
          >
            Nuestra identidad
          </Box>
          <Typography variant="h2" sx={{ color: '#fff' }}>Misión, visión y valores</Typography>
        </RevealOnScroll>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {[
            {
              label: 'Misión',
              title: 'Contribuir al mejoramiento permanente de las comunidades.',
              text: 'Contribuir permanentemente al mejoramiento de las comunidades, implementando modelos de Gestión del desarrollo, coherentes con las necesidades de los territorios, a través de Sistemas integrados, capacitaciones y otros servicios en los temas normativos y de incidencia social.',
            },
            {
              label: 'Visión 2030',
              title: 'Ser líderes en gestión del desarrollo social económico sostenible.',
              text: 'Ser para el 2030 una organización líder en implementación de Sistemas de Gestión y de desarrollo social económico sostenible, con un alto índice de influencia SOCIAL en los territorios.',
            },
          ].map((card) => (
            <Grid item xs={12} md={6} key={card.label}>
              <RevealOnScroll>
                <Box
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                    borderTop: '2px solid gold.main', borderRadius: '1.25rem', p: { xs: 2, md: 3.2 },
                    backdropFilter: 'blur(4px)',
                    transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                    '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 16px 40px rgba(0,0,0,0.2)' },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-block', fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'gold.main', border: '1px solid gold.main', borderRadius: '999px',
                      py: 0.45, px: 1.2,
                    }}
                  >
                    {card.label}
                  </Box>
                  <Typography variant="h3" sx={{ mt: 1.8, mb: 1.2, color: '#fff', fontFamily: '"Fraunces", serif', fontSize: { xs: '1.4rem', sm: 'clamp(1.5rem,2.2vw,2rem)' }, fontWeight: 580 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.82)', mt: 0 }}>
                    {card.text}
                  </Typography>
                </Box>
              </RevealOnScroll>
            </Grid>
          ))}
        </Grid>

        <RevealOnScroll>
          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <Box className="section-tag-bottom" sx={{ mb: 2.5, color: 'gold.main', borderColor: 'gold.main' }}>
              Valores corporativos
            </Box>
            <Grid container spacing={2}>
              {valores.map((v) => (
                <Grid item xs={12} md={4} key={v.title}>
                  <Box
                    sx={{
                      textAlign: 'center', p: 3.2, bgcolor: '#fff', border: '1px solid rgba(26,26,26,0.08)',
                      borderRadius: '1.25rem', transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(12,79,130,0.06)' },
                    }}
                  >
                    <Typography variant="h3" sx={{ mb: 0.8, fontFamily: '"Fraunces", serif', fontSize: '1.3rem', color: 'primary.main' }}>
                      {v.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>
                      {v.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </RevealOnScroll>
      </Box>
    </Box>
  )
}
