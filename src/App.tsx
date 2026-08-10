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
      <SectionTransition from="#000" to="#000" />
      <WhyMe />
      <SectionTransition from="#000" to="#070707" />
      <Services />
      <Reviews />
      <SectionTransition from="#070707" to="#0a0a0a" />
      <Pricing />
      <SectionTransition from="#0a0a0a" to="#070707" />
      <Insurance />
      <Contact />
      <Footer />
    </div>
  )
}

export default App