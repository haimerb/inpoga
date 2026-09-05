import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import RevealOnScroll from './RevealOnScroll'

const stats = [
  { dt: '35+', strong: 'Años', span: 'de trayectoria en Cali' },
  { dt: 'ESAL', strong: 'Tipo legal', span: 'Entidad sin ánimo de lucro' },
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
        <RevealOnScroll sx={{ maxWidth: 900 }}>
          <Typography 
            variant="h4" 
            component="p" 
            sx={{ 
              mb: 4, 
              display: 'inline-block', 
              color: 'primary.main', 
              fontWeight: 900, 
              fontSize: { xs: '1.6rem', sm: '2.35rem' },
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              textTransform: 'uppercase'
            }}
          >
            Integración Popular Gaviotas Corporación · Desde 1990
          </Typography>

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

          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'center', mt: 4, pt: 2, borderTop: '1px solid rgba(26,26,26,0.08)', maxWidth: 900, mx: 'auto', columnGap: { xs: 2, sm: 3.5 }, rowGap: { xs: 2, sm: 3 } }}>
            {stats.map((s) => (
              <Box key={s.dt} sx={{ display: 'flex', alignItems: 'baseline', gap: { xs: 0.6, sm: 1 } }}>
                <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '1.75rem', sm: '2.2rem' }, lineHeight: 1, color: 'terracotta.main', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {s.dt}
                </Typography>
                <Box>
                  <Typography component="strong" sx={{ display: 'block', fontSize: '1.05rem', color: 'primary.main', fontWeight: 700, lineHeight: 1.15 }}>
                    {s.strong}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.15 }}>
                    {s.span}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </RevealOnScroll>
      </Box>
    </Box>
  )
}
