import './styles/index.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Apartment from './sections/Apartment';
import Experience from './sections/Experience';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import Location from './sections/Location';
import FAQ from './sections/FAQ';
import AboutHost from './sections/AboutHost';
import FinalCTA from './sections/FinalCTA';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Apartment />
        <Experience />
        <HowItWorks />
        <Testimonials />
        <Location />
        <FAQ />
        <AboutHost />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
