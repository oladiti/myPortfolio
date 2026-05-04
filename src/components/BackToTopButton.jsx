import { useState, useEffect } from 'react';
import { ArrowUp } from "./Icons";
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
    <Link to="Home" smooth duration={500}>
      <div
        className={`my-11 mr-9 max-md:mr-7 max-xs:mr-6 -translate-y-[100vh] transition-all delay-100 ${isVisible && "translate-y-0"} z-[49] fixed bottom-2 right-2 xs:bottom-[1.3rem] xs:right-[1.3rem] md:bottom-4 md:right-16 w-8 h-8 flex justify-center items-center rounded-full bg-aba cursor-pointer hover:scale-[1.08] duration-500 text-white`}
      >
        <ArrowUp />
      </div>
    </Link>
  );
};

export default BackToTopButton;
