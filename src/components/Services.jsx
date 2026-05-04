import Slider from 'react-slick';
import { Link } from 'react-scroll';
import SectionHeading from './SectionHeading';
import services from '../data/services';

const SLIDER_SETTINGS = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const ServiceCard = ({ service }) => (
  <div className="service-card w-full xl:mx-4 p-6 max-xs:w-fit   sm:w-full md:w-full h-full lg:w-[94%] dark:border-aba border-2 shadow-lg">
    <img
      src={service.img}
      alt={service.name}
      className="dark:bg-white"
      style={{ width: '7rem', height: '5rem' }}
      loading="eager"
    />
    <h3 className="my-4 dark:text-white font-bold text-xl">{service.name}</h3>
    <p className="text-center mb-4 dark:text-gray-400 text-gray-600">{service.description}</p>
    <Link
      to="Contact"
      smooth
      duration={500}
      className="bg-aba py-3 px-10 text-black mx-auto block text-center max-w-max rounded-md cursor-pointer"
    >
      Learn more
    </Link>
  </div>
);

const Services = () => (
  <div name="Services" className="Services max-xs:px-5 max-xs:pt-10 lg:pt-24 mb-28 md:pt-16 xs:pt-16 xl:pt-8">
    <div className="max-xs:-ml-0 pt-20 lg:pt-32 xs:ml-10 md:ml-16 xl:pl-2 lg:pl-1 sm:ml-9">
      <SectionHeading heading="Services" secondHeading="These are the services that I render" />
    </div>
    <div className="slider-container md:px-10 lg:px-10 max-xs:px-3 xs:mx-12 sm:mx-10 xl:px-7">
      <Slider {...SLIDER_SETTINGS} className="Service__container max-xs:-ml-1 sm:mr-0 md:mr-0 lg:-mr-3 xs:mr-1 xl:mr-3">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </Slider>
    </div>
  </div>
);

export default Services;
