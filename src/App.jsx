import { useEffect } from 'react';
import ThemeProvider from './context/ThemeContext';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Home from './components/sections/Home';
import Navbar from './components/layout/Navbar';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer';
import BackToTopButton from './components/ui/BackToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTheme from './hooks/useTheme';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-surface-darker text-white' : 'bg-[#fafafa] text-gray-900'
    }`}>
      <Navbar />
      <main className="pt-24">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
