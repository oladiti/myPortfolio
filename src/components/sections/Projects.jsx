import SectionHeading from '../ui/SectionHeading';
import Project from './Project';
import projects from '../../data/projects';

const Projects = () => (
  <section name="Projects" className="section">
    <div className="section-content">
      <SectionHeading heading="Projects" secondHeading="Check out some of my recent work" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;