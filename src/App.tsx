import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Insurance from './components/Insurance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen" style={{ background: '#000' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Pricing />
      <Insurance />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
