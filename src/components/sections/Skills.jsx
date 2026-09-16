import Skill from './Skill';
import SectionHeading from '../ui/SectionHeading';
import skills from '../../data/skills';

const Skills = () => (
  <section name="Skills" className="section">
    <div className="section-content">
      <SectionHeading heading="Skills" secondHeading="Technologies and tools I use to build great products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div key={skill.id} data-aos="fade-up" data-aos-delay={index * 50}>
            <Skill skill={skill} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;