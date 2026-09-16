import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Link to="Home" smooth duration={500} offset={-80} aria-label="Back to top" tabIndex={isVisible ? 0 : -1}>
      <div
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 flex justify-center items-center rounded-full bg-gradient-accent cursor-pointer transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:scale-110 active:scale-95 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} className="text-white" />
      </div>
    </Link>
  );
};

export default BackToTopButton;
