import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#nosotros' },
  { label: 'Misión y visión', href: '#mision-vision' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(244,247,250,0.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid',
          borderColor: 'rgba(26,26,26,0.08)',
          color: 'text.primary',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1140,
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            minHeight: 86,
            gap: 1.25,
          }}
        >
          <Box component="a" href="#inicio" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit' }}>
            <Box
              component="img"
              src="/assets/logo-gaviotas.png"
              alt="Logo de Integración Popular Gaviotas Corporación"
              sx={{ width: 48, height: 48, objectFit: 'contain', flex: 'none' }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <Typography
                variant="subtitle1"
                component="strong"
                sx={{ fontSize: '1.02rem', color: 'text.primary', fontWeight: 700 }}
              >
                Int. Popular Gaviotas
              </Typography>
              <Typography
                variant="caption"
                component="small"
                sx={{ fontSize: '0.66rem', color: 'text.secondary' }}
              >
                Corporación · Desde 1990
              </Typography>
            </Box>
          </Box>

          {!isMobile && (
            <Box component="nav" aria-label="Navegación principal" sx={{ display: 'flex', alignItems: 'center', gap: 2.4, ml: 'auto' }}>
              {navLinks.map((link) => (
                <Box
                  key={link.href}
                  component="a"
                  href={link.href}
                  sx={{
                    position: 'relative', fontSize: '0.95rem', fontWeight: 500, color: 'text.secondary',
                    py: 0.25, textDecoration: 'none',
                    '&::after': {
                      content: '""', position: 'absolute', left: 0, bottom: -2,
                      width: 0, height: 2, bgcolor: 'gold.main',
                      transition: 'width 0.25s ease',
                    },
                    '&:hover': { color: 'text.primary', '&::after': { width: '100%' } },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Menú"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: 'auto' }}
            >
              <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </IconButton>
          )}

          {!isMobile && (
            <Button
              component="a"
              href="#contacto"
              variant="contained"
              sx={{
                borderRadius: '999px', px: 2.8, py: 1.3, fontWeight: 700, fontSize: '0.96rem',
                bgcolor: 'primary.main',                 borderBottom: '3px solid gold.main',
                boxShadow: '0 12px 26px rgba(12,79,130,0.24)',
                '&:hover': { bgcolor: 'primary.dark', boxShadow: '0 18px 34px rgba(12,79,130,0.3)' },
              }}
            >
              Sumate
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} aria-label="Menú de navegación">
        <Box sx={{ width: 260, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ py: 1.5, px: 3 }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#contacto"
                onClick={() => setDrawerOpen(false)}
                sx={{ py: 1.5, px: 3, color: 'primary.main', fontWeight: 700 }}
              >
                <ListItemText primary="Sumate" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
