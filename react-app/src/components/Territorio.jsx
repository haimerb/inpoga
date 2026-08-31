import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import RevealOnScroll from './RevealOnScroll'

export default function Territorio() {
  return (
    <Box component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: '#faf9f6' }}>
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Grid container columnSpacing={4} rowSpacing={3.5} alignItems="start">
          <Grid item xs={12} md={6}>
            <RevealOnScroll>
              <Box className="section-tag-bottom" sx={{ mb: 1.5 }}>Territorio</Box>
              <Typography variant="h2" sx={{ mt: 1 }}>Donde estamos hoy, y hacia dónde crecemos.</Typography>
              <Typography sx={{ color: 'text.secondary', mt: 1.5 }}>
                Nuestra oficina principal se encuentra en el sur de Cali. Los proyectos se proyectan a través de los corregimientos del Valle del Cauca, uniendo territorio, oficio y comunidad.
              </Typography>
            </RevealOnScroll>
          </Grid>

          <Grid item xs={12} md={6}>
            <RevealOnScroll stagger>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{
                    borderRadius: '1.25rem', p: 2.5, bgcolor: '#fff', border: '1px solid rgba(26,26,26,0.08)',
                    borderTop: '4px solid secondary.main',
                  }}>
                    <Typography variant="h3" sx={{ mb: 1.2, fontSize: '1.2rem', color: 'primary.main' }}>Sede principal</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 0.7 }}>
                      {['Carrera 25 # 42 a 28', 'Cali, Valle del Cauca', 'Comunas 12, 1, 4 y 17'].map((item) => (
                        <Box component="li" key={item} sx={{ position: 'relative', pl: 1.6, color: 'text.secondary', fontSize: '0.96rem', '&::before': { content: '""', position: 'absolute', left: 0, top: '0.62em', width: '0.5rem', height: '0.5rem', borderRadius: '50%', bgcolor: 'gold.main' } }}>
                          {item}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{
                    borderRadius: '1.25rem', p: 2.5, bgcolor: '#fff', border: '1px solid rgba(26,26,26,0.08)',
                    borderTop: '4px solid gold.main',
                  }}>
                    <Typography variant="h3" sx={{ mb: 1.2, fontSize: '1.2rem', color: 'primary.main' }}>Proyectos en territorio</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 0.7 }}>
                      {['Corregimiento La Paz · Cali', 'Corregimiento El Tablón · Palmira', 'Corregimiento La Estrella · Jamundí', 'y otras comunas de Cali'].map((item) => (
                        <Box component="li" key={item} sx={{ position: 'relative', pl: 1.6, color: 'text.secondary', fontSize: '0.96rem', '&::before': { content: '""', position: 'absolute', left: 0, top: '0.62em', width: '0.5rem', height: '0.5rem', borderRadius: '50%', bgcolor: 'gold.main' } }}>
                          {item}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </RevealOnScroll>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
