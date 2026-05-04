import { Link } from 'react-scroll';
import navLinks from '../data/navlinks';

const Navigation = ({ theme, ulClass, liClass, handleClick }) => (
  <ul className={ulClass}>
    {navLinks.map(({ id, link }) => (
      <li key={id} className={`capitalize font-medium cursor-pointer ${liClass}`}>
        <Link
          onClick={handleClick}
          to={link}
          smooth
          duration={500}
          spy={true}
          offset={-50}
          activeClass="!text-aba !font-bold"
          className={`cursor-pointer block transition-all duration-300 relative py-2 ${
            theme === 'dark' ? 'text-gray-400 hover:!text-aba' : 'text-gray-700 hover:!text-aba'
          }`}
        >
          {link}
        </Link>
      </li>
    ))}
  </ul>
);

export default Navigation;
