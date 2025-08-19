import Navbar from './components/navbar'
import HeroSection from './components/hero'
import Features from './components/features'
import Mail from './components/mail'
import FAQ from './components/faq'
import Testimonial from './components/testimonial'
import Footer from './components/footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Mail />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default page