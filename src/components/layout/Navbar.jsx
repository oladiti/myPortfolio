import Navigation from './Navigation';
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-md:top-3 max-md:left-4 max-md:translate-x-0 max-md:right-4 ${
          scrolled ? 'max-md:top-3' : 'max-md:top-4'
        }`}
      >
        <nav className={`glass-strong rounded-2xl px-2 py-2 flex items-center gap-1 shadow-lg transition-all duration-300
          ${scrolled ? 'shadow-xl' : 'shadow-md'}
          max-md:w-full max-md:justify-between
          md:px-3 md:gap-2`}>
          <a href="/" className="flex-shrink-0 md:hidden ml-2">
            <img src={Logo} alt="Logo" width={36} height={32} className="transition-all duration-300 hover:scale-110" />
          </a>

          <div className="hidden md:flex items-center">
            <Navigation handleClick={closeNav} />
          </div>

          <div className="flex items-center gap-2 max-md:ml-auto">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <img
                src={theme === 'light' ? toggleLight : toggleDark}
                alt=""
                width={20}
                height={18}
              />
            </button>

            <button
              onClick={() => setNavOpen(prev => !prev)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-gray-700 dark:text-gray-300">
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
          <div className="fixed inset-x-0 top-20 z-50 mx-4 md:hidden animate-slide-up">
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
