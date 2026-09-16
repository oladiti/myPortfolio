const CircularProgress = ({ percentage, gradientId }) => {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-16 h-16">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          strokeWidth="5"
          className="stroke-gray-100 dark:stroke-white/10"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          strokeWidth="5"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700 dark:text-gray-300">
        {percentage}%
      </span>
    </div>
  );
};

const Skill = (props) => {
  const { icon, name, proficiency = 0 } = props.skill;
  const gradientId = `skill-gradient-${props.skill.id}`;

  return (
    <div className="group rounded-2xl glass shadow-card hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center gap-4">
      <div className="flex justify-center w-fit transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <p className="text-center font-medium text-gray-800 dark:text-white">{name}</p>
      {proficiency > 0 && <CircularProgress percentage={proficiency} gradientId={gradientId} />}
    </div>
  );
};

export default Skill;