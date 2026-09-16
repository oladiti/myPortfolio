import { CopyRight } from '../ui/BrandIcons';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import navLinks from '../../data/navlinks';
import contactInfo from '../../data/contactInfo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-white/10">
      <div className="section-content py-12 flex flex-col lg:flex-row justify-between gap-8">
        <div className="lg:w-2/5">
          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Oladiti Abiodun</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-4">Frontend Developer</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Thanks for visiting my personal portfolio. Let's connect over socials and build something great together.
          </p>
        </div>

        <nav className="lg:w-1/5">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
          <ul className="space-y-1.5">
            {navLinks.map(({ link, id }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-light transition-colors duration-200 cursor-pointer"
                >
                  <ArrowRight size={14} className="text-gray-300 dark:text-gray-600 transition-colors duration-200 group-hover:text-primary-500 dark:group-hover:text-accent-light" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:w-2/5">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
          <ul className="flex items-center gap-3 mb-4">
            {contactInfo.map(({ id, link, name, icon }) => (
              <li key={id}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group relative w-10 h-10 flex items-center justify-center rounded-xl glass shadow-card hover:shadow-glow-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  {icon}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 origin-bottom px-2 py-1 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs whitespace-nowrap">
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/5 py-5">
        <p className="text-sm text-gray-400 dark:text-gray-500 flex justify-center items-center gap-2">
          <CopyRight /> {`${year} Oladiti Abiodun | All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;