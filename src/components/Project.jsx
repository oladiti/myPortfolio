import Card from './Card';
import { Code, Link } from './Icons';
import CardCover from './CardCover';

const DEFAULT_STYLE = {
  shadow: "shadow-gray-500",
  cover: "from-gray-500",
};

const ProjectsLink = ({ name, link, coverStyle }) => {
  const icon = name === "Code" ? <Code /> : <Link />;
  const roundedClass = name === "Code" ? "rounded-bl-md" : "rounded-br-md";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-1/2 py-3 text-center text-xl bg-black hover:bg-gradient-to-t to-black duration-500 flex justify-center items-center text-white cursor-pointer ${roundedClass} ${coverStyle}`}
    >
      {icon}
      <span className="pl-2">{name}</span>
    </a>
  );
};

const Project = ({ project }) => {
  const { img, demo, code, description, style = DEFAULT_STYLE } = project;

  return (
    <Card style={style}>
      <div className="group relative rounded-md cursor-pointer">
        <img
          src={img}
          alt="Project-Image"
          width="auto"
          height="auto"
          loading="lazy"
          title="Project"
          className="rounded-t-md"
        />
        <CardCover text={description} style={style} />
      </div>
      <div className="flex justify-center items-center rounded-b-md">
        <ProjectsLink name="Code" coverStyle={style.cover} link={code} />
        <ProjectsLink name="Demo" coverStyle={style.cover} link={demo} />
      </div>
    </Card>
  );
};

export default Project;
