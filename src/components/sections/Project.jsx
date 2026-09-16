import { Code, Link } from 'lucide-react';

const Project = ({ project }) => {
  const { img, demo, code, description, name } = project;

  return (
    <article className="group relative overflow-hidden rounded-2xl glass shadow-card hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          title={name}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6">
          <p className="text-sm text-gray-200 text-center leading-relaxed">{description}</p>
          <div className="flex items-center gap-3">
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2 px-4 text-sm border-white/30 text-white hover:border-white hover:text-white"
            >
              <Code size={16} /> Code
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-sm"
            >
              <Link size={14} /> Demo
            </a>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-accent transition-all duration-300">
          {name}
        </h3>
      </div>
    </article>
  );
};

export default Project;