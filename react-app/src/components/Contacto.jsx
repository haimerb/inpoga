import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import RevealOnScroll from './RevealOnScroll'

const asuntoOptions = [
  { value: '', label: 'Seleccioná una opción' },
  { value: 'Oficio', label: 'Quiero participar con mi oficio' },
  { value: 'Voluntaria', label: 'Quiero ser voluntaria' },
  { value: 'Aliada', label: 'Soy una organización aliada' },
  { value: 'Otro', label: 'Otro' },
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [errorGlobal, setErrorGlobal] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.nombre.trim()) errs.nombre = 'Este campo es obligatorio.'
    else if (form.nombre.trim().length < 2) errs.nombre = 'Ingresá al menos 2 caracteres.'
    if (!form.email.trim()) errs.email = 'Este campo es obligatorio.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Ingresá un correo electrónico válido.'
    if (form.telefono && !/^[\+]?[0-9\s\-\(\)]{7,15}$/.test(form.telefono)) errs.telefono = 'Ingresá un teléfono válido.'
    if (!form.asunto) errs.asunto = 'Este campo es obligatorio.'
    if (!form.mensaje.trim()) errs.mensaje = 'Este campo es obligatorio.'
    else if (form.mensaje.trim().length < 10) errs.mensaje = 'Ingresá al menos 10 caracteres.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (honeypot) return
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})

    const encode = (s) => encodeURIComponent(s).replace(/%20/g, '+').replace(/%0A/g, '%0D%0A')
    const subject = `Contacto desde la web — ${form.asunto}`
    let body = `Nombre: ${form.nombre}\r\nCorreo: ${form.email}\r\n`
    if (form.telefono) body += `Teléfono: ${form.telefono}\r\n`
    body += `Motivo: ${form.asunto}\r\n\r\nMensaje:\r\n${form.mensaje}`

    const mailto = `mailto:contacto@corpogaviotas.org?subject=${encode(subject)}&body=${encode(body)}`
    try {
      window.location.href = mailto
      setSubmitted(true)
    } catch {
      setErrorGlobal(true)
    }
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.7rem',
      fontFamily: '"Work Sans", sans-serif',
      fontSize: '0.98rem',
      color: '#1a1a1a',
      bgcolor: '#fff',
      '& fieldset': { borderColor: 'rgba(16,35,59,0.18)', borderWidth: 1.5 },
      '&:hover fieldset': { borderColor: 'rgba(16,35,59,0.3)' },
      '&.Mui-focused fieldset': { borderColor: '#1a7cc7', borderWidth: 1.5, boxShadow: '0 0 0 3px rgba(10,93,158,0.12)' },
    },
    '& .MuiInputLabel-root': { fontSize: '0.85rem', fontWeight: 600, color: 'primary.main' },
  }

  return (
    <Box id="contacto" component="section" sx={{ py: { xs: 3.5, md: 6 }, bgcolor: '#fff', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
      <Box sx={{ maxWidth: 1080, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <RevealOnScroll sx={{ mb: 4 }}>
          <Box className="section-tag-bottom">Contacto</Box>
          <Typography variant="h2" sx={{ mt: 1.2, mb: 1 }}>Sumate. Escribinos.</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.02rem', maxWidth: 620 }}>
            Querés participar, ser parte de la corporación o vincular tu organización. Contanos cómo querés colaborar.
          </Typography>
        </RevealOnScroll>

        <RevealOnScroll>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              bgcolor: '#faf9f6', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '1.25rem',
              p: { xs: 2, sm: 3.2 }, boxShadow: '0 6px 20px rgba(12,79,130,0.06)', maxWidth: 820, mb: 3,
            }}
          >
            <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />

            <Grid container spacing={1.6}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth required label="Nombre" placeholder="Tu nombre completo"
                  value={form.nombre} onChange={handleChange('nombre')}
                  error={!!errors.nombre} helperText={errors.nombre}
                  inputProps={{ minLength: 2, autoComplete: 'name' }}
                  sx={{ ...fieldSx, mb: 1.5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth required label="Correo electrónico" placeholder="tu@correo.com" type="email"
                  value={form.email} onChange={handleChange('email')}
                  error={!!errors.email} helperText={errors.email}
                  inputProps={{ autoComplete: 'email' }}
                  sx={{ ...fieldSx, mb: 1.5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth label="Teléfono" placeholder="+57 300 123 4567" type="tel"
                  value={form.telefono} onChange={handleChange('telefono')}
                  error={!!errors.telefono} helperText={errors.telefono}
                  inputProps={{ pattern: '[\\+]?[0-9\\s\\-\\(\\)]{7,15}', autoComplete: 'tel' }}
                  sx={{ ...fieldSx, mb: 1.5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth required select label="¿En qué podés aportar?"
                  value={form.asunto} onChange={handleChange('asunto')}
                  error={!!errors.asunto} helperText={errors.asunto}
                  sx={{ ...fieldSx, mb: 1.5 }}
                >
                  {asuntoOptions.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <TextField
              fullWidth required multiline rows={4} label="Mensaje"
              placeholder="Contanos un poco sobre vos y tu comunidad…"
              value={form.mensaje} onChange={handleChange('mensaje')}
              error={!!errors.mensaje} helperText={errors.mensaje}
              inputProps={{ minLength: 10 }}
              sx={{ ...fieldSx, mb: 1 }}
            />

            <Button
              type="submit" variant="contained"
              sx={{
                mt: 0.5, borderRadius: '999px', px: 2.8, py: 1.3, fontWeight: 700, fontSize: '0.96rem',
                bgcolor: 'primary.main', borderBottom: '3px solid #ffd200',
                boxShadow: '0 12px 26px rgba(12,79,130,0.24)', textTransform: 'none',
                '&:hover': { bgcolor: '#0a4270', boxShadow: '0 18px 34px rgba(12,79,130,0.3)' },
              }}
            >
              Enviar mensaje
            </Button>

            {submitted && (
              <Box sx={{ mt: 1.5, p: 1.5, borderRadius: '0.7rem', bgcolor: '#e8f5e9', color: '#2e7d32', border: '1px solid #a5d6a7', fontSize: '0.95rem' }}>
                <Typography sx={{ m: 0 }}>
                  Mensaje preparado. Se abrió tu cliente de correo con los datos del formulario. Solo tenés que presionar{' '}
                  <Box component="strong">Enviar</Box>.
                </Typography>
              </Box>
            )}
            {errorGlobal && (
              <Box sx={{ mt: 1.5, p: 1.5, borderRadius: '0.7rem', bgcolor: '#fbe9e7', color: '#c62828', border: '1px solid #ef9a9a', fontSize: '0.95rem' }}>
                <Typography sx={{ m: 0 }}>
                  No se pudo abrir el correo. Escribinos directamente a{' '}
                  <Box component="a" href="mailto:contacto@corpogaviotas.org" sx={{ color: '#1a7cc7', fontWeight: 600 }}>contacto@corpogaviotas.org</Box>{' '}
                  o al <Box component="a" href="tel:+573202205497" sx={{ color: '#1a7cc7', fontWeight: 600 }}>+57 320 220 5497</Box>.
                </Typography>
              </Box>
            )}
          </Box>
        </RevealOnScroll>

        <RevealOnScroll>
          <Grid container spacing={2.2} sx={{ pt: 2.5, borderTop: '1px solid rgba(26,26,26,0.08)' }}>
            {[
              { label: 'Ubicación', text: 'Carrera 25 # 42 a 28\nCali, Valle del Cauca, Colombia' },
              { label: 'Correo', text: null, link: 'mailto:contacto@corpogaviotas.org', linkText: 'contacto@corpogaviotas.org' },
              { label: 'Horario', text: 'Lunes a viernes · 8:00 a 5:00\nAtención comunitaria en territorio' },
            ].map((info) => (
              <Grid item xs={12} sm={6} md={4} key={info.label}>
                <Box sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'translateX(4px)' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7, fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a7cc7', mb: 0.6 }}>
                    <Box sx={{ width: '0.55rem', height: '0.55rem', borderRadius: '50%', bgcolor: '#ffd200', flex: 'none' }} />
                    {info.label}
                  </Box>
                  {info.text ? (
                    <Typography sx={{ whiteSpace: 'pre-line', color: 'text.secondary', fontSize: '0.95rem', m: 0 }}>{info.text}</Typography>
                  ) : (
                    <Typography sx={{ m: 0 }}>
                      <Box component="a" href={info.link} sx={{ color: '#1a7cc7', fontWeight: 600 }}>{info.linkText}</Box>
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </RevealOnScroll>

        <RevealOnScroll>
          <Box sx={{ mt: 3, borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 6px 20px rgba(12,79,130,0.06)', border: '1px solid rgba(26,26,26,0.08)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1!2d-76.537!3d3.421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjUnMTUuNiJOIDc2wrAzMicyLjIjVw!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%" height={360} style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Integración Popular Gaviotas Corporación en Cali"
            />
          </Box>
        </RevealOnScroll>
      </Box>
    </Box>
  )
}
