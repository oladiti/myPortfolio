
import React from 'react';
import SectionHeading from './SectionHeading';
import services from '../data/services';
import { Link } from 'react-scroll';
import Slider from "react-slick";

const Services = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
  };
  return (
    <div name='Service' className='Services  max-xs:pt-16 lg:pt-24 mb-24 md:pt-16'>
      <div className=' max-xs:-ml-0 pt-20 lg:pt-24 xs:ml-10 md:ml-16 xl:pl-2 lg:pl-1  sm:ml-9'>
        <SectionHeading heading="Service" secondHeading="These are the Services that i render " />
      </div>
      <div className="slider-container md:px-10 lg:px-10 max-xs:px-3 xs:mx-12 sm:mx-10 xl:px-7">
        <Slider {...settings} className='Service__container max-xs:-ml-1 sm:mr-0 md:mr-0  lg:-mr-3 xs:mr-1 xl:mr-3 '>

          {services.map((service, index) => (
            <div key={index}
              className="service-card w-full xl:mx-4  max-xs:w-fit sm:w-full md:w-full  h-full lg:w-[94%]    dark:border-aba border-2 shadow-lg"
            >
              <img src={service.img} className='dark:bg-white' alt={service.name} style={{ width: "7rem", height: "5rem", }} loading='eager' />
              <h3 className='my-4  dark:text-white font-bold text-xl '>{service.name}</h3>
              <p className='text-center mb-4 dark:text-gray-400 text-gray-600 '>{service.description}</p>
              <div><Link smooth duration={500} className=' bg-gradient-to-br from-aba to-blue-600 py-3 px-10 text-white mx-auto block text-center max-w-max rounded-md cursor-pointer  ' to="Contact">Learn more </Link></div>
            </div>

          ))}
        </Slider>
      </div>

    </div>
    // </div>

  );
};
export default Services;