import { useEffect, lazy, Suspense } from 'react';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import PageLoader from './components/ui/PageLoader';
import 'aos/dist/aos.css';
import useTheme from './hooks/useTheme';

const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Services = lazy(() => import('./components/sections/Services'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));
const BackToTopButton = lazy(() => import('./components/ui/BackToTopButton'));

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    let active = true;
    import('aos').then(({ default: AOS }) => {
      if (!active) return;
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 80,
      });
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-surface-darker text-white' : 'bg-[#fafafa] text-gray-900'
    }`}>
      <Navbar />
      <main className="pt-24">
        <Home />
        <Suspense fallback={<PageLoader />}>
          <About />
          <Projects />
          <Skills />
          <Services />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <BackToTopButton />
      </Suspense>
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