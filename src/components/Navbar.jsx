import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Logo from '../assets/logo.webp';
import toggleLight from '../assets/dark-moon.png';
import toggleDark from '../assets/light-moon.png';

const Navbar = ({ theme, setTheme }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMode = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 h-[6.8rem] transition-all duration-300 md:pl-[150px] ${
          theme === 'dark'
            ? 'bg-black/95 backdrop-blur-md'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="flex justify-end items-center px-4 py-3">
          <button
            onClick={toggleMode}
            className="p-2.5 rounded-full bg-aba/10 hover:bg-aba/20 transition-all duration-300 hover:rotate-12"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <img
              src={theme === 'light' ? toggleLight : toggleDark}
              alt=""
              width={22}
              height={20}
            />
          </button>

          <button
            onClick={() => setNavOpen(prev => !prev)}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
              theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
            >
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
      </header>

      <aside
        className={`fixed top-0 left-0 h-full z-50 w-full sm:w-72 md:w-[200px] ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950'
            : 'bg-gradient-to-b from-white via-white to-gray-50'
        } shadow-2xl md:translate-x-0 transition-transform duration-500 ease-in-out ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className={`flex items-center justify-center px-6 py-6 border-b ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <a href="/" className="relative">
              <img
                src={Logo}
                alt="Oladiti Abiodun Logo"
                width={60}
                height={55}
                className="transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
              />
            </a>
            <button
              onClick={closeNav}
              className={`md:hidden absolute right-6 p-2 rounded-full transition-all duration-300 hover:rotate-90 ${
                theme === 'dark' ? 'hover:bg-zinc-700' : 'hover:bg-gray-200'
              }`}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="flex-1 py-8 overflow-y-auto flex flex-col items-center justify-center">
            <Navigation
              theme={theme}
              handleClick={closeNav}
              ulClass="flex flex-col items-center w-full"
              liClass="text-base sm:text-lg font-medium px-4 sm:px-6 py-3 sm:py-4 w-full text-center"
            />
          </nav>

          <div className={`px-6 py-5 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <button
              onClick={toggleMode}
              className={`flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <img
                src={theme === 'light' ? toggleLight : toggleDark}
                alt=""
                width={20}
                height={18}
              />
              <span className="font-medium">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
          </div>
        </div>
      </aside>

      {navOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeNav}
        />
      )}
    </>
  );
};

export default Navbar;
