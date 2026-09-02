import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nosotros from './components/Nosotros'
import MisionVision from './components/MisionVision'
import Proyectos from './components/Proyectos'
import Ejes from './components/Ejes'
import Territorio from './components/Territorio'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'

const Galeria = lazy(() => import('./components/Galeria'))
const Contacto = lazy(() => import('./components/Contacto'))
const VideoModal = lazy(() => import('./components/VideoModal'))

export default function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <Marquee />
        <Nosotros />
        <MisionVision />
        <Proyectos />
        <Suspense fallback={null}>
          <Galeria />
        </Suspense>
        <Ejes />
        <Territorio />
        <Suspense fallback={null}>
          <Contacto />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
      <Suspense fallback={null}>
        <VideoModal />
      </Suspense>
    </>
  )
}
