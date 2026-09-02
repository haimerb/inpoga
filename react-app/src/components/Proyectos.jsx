import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import RevealOnScroll from './RevealOnScroll'

const routeStops = [
  { tag: '01', name: 'Artesanías', side: 'left', top: '3%' },
  { tag: '02', name: 'Gastronomía', side: 'right', top: '16%' },
  { tag: '03', name: 'Agroecoturismo', side: 'left', top: '31%' },
  { tag: '04', name: 'Agropecuario', side: 'right', top: '46%' },
  { tag: '05', name: 'Técnicos', side: 'left', top: '61%' },
  { tag: '06', name: 'Profesionales', side: 'right', top: '76%' },
]

const oficios = [
  { title: 'Artesanías y manufacturas', desc: 'Saberes de la mano que se vuelven piezas, oficio y sustento.' },
  { title: 'Gastronómica', desc: 'La cocina del Valle del Cauca como identidad, oficio y economía.' },
  { title: 'Agroecoturísticos', desc: 'Recorridos que abren el territorio y valoran su riqueza natural.' },
  { title: 'Agropecuarios', desc: 'Producción del campo que alimenta a la comunidad y a la ruta.' },
  { title: 'Técnicos y operativos', desc: 'Capacidades aplicadas que sostienen los servicios de la ruta.' },
  { title: 'Profesionales', desc: 'Conocimiento especializado que fortalece cada emprendimiento.' },
]

const expCards1 = [
  { year: '1996', title: 'Talleres de gestión empresarial', desc: 'Capacitación en emprendimiento para la Comuna 12 de Cali.' },
  { year: '1996 – 2000', title: 'Encuentros culturales', desc: 'Encuentros culturales y pintura infantil en la Comuna 12.' },
  { year: '1998', title: 'Escuela Juan XXIII', desc: 'Talleres de educación en artes y oficios para jóvenes y adultos.' },
  { year: '1996 – 2000', title: 'Talleres artísticos', desc: 'Peluquería y belleza, guitarra, piano, reparación de neveras y lavadoras.' },
]

const expCards2 = [
  { year: '1999', title: 'Unidades Básicas Docentes', desc: 'Constitución, fortalecimiento y consolidación de unidades básicas docentes — SEM.' },
  { year: '1999', title: 'Cobertura educativa', desc: 'Ampliación de cobertura en educación básica — SEM.' },
  { year: '2000', title: 'Talleres culturales', desc: 'Fortalecimiento de los talleres culturales Comuna 12 — Secretaría de Bienestar Social de Cali.' },
]

const expCards3 = [
  { year: '2011', title: 'Inicio del proyecto', desc: 'Nace la línea Mujeres Empresarias como iniciativa de desarrollo económico femenino.' },
  { year: '2012 – 2015', title: 'Muestras empresariales', desc: 'Primera, segunda y tercera Muestra Empresaria del grupo de Mujeres Empresarias.' },
  { year: '2014 – 2015', title: 'Feria de Cali', desc: 'Participación en la Muestra Empresarial de la Feria de Cali.' },
]

const cardSx = {
  bgcolor: 'background.paper', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '1.25rem', p: { xs: 1.6, sm: 2.2 },
  transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(12,79,130,0.06)' },
}

function ExpCard({ year, title, desc }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={cardSx}>
        <Box sx={{ display: 'inline-block', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.75rem', color: 'gold.main', bgcolor: 'rgba(255,210,0,0.1)', py: 0.3, px: 0.9, borderRadius: '999px', mb: 0.8 }}>
          {year}
        </Box>
        <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 0.6, color: 'primary.main' }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.5, mt: 0 }}>{desc}</Typography>
      </Box>
    </Grid>
  )
}

function ProyectoBlock({ tag, title, desc, children }) {
  return (
    <RevealOnScroll sx={{ mb: 5, pb: 4, borderBottom: '1px solid rgba(26,26,26,0.08)', '&:last-of-type': { mb: 0, pb: 0, borderBottom: 'none' } }}>
      <Box sx={{ mb: 2.5 }}>
        <Box sx={{ display: 'inline-block', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'terracotta.main', bgcolor: 'rgba(181,90,58,0.08)', py: 0.3, px: 0.9, borderRadius: '999px', mb: 0.8 }}>
          {tag}
        </Box>
        <Typography variant="h3" sx={{ mb: 0.8, color: 'primary.main', fontSize: { xs: '1.25rem', sm: '1.6rem' } }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 640 }}>{desc}</Typography>
      </Box>
      {children}
    </RevealOnScroll>
  )
}

