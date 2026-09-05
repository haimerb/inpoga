import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import RevealOnScroll from './RevealOnScroll'

const facts = [
  { label: 'Fundación', strong: '30 de enero de 1990', small: 'Más de 35 años de trayectoria' },
  { label: 'NIT', strong: '800233121-5', small: 'ESAL' },
  { label: 'Cámara de Comercio', strong: '847-50', small: 'Inscrita 21/04/1997' },
  { label: 'Estructura', strong: 'Asamblea · Junta · Ad honorem', small: 'Afiliados, Junta Directiva y profesionales' },
  { label: 'Sede', strong: 'Cra 25 # 42 a 28', small: 'Cali, Valle del Cauca' },
]

export default function Nosotros() {
  return (
    <Box id="nosotros" component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <RevealOnScroll sx={{ mb: 4 }}>
          <Box sx={{ maxWidth: 680 }}>
            <Box className="section-tag-bottom" sx={{ mb: 1.5 }}>Quiénes somos</Box>
            <Typography variant="h2">Una organización nacida del territorio, hecha para servir a la comunidad.</Typography>
          </Box>
        </RevealOnScroll>

        <Grid container columnSpacing={4} rowSpacing={3.5} alignItems="stretch">
          <Grid item xs={12} md={6} lg={5}>
            <RevealOnScroll>
              <Typography sx={{ fontSize: '1.3rem', color: 'text.primary', fontWeight: 500, lineHeight: 1.42, mt: 0 }}>
                La{' '}
                <Box component="strong" sx={{ color: 'primary.main' }}>
                  Integración Popular Gaviotas Corporación
                </Box>{' '}
                es una organización sin ánimo de lucro dedicada al desarrollo cívico, cultural, educativo, deportivo, económico y social de las comunidades de todos los sectores de Cali y sus corregimientos, en especial los sectores marginados.
              </Typography>
              <Typography sx={{ color: 'text.secondary', mt: 2 }}>
                Nuestros profesionales cuentan con las habilidades, competencias y formación integral para desarrollar procesos sociales, implementando políticas de desarrollo en busca del mejoramiento continuo de las comunidades.
              </Typography>
              <Typography sx={{ color: 'text.secondary', mt: 2 }}>
                <Box component="strong" sx={{ color: 'primary.main' }}>Nuestro compromiso:</Box> La calidad en los servicios prestados, manteniendo un índice de cumplimiento excelente, en aplicación a los valores corporativos de veracidad, bondad y respeto.
              </Typography>
            </RevealOnScroll>
          </Grid>

          <Grid item xs={12} md={6} lg={7}>
            <RevealOnScroll stagger>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.15 }}>
                {facts.map((f) => (
                  <Box
                    key={f.label}
                    sx={{
                      position: 'relative', bgcolor: 'background.paper', border: '1px solid rgba(26,26,26,0.08)',
                      borderLeft: '3px solid gold.main', borderRadius: '1.25rem', p: { xs: 1.4, sm: 1.8 },
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(12,79,130,0.06)', borderLeftColor: 'terracotta.main' },
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'gold.dark', mb: 0.5 }}>
                      {f.label}
                    </Typography>
                    <Typography component="strong" variant="h4" sx={{ display: 'block', color: 'primary.main' }}>
                      {f.strong}
                    </Typography>
                    <Typography component="small" sx={{ display: 'block', mt: 0.3, color: 'text.secondary', fontSize: '0.9rem' }}>
                      {f.small}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </RevealOnScroll>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
