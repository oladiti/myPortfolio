import Slider from "react-slick";
import SectionHeading from './SectionHeading';
import Project from './Project';
import projects from '../data/projects';

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

const Projects = () => (
  <section name="Projects" className="pt-6 projects max-xs:px-3 xs:px-2 mb-28 lg:px-3 md:px-0 xl:pt-28 h-full min-h-screen w-full flex items-center text-white">
    <div className="section xl:pb-20 max-xs:pt-56 max-xs:mb-10 max-xs:px-5">
      <div className="ml-2 sm:ml-2 lg:ml-2">
        <SectionHeading heading="Projects" secondHeading="Check Out Some of my work" />
      </div>
      <Slider {...SLIDER_SETTINGS} className="Service__container">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  </section>
);

export default Projects;
