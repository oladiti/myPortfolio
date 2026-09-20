import Navigation from './Navigation';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.webp';
import toggleLight from '../../assets/dark-moon.png';
import toggleDark from '../../assets/light-moon.png';
import useTheme from '../../hooks/useTheme';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeNav = () => setNavOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [navOpen]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      >
        <nav className={`glass-strong w-full px-12 md:px-8 py-4 md:py-5 flex items-center justify-between gap-1 border-b border-gray-200 dark:border-white/10 shadow-md transition-all duration-300
          ${scrolled ? 'shadow-xl' : 'shadow-md'}`}>
          <Link to="Home" smooth duration={500} offset={-80} className="flex-shrink-0  cursor-pointer">
            <img src={Logo} alt="Logo" className="h-[36px] w-[40px] md:h-[50px] md:w-[56px] transition-all duration-300 hover:scale-110" />
          </Link>

          <div className="hidden md:flex items-center">
            <Navigation handleClick={closeNav} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 md:p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <img
                src={theme === 'light' ? toggleLight : toggleDark}
                alt=""
                className="h-[22px] w-[24px] md:h-[28px] md:w-[30px]"
              />
            </button>

            <button
              onClick={() => setNavOpen(prev => !prev)}
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {navOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {navOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={closeNav} />
          <div className="fixed inset-x-0 top-[75px] z-50 mx-4 md:hidden animate-slide-up">
            <div className="glass-strong rounded-2xl p-6 shadow-xl">
              <Navigation handleClick={closeNav} isMobile />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
