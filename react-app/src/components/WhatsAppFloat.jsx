import Box from '@mui/material/Box'

export default function WhatsAppFloat() {
  return (
    <Box
      component="a"
      href="https://wa.me/573202205497?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20La%20Ruta%20de%20los%20Oficios"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="whatsapp-float"
      sx={{
        position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 56, height: 56, borderRadius: '50%', bgcolor: 'whatsapp.main',
        boxShadow: '0 4px 18px rgba(37,211,102,0.4)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': { transform: 'scale(1.1)', boxShadow: '0 6px 24px rgba(37,211,102,0.55)' },
        '&:active': { transform: 'scale(0.95)' },
      }}
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.48.653 4.81 1.79 6.84L2 30l7.34-1.74A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.2c-2.34 0-4.52-.62-6.42-1.7l-.46-.28-4.34 1.04 1.16-4.22-.3-.48A11.16 11.16 0 014.8 16c0-6.18 5.02-11.2 11.2-11.2S27.2 9.82 27.2 16 22.18 27.2 16 27.2zm6.18-8.4c-.34-.17-2-1-2.3-1.12-.32-.12-.54-.17-.76.17-.22.34-.86 1.12-1.06 1.34-.2.22-.38.25-.72.08-.34-.17-1.44-.53-2.74-1.68-1.02-.9-1.7-2-1.9-2.34-.2-.34-.02-.52.15-.68.15-.15.34-.38.5-.58.17-.2.22-.34.34-.56.12-.22.06-.42-.03-.58-.08-.17-.76-1.82-1.04-2.5-.27-.66-.55-.57-.76-.58h-.65c-.22 0-.56.08-.86.42-.3.34-1.14 1.12-1.14 2.72s1.16 3.14 1.32 3.36c.17.22 2.28 3.48 5.52 4.88.78.34 1.38.54 1.85.68.78.25 1.5.22 2.06.13.62-.1 2-0.82 2.28-1.6.28-.8.28-1.5.2-1.64-.08-.15-.3-.22-.64-.4z" fill="#fff" />
      </svg>
    </Box>
  )
}
