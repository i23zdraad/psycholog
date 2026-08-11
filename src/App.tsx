import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyMe from './components/WhyMe'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Insurance from './components/Insurance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import SectionTransition from './components/SectionTransition'
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen" style={{ background: '#000' }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <WhyMe />
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