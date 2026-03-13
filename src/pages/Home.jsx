import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
