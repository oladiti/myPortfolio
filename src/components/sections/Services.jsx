import { Link } from 'react-scroll';
import SectionHeading from '../ui/SectionHeading';
import services from '../../data/services';

const Services = () => (
  <section name="Services" className="section">
    <div className="section-content">
      <SectionHeading heading="Services" secondHeading="What I can do for you" />
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={service.name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group rounded-2xl glass shadow-card dark:shadow-card-dark transition-all duration-300 hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1.5 p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center p-3 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img src={service.img} alt={service.name} className="w-full h-full object-contain" loading="eager" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-gray-900 dark:text-white">{service.name}</h3>
            <p className="mb-5 text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            <Link
              to="Contact"
              smooth
              duration={500}
              offset={-80}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-accent-light hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;