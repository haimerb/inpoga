import Box from '@mui/material/Box'

export default function Marquee() {
  return (
    <Box
      component="section"
      aria-hidden="true"
      className="marquee-section"
      sx={{ py: 0, overflow: 'hidden', borderTop: '1px solid rgba(26,26,26,0.08)', borderBottom: '1px solid rgba(26,26,26,0.08)', bgcolor: '#fff', position: 'relative' }}
    >
      <Box className="marquee">
        <span>Integración Popular Gaviotas Corporación · Desarrollo comunitario · Mujeres Empresarias · Cali · Desde 1990 ·</span>
        <span>Integración Popular Gaviotas Corporación · Desarrollo comunitario · Mujeres Empresarias · Cali · Desde 1990 ·</span>
      </Box>
    </Box>
  )
}
