import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import ServicesShowcase from './components/ServicesShowcase'
import GalleryShowcase from './components/GalleryShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-nav-dark">
        <Navbar />
        <Hero />
        <AboutUs />
        <ServicesShowcase />
        <GalleryShowcase />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App 