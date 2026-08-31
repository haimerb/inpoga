import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nosotros from './components/Nosotros'
import MisionVision from './components/MisionVision'
import Proyectos from './components/Proyectos'
import Galeria from './components/Galeria'
import Ejes from './components/Ejes'
import Territorio from './components/Territorio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import VideoModal from './components/VideoModal'

export default function App() {
  return (
    <>
      <a href="#inicio" className="skip-link">Saltar al contenido principal</a>
      <Header />
      <main id="inicio">
        <Hero />
        <Marquee />
        <Nosotros />
        <MisionVision />
        <Proyectos />
        <Galeria />
        <Ejes />
        <Territorio />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
      <VideoModal />
    </>
  )
}
