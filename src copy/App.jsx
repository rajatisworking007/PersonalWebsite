import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-spider-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Showreel />
      <Portfolio />
      <Services />
      <Skills />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
