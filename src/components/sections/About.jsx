import { Link } from 'react-scroll';
import { Palette, Zap, Smartphone, Users, ArrowRight } from 'lucide-react';
import profile from "../../assets/aboutpic.webp";
import SectionHeading from '../ui/SectionHeading';
import techStack from '../../data/techStack';

const highlights = [
  { id: 1, icon: <Palette size={20} />, title: 'Clean UI', text: 'Pixel-perfect, modern interfaces' },
  { id: 2, icon: <Zap size={20} />, title: 'Performant', text: 'Fast, optimized experiences' },
  { id: 3, icon: <Smartphone size={20} />, title: 'Responsive', text: 'Flawless on every screen' },
  { id: 4, icon: <Users size={20} />, title: 'Collaborative', text: 'Clear communication, teamwork' },
];

const About = () => (
  <section name="About" className="section">
    <div className="section-content">
      <SectionHeading heading="About Me" secondHeading="Passionate about crafting beautiful digital experiences" />

      <div className="grid lg:grid-cols-3 gap-6" data-aos="fade-up">
        <div className="lg:col-span-1">
          <div className="relative">
            <div className="spectrum-border" aria-hidden="true" />
            <div className="group relative overflow-hidden rounded-2xl glass shadow-card hover:shadow-card-hover transition-all duration-300">
              <img
                src={profile}
                alt="Profile"
                loading="lazy"
                className="w-full h-full min-h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-sm font-medium text-white drop-shadow">Based in Lagos, Nigeria</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:right-4 flex items-center gap-2 rounded-xl glass-strong shadow-card px-4 py-2.5 animate-float">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Available for work</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl glass shadow-card p-8">
            <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900 dark:text-white">
              Frontend Developer
              <span className="text-xl font-normal text-gray-400 dark:text-gray-500 pl-2">based in Lagos, Nigeria</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I am a passionate front-end web developer who is dedicated and certified in creating visually appealing and user-friendly websites.
              My strong grasp of HTML, CSS, and JavaScript enables me to effectively transform design concepts into functional and interactive web pages.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Utilizing frameworks like React and Tailwind CSS, I develop responsive and dynamic websites.
              I stay up-to-date with the latest industry trends and value collaboration and clear communication,
              making me an invaluable member of any team.
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map(({ id, icon, title, text }) => (
                <div
                  key={id}
                  className="group rounded-xl bg-white p-4 border border-gray-100 dark:bg-white/5 dark:border-white/5 hover:border-primary-400/50 dark:hover:border-accent/50 hover:shadow-glow-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-accent text-white shadow-glow-sm mb-3">
                    {icon}
                  </span>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link to="Contact" smooth duration={500} offset={-80} className="btn-primary">
                Let's Work Together <ArrowRight size={18} />
              </Link>
              <Link to="Projects" smooth duration={500} offset={-80} className="btn-secondary">
                View My Work
              </Link>
            </div>
          </div>

          <div className="rounded-2xl glass shadow-card p-8">
            <h4 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">My Tech Stack</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map(({ id, icon, name }) => (
                <li key={id}>
                  <div className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary-400/50 dark:hover:border-accent/50 hover:shadow-glow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                    <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;