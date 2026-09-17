import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDown, Download } from 'lucide-react';
import AB from "../../assets/aboutpic.png";
import contactInfo from '../../data/contactInfo';
import resume from "../../assets/ola.pdf";

const typingSequence = ['Full Stack Developer', 2000, 'MERN Stack Developer', 2000, 'Web Developer', 2000];

const HeroSocials = () => (
  <ul className="flex items-center gap-3">
    {contactInfo.map(({ id, link, name, icon }) => (
      <li key={id}>
        <a
          href={link}
          {...(link.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          aria-label={name}
          className="group relative w-11 h-11 flex items-center justify-center rounded-xl glass shadow-card hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300"
        >
          {icon}
          <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 origin-bottom px-2.5 py-1 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs whitespace-nowrap">
            {name}
          </span>
        </a>
      </li>
    ))}
  </ul>
);

function Home() {
  return (
    <div name="Home" className="relative min-h-screen w-full flex items-center overflow-hidden dot-pattern">
      <div className="section-content relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div className="text-center lg:text-left" data-aos="fade-up">
          <p className="mb-4 -mt-16 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Full-Stack Web Developer • Working Worldwide
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-card mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for Remote & Freelance
            </span>
          </div>

          <h1 className="font-display font-bold leading-tight">
            <span className="block text-2xl max-sm:text-xl text-gray-500 dark:text-gray-400 font-medium mb-3">
              Hi There <span className="wave">👋</span> I'm
            </span>
            <span className="block text-6xl max-sm:text-4xl md:text-7xl gradient-text tracking-tight">
              OLADITI
            </span>
          </h1>

          <p className="mt-5 text-xl max-sm:text-lg text-gray-600 dark:text-gray-300 font-medium">
            I am a{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              <TypeAnimation
                sequence={typingSequence}
                speed={50}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </p>

          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
            Crafting modern, responsive, and user-friendly web experiences that bring ideas to life.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link to="About" smooth duration={500} offset={-80} className="btn-primary">
              About Me <ArrowDown size={18} />
            </Link>
            <a href={resume} target="_blank" rel="noopener noreferrer" download className="btn-secondary">
              Resume <Download size={16} />
            </a>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <HeroSocials />
          </div>
        </div>

        <div className="relative flex justify-center items-center max-sm:hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-glow-pulse" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
              <div className="spectrum-ring" aria-hidden="true" />
              <div className="relative w-full h-full rounded-full gradient-border p-2">
                <img
                  src={AB}
                  alt="Oladiti Abiodun"
                  loading="eager"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass-strong flex items-center justify-center text-3xl animate-float [animation-delay:0.5s]">
              ⚡
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass-strong flex items-center justify-center text-3xl animate-float [animation-delay:1s]">
              🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;