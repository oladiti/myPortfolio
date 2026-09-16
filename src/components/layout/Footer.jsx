import { CopyRight } from '../ui/BrandIcons';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';
import navLinks from '../../data/navlinks';
import contactInfo from '../../data/contactInfo';
import Logo from '../../assets/logo.webp';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-white/10">
      <div className="px-4 md:px-8 py-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="lg:w-2/5">
          <Link to="Home" smooth duration={500} offset={-80} className="inline-flex cursor-pointer items-center gap-3">
            <img
              src={Logo}
              alt="Oladiti Abiodun"
              width={40}
              height={36}
              className="transition-transform duration-300 hover:scale-110"
            />
            <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
              Oladiti Abiodun
            </span>
          </Link>
          <p className="gradient-text mt-3 font-medium">Frontend Developer</p>
          <p className="mt-3 mb-5 max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Thanks for visiting my personal portfolio. Let's connect over socials and build something great together.
          </p>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-500 dark:text-accent-light" />
              Nigeria
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary-500 dark:text-accent-light" />
              oladitiabiodun86@gmail.com
            </li>
          </ul>
        </div>

        <nav className="lg:w-1/5">
          <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Quick Links</h4>
          <ul className="space-y-1.5">
            {navLinks.map(({ link, id }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  className="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200 cursor-pointer hover:text-primary-600 dark:hover:text-accent-light"
                >
                  <ArrowRight size={14} className="text-gray-300 transition-colors duration-200 group-hover:text-primary-500 dark:text-gray-600 dark:group-hover:text-accent-light" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:w-2/5">
          <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Connect With Me</h4>
          <ul className="mb-6 flex items-center gap-3">
            {contactInfo.map(({ id, link, name, icon }) => (
              <li key={id}>
                <a
                  href={link}
                  {...(link.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={name}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl glass shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-sm"
                >
                  {icon}
                  <span className="absolute left-1/2 top-[-36px] origin-bottom -translate-x-1/2 scale-0 whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1 text-xs text-white transition-transform duration-200 group-hover:scale-100 dark:bg-white dark:text-gray-900">
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl glass p-4">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Open to work & freelance projects
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Available for Remote & Freelance opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 px-4 py-5 dark:border-white/5 sm:flex-row md:px-8">
        <p className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
          <CopyRight /> {`${year} Oladiti Abiodun | All Rights Reserved`}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Designed & Built by <span className="font-medium text-gray-600 dark:text-gray-300">Oladiti Abiodun</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;