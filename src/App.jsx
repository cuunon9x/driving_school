import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Courses />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <BackToTop />
    </>
  )
}
