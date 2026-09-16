import { Link } from 'react-scroll';
import navLinks from '../../data/navlinks';

const Navigation = ({ handleClick, isMobile = false }) => {
  return (
    <ul className={`flex ${isMobile ? 'flex-col items-center gap-2' : 'items-center gap-1'}`}>
      {navLinks.map(({ id, link }) => (
        <li key={id}>
          <Link
            onClick={handleClick}
            to={link}
            smooth
            duration={500}
            spy={true}
            offset={-80}
            activeClass="!text-white !bg-gradient-accent"
            className={`cursor-pointer block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10
              ${isMobile ? 'text-lg py-3 w-full text-center' : ''}`}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
