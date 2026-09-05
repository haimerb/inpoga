import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
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
  { year: '1996', title: 'Talleres de gestión empresarial', desc: 'Capacitación en emprendimiento para la Comuna 12 de Cali.', status: 'inactivo' },
  { year: '1996 – 2000', title: 'Encuentros culturales', desc: 'Encuentros culturales y pintura infantil en la Comuna 12.', status: 'inactivo' },
  { year: '1998', title: 'Escuela Juan XXIII', desc: 'Talleres de educación en artes y oficios para jóvenes y adultos.', status: 'inactivo' },
  { year: '1996 – 2000', title: 'Talleres artísticos', desc: 'Peluquería y belleza, guitarra, piano, reparación de neveras y lavadoras.', status: 'inactivo' },
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

const proyectoPianoPractico = {
  tag: 'Inscripciones Abiertas',
  title: 'Curso Práctico de Piano',
  desc: 'Nueva convocatoria de formación musical con cupos limitados. Aprendé a tocar el piano con clases prácticas en tu territorio. Inscripción gratuita.',
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeFSH7H-kBJiWNvldwMnJm_QhRDe8jK_9_u4u8PRFnVnyRCIA/viewform',
  details: [
    { label: 'Inscripción', text: 'Abierta hasta completar los cupos limitados.' },
    { label: 'Lugares de clase', text: 'Los Cristales, El Rodeo y Colegio Hermano Gabriel.' },
    { label: 'Requisitos', text: 'Completá el formulario en línea con tus datos de contacto.' },
  ]
}

const proyectoPiano = {
  tag: '2025',
  title: 'Curso de Piano y Clausura',
  desc: 'Programa de formación artística intensiva en piano que culminó en una clausura comunitaria celebrando el talento y la perseverancia de los estudiantes.',
  details: [
    { label: 'Inscripciones', text: 'Apertura de inscripciones para jóvenes y adultos interesados en la música.' },
    { label: 'Formación', text: 'Clases teóricas y prácticas orientadas al dominio del instrumento.' },
    { label: 'Clausura', text: 'Evento final de presentación de obras musicales ante la comunidad.' },
  ]
}

const saberesFases = [
  { title: 'Diagnóstico', desc: 'Mapeo de necesidades y convocatoria de formadores en cada territorio.' },
  { title: 'Diseño pedagógico', desc: 'Estructuración de áreas del conocimiento y cronogramas según las solicitudes del territorio.' },
  { title: 'Ejecución en territorio', desc: 'Talleres, seminarios, clases y acompañamiento personalizado de aprendizaje colaborativo.' },
  { title: 'Monitoreo', desc: 'Evaluación de aprendizajes y guías de aprendizaje local para el mejoramiento continuo.' },
]

const cardSx = {
  bgcolor: 'background.paper', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '1.25rem', p: { xs: 1.6, sm: 2.2 },
  transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(12,79,130,0.06)' },
}

function ExpCard({ year, title, desc, status }) {
  const isInactive = status === 'inactivo'
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={{ 
        ...cardSx, 
        opacity: isInactive ? 0.7 : 1, 
        filter: isInactive ? 'grayscale(0.5)' : 'none',
        borderLeft: isInactive ? '4px solid rgba(0,0,0,0.1)' : '4px solid gold.main'
      }}>
        <Box sx={{ 
          display: 'inline-block', 
          variant: 'caption', 
          color: isInactive ? 'text.secondary' : 'gold.dark', 
          bgcolor: isInactive ? 'rgba(0,0,0,0.05)' : 'rgba(255,210,0,0.1)', 
          py: 0.3, px: 0.9, borderRadius: '999px', mb: 0.8 
        }}>
          {year} {isInactive && ' (Finalizado)'}
        </Box>
        <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 0.6, color: isInactive ? 'text.secondary' : 'primary.main' }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.5, mt: 0 }}>{desc}</Typography>
      </Box>
    </Grid>
  )
}

function ProyectoBlock({ tag, title, desc, children, finalizado }) {
  const tagColor = finalizado ? 'text.secondary' : 'terracotta.main'
  const tagBg = finalizado ? 'rgba(0,0,0,0.05)' : 'rgba(181,90,58,0.08)'
  return (
    <RevealOnScroll sx={{ mb: 5, pb: 4, borderBottom: '1px solid rgba(26,26,26,0.08)', '&:last-of-type': { mb: 0, pb: 0, borderBottom: 'none' } }}>
      <Box sx={{ mb: 2.5 }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8, variant: 'caption', color: tagColor, bgcolor: tagBg, py: 0.3, px: 0.9, borderRadius: '999px', mb: 0.8 }}>
          {tag}
          {finalizado && <Box component="span" sx={{ fontWeight: 600, letterSpacing: '0.08em', color: 'text.secondary' }}>· Finalizado</Box>}
        </Box>
        <Typography variant="h3" sx={{ mb: 0.8, color: 'primary.main', fontSize: { xs: '1.25rem', sm: '1.6rem' }, opacity: finalizado ? 0.85 : 1 }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 640, opacity: finalizado ? 0.8 : 1 }}>{desc}</Typography>
      </Box>
      {children}
    </RevealOnScroll>
  )
}

export default function Proyectos() {
  return (
    <>
      <Box id="convocatorias" component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: 'background.default', borderBottom: '1px solid rgba(26,26,26,0.08)' }}>
        <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <RevealOnScroll sx={{ maxWidth: 680, mb: 4 }}>
            <Box className="section-tag-bottom">Oportunidades y balance</Box>
            <Typography variant="h2" sx={{ mt: 1.2 }}>Convocatorias</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.98rem', maxWidth: 620, mt: 1 }}>
              Abierta la inscripción al Curso Práctico de Piano. También publicamos el balance de las convocatorias que ya cerraron.
            </Typography>
          </RevealOnScroll>

          <ProyectoBlock tag={proyectoPianoPractico.tag} title={proyectoPianoPractico.title} desc={proyectoPianoPractico.desc}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: { xs: 2, md: 3 }, alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/convocatoria-piano-practico.webp"
                alt="Afiche oficial de la convocatoria Curso Práctico de Piano — Cupos limitados"
                loading="lazy"
                sx={{
                  width: '100%', height: 'auto', display: 'block',
                  borderRadius: '1rem', border: '1px solid rgba(26,26,26,0.1)',
                  boxShadow: '0 16px 40px rgba(12,79,130,0.14)',
                }}
              />
              <Box>
                <Grid container spacing={2} sx={{ mb: 2.5 }}>
                  {proyectoPianoPractico.details.map((d, i) => (
                    <Grid item xs={12} sm={4} key={i}>
                      <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '0.75rem', borderLeft: '4px solid gold.main', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                        <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>{d.label}</Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>{d.text}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  component="a"
                  href={proyectoPianoPractico.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    borderRadius: '999px', px: 2.8, py: 1.25, fontWeight: 700, fontSize: '0.96rem',
                    bgcolor: 'primary.main', borderBottom: '3px solid gold.main',
                    boxShadow: '0 12px 26px rgba(12,79,130,0.24)', textTransform: 'none',
                    '&:hover': { bgcolor: 'primary.dark', boxShadow: '0 18px 34px rgba(12,79,130,0.3)' },
                  }}
                >
                  Inscribirme ahora
                </Button>
              </Box>
            </Box>
          </ProyectoBlock>

          <ProyectoBlock tag={proyectoPiano.tag} title={proyectoPiano.title} desc={proyectoPiano.desc} finalizado>
            <Grid container spacing={2} sx={{ filter: 'grayscale(0.6)', opacity: 0.85 }}>
              {proyectoPiano.details.map((d, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '0.75rem', borderLeft: '4px solid gold.dark', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                    <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>{d.label}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>{d.text}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </ProyectoBlock>
        </Box>
      </Box>

      <Box id="proyectos" component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: 'background.paper', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
        <Box sx={{ maxWidth: 1140, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <RevealOnScroll sx={{ maxWidth: 680, mb: 4 }}>
            <Box className="section-tag-bottom">Nuestro trabajo</Box>
            <Typography variant="h2" sx={{ mt: 1.2 }}>35 años construyendo desarrollo en Cali.</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.98rem', maxWidth: 560, mt: 1 }}>
              La Corporación ha desarrollado proyectos en educación, cultura, economía y emprendimiento desde 1996. Conocé nuestras líneas de acción.
            </Typography>
          </RevealOnScroll>

          <ProyectoBlock tag="2011 – 2025" title="La Ruta de los Oficios" finalizado
            desc="Desde 2011, la línea Mujeres Empresarias impulsó La Ruta de los Oficios, un proyecto productivo que unió seis oficios en una ruta agro-turística alineada a la Política Pública de la Mujer en Cali. Su ciclo finalizó dejando un legado de emprendimiento y autonomía económica."
          >
            <Box className="ruta-visual" sx={{ filter: 'grayscale(0.6)', opacity: 0.8 }}>
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

            <Grid container spacing={2} sx={{ filter: 'grayscale(0.6)', opacity: 0.85 }}>
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
            desc="Proyecto que reconoce el emprendimiento y el oficio de las mujeres como herramientas reales de autonomía económica. Su expresión principal es la Ruta de los Oficios."
          >
            <Grid container spacing={2}>
              {expCards3.map((c) => <ExpCard key={c.title} {...c} />)}
            </Grid>
          </ProyectoBlock>

          <ProyectoBlock tag="En marcha" title="Transmisión de Saberes"
            desc="Red articuladora del conocimiento que permite que profesionales de diversas áreas y maestros de oficios tradicionales compartan su capital cognitivo de forma directa. Democratiza la formación y acelera el desarrollo sostenible de los territorios."
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, mb: 4 }}>
              {saberesFases.map((f, i) => (
                <Box key={f.title} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start', p: 1.5, bgcolor: 'rgba(12,79,130,0.03)', borderRadius: '0.75rem' }}>
                  <Box sx={{ variant: 'h4', fontStyle: 'italic', color: 'terracotta.main', fontSize: '1.1rem', fontWeight: 600, minWidth: '1.6rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'primary.main', mb: 0.3 }}>{f.title}</Typography>
                    <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary', lineHeight: 1.5 }}>{f.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', maxWidth: 640 }}>
              El proyecto se sustenta en la inclusión y valoración del saber, reconociendo dos perfiles de instructores: <Box component="strong" sx={{ color: 'primary.main' }}>profesionales de todas las áreas</Box> y <Box component="strong" sx={{ color: 'primary.main' }}>maestros de oficio y sabedores</Box> con dominio comprobado, independientemente de su titulación académica.
            </Typography>
          </ProyectoBlock>
        </Box>
      </Box>
    </>
  )
}
