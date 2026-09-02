import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#0c4f82', light: '#1a7cc7', dark: '#083a5c', contrastText: '#fff' },
    secondary: { main: '#1a7cc7', contrastText: '#fff' },
    gold: { main: '#ffd200', dark: '#e6b800' },
    terracotta: { main: '#b55a3a' },
    success: { main: '#2e7d32', light: '#e8f5e9', border: '#a5d6a7' },
    error: { main: '#c62828', light: '#fbe9e7', border: '#ef9a9a' },
    whatsapp: { main: '#25d366' },
    background: { default: '#faf9f6', paper: '#ffffff' },
    text: { primary: '#1a1a1a', secondary: '#4a4540' },
  },
  typography: {
    fontFamily: '"Work Sans", sans-serif',
    h1: { fontFamily: '"Fraunces", serif', fontWeight: 580, letterSpacing: '-0.03em', lineHeight: 0.95 },
    h2: { fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.04 },
    h3: { fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h4: { fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.02em' },
    h5: { fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.02em' },
    h6: { fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.02em' },
    subtitle1: { fontFamily: '"Work Sans", sans-serif', fontWeight: 500 },
    subtitle2: { fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' },
    body1: { fontFamily: '"Work Sans", sans-serif', lineHeight: 1.65 },
    body2: { fontFamily: '"Work Sans", sans-serif', lineHeight: 1.65 },
    button: { fontFamily: '"Work Sans", sans-serif', fontWeight: 700, textTransform: 'none' },
    caption: { fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase' },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'a': { color: 'inherit', textDecoration: 'none' },
        em: { fontStyle: 'italic', fontWeight: 600 },
        strong: { color: '#0c4f82' },
      },
    },
  },
})

export default theme