export default function Proyectos() {
  return (
    <Box id="proyectos" component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: 'background.paper', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
      <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <RevealOnScroll sx={{ maxWidth: 680, mb: 4 }}>
          <Box className="section-tag-bottom">Nuestro trabajo</Box>
          <Typography variant="h2" sx={{ mt: 1.2 }}>35 años construyendo desarrollo en Cali.</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.98rem', maxWidth: 560, mt: 1 }}>
            La Corporación ha desarrollado proyectos en educación, cultura, economía y emprendimiento desde 1996. Conocé nuestras líneas de acción.
          </Typography>
        </RevealOnScroll>

        <ProyectoBlock tag="Proyecto activo" title="La Ruta de los Oficios"
          desc="Desde 2011, la línea Mujeres Empresarias impulsa La Ruta de los Oficios, un proyecto productivo que une seis oficios en una ruta agro-turística alineada a la Política Pública de la Mujer en Cali."
        >
          <Box className="ruta-visual">
            <Box className="route-svg">
              <svg viewBox="0 0 460 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 460, height: '100%' }}>
                <path d="M 40,30 C 130,30 80,110 230,110 S 370,190 230,190 S 80,270 230,270 S 390,350 230,350 S 80,430 230,430 S 370,510 230,510 S 40,580 40,580" stroke="url(#routeGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 5" opacity="0.5" />
                <defs>
                  <linearGradient id="routeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e8b830" />
                    <stop offset="100%" stopColor="#b55a3a" />
                  </linearGradient>
                </defs>
              </svg>
              {routeStops.map((stop) => (
                <Box key={stop.tag} className={`route-stop ${stop.side}`} style={{ top: stop.top }}>
                  <Box className="stop-dot" />
                  <Box className="stop-tag">{stop.tag}</Box>
                  <Box className="stop-name">{stop.name}</Box>
                </Box>
              ))}
              <Box className="route-endpoints">
                <Box className="endpoint origin">Villa Carmelo</Box>
                <Box className="endpoint dest">Suroccidente de Cali</Box>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={2}>
            {oficios.map((o) => (
              <Grid item xs={12} sm={6} md={4} key={o.title}>
                <RevealOnScroll>
                  <Box sx={{
                    position: 'relative', bgcolor: 'background.paper', border: '1px solid rgba(26,26,26,0.08)',
                    borderRadius: '1.25rem', p: { xs: 1.6, sm: 2.4 },
                    transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(12,79,130,0.1)' },
                    '&::after': { content: '""', position: 'absolute', bottom: 0, left: 1.6, right: 1.6, height: 2, background: 'linear-gradient(90deg, #ffd200, #1a7cc7)', borderRadius: 2, opacity: 0, transition: 'opacity 0.3s ease' },
                    '&:hover::after': { opacity: 1 },
                  }}>
                    <Typography variant="h3" sx={{ mb: 0.8, color: 'primary.main', fontSize: '1.35rem' }}>{o.title}</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', mt: 0 }}>{o.desc}</Typography>
                  </Box>
                </RevealOnScroll>
              </Grid>
            ))}
          </Grid>
        </ProyectoBlock>

        <ProyectoBlock tag="1996 – 2000" title="Experiencia comunitaria"
          desc="Talleres de capacitación artística, oficios y educación en la Comuna 12 de Cali, fortaleciendo el tejido social desde la raíz."
        >
          <Grid container spacing={2}>
            {expCards1.map((c) => <ExpCard key={c.title} {...c} />)}
          </Grid>
        </ProyectoBlock>

        <ProyectoBlock tag="1999 – 2000" title="Contratos públicos"
          desc="Ejecución de programas de interés público a través de contratos con entidades del Estado de Cali."
        >
          <Grid container spacing={2}>
            {expCards2.map((c) => <ExpCard key={c.title} {...c} />)}
          </Grid>
        </ProyectoBlock>

        <ProyectoBlock tag="Desde 2011" title="Mujeres Empresarias"
          desc="Proyecto que reconoce el emprendimiento y el oficio de las mujeres como herramientas reales de autonomía económica. Su expresión principal es La Ruta de los Oficios."
        >
          <Grid container spacing={2}>
            {expCards3.map((c) => <ExpCard key={c.title} {...c} />)}
          </Grid>
        </ProyectoBlock>
      </Box>
    </Box>
  )
}
