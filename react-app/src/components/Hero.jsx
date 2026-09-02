import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import RevealOnScroll from './RevealOnScroll'

const stats = [
  { dt: '35+', strong: 'Años', span: 'de trayectoria en Cali' },
  { dt: 'ESAL', strong: 'Tipo legal', span: 'utilidad comunal sin fines de lucro' },
  { dt: '3', strong: 'Valores', span: 'veracidad, bondad, respeto' },
]

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 20% 15%, rgba(26,124,199,0.05), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255,210,0,0.04), transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(12,79,130,0.02), transparent 60%), #faf9f6',
      }}
    >
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2 }}>
        <RevealOnScroll sx={{ maxWidth: 720 }}>
          <Box className="eyebrow" sx={{ mb: 2, display: 'inline-block' }}>
            Integración Popular Gaviotas Corporación · Desde 1990
          </Box>

          <Typography variant="h1" component="h1" sx={{ fontSize: { xs: 'clamp(1.8rem,7vw,2.6rem)', sm: 'clamp(2.8rem,5.2vw,5rem)' }, my: 2.2 }}>
            Desarrollo comunitario
            <br />
            <Box component="em" sx={{ color: 'secondary.main' }}>con 35 años en Cali.</Box>
          </Typography>

          <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.98rem', sm: '1.1rem' }, maxWidth: 600, mx: 'auto' }}>
            Organización sin ánimo de lucro dedicada al desarrollo cívico,
            cultural, educativo, deportivo, económico y social de las
            comunidades más vulnerables del suroccidente. Impulsamos{' '}
            <Box component="strong">Mujeres Empresarias</Box> como línea de acción
            para la autonomía económica.
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.4, mt: 3.4, justifyContent: 'center' }}>
            <Button
              component="a" href="#nosotros"
              variant="contained"
              sx={{
                borderRadius: '999px', px: 2.8, py: 1.3, fontWeight: 700, fontSize: '0.96rem',
                bgcolor: 'primary.main', borderBottom: '3px solid gold.main',
                boxShadow: '0 12px 26px rgba(12,79,130,0.24)',
                '&:hover': { bgcolor: 'primary.dark', boxShadow: '0 18px 34px rgba(12,79,130,0.3)' },
                textTransform: 'none',
              }}
            >
              Conocenos
            </Button>
            <Button
              component="a" href="#proyectos"
              variant="outlined"
              sx={{
                borderRadius: '999px', px: 2.8, py: 1.3, fontWeight: 700, fontSize: '0.96rem',
                borderColor: 'text.secondary', color: 'text.primary', textTransform: 'none',
                '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' },
              }}
            >
              Nuestros proyectos
            </Button>
          </Box>

          <Grid container spacing={2} sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(26,26,26,0.08)', maxWidth: 560, mx: 'auto' }}>
            {stats.map((s) => (
              <Grid key={s.dt} item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontSize: { xs: '1.5rem', sm: '1.9rem' }, lineHeight: 1, color: 'terracotta.main', fontWeight: 600 }}>
                    {s.dt}
                  </Typography>
                  <Typography component="strong" sx={{ display: 'block', fontSize: '0.95rem', color: 'primary.main', fontWeight: 700, mt: 0.5 }}>
                    {s.strong}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary' }}>
                    {s.span}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </RevealOnScroll>
      </Box>
    </Box>
  )
}
