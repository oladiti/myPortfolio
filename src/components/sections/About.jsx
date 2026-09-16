import profile from "../../assets/aboutpic.webp";
import SectionHeading from '../ui/SectionHeading';
import techStack from '../../data/techStack';

const About = () => (
  <section name="About" className="section">
    <div className="section-content">
      <SectionHeading heading="About Me" secondHeading="Passionate about crafting beautiful digital experiences" />

      <div className="grid lg:grid-cols-3 gap-6" data-aos="fade-up">
        <div className="lg:col-span-1">
          <div className="group relative overflow-hidden rounded-2xl glass shadow-card hover:shadow-card-hover transition-all duration-300">
            <img
              src={profile}
              alt="Profile"
              loading="lazy"
              className="w-full h-full min-h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl glass shadow-card p-8">
            <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900 dark:text-white">
              Frontend Developer
              <span className="text-xl text-gray-400 dark:text-gray-500 pl-2">based in Lagos, Nigeria</span>
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