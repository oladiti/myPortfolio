import { useEffect, useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AnimatedComponent from './components/AnimatedComponent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


// setting the theme variable
const App = () => {

  const current_theme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);

  }, [theme])


  return (

    <div className={`container  ${theme} max-w-screen-2xl overflow-hidden`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <AnimatedComponent>
        <Home />
      </AnimatedComponent>
      <div data-aos="flip-left" data-aos-duration="1000">
        <About />
      </div>
      <Projects />
      <div data-aos="flip-right" data-aos-duration="1000">
        <Skills />
      </div>
      <Services />
      <div data-aos="slide-left" data-aos-duration="1000">
        <Contact />
      </div>
      <Footer />
      <BackToTopButton />
    </div >

  )
}

export default App;
AOS.init({
  duration: 3000,
  easing: 'ease-in-out',
  once: false,
});