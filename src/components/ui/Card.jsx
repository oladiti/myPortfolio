const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl glass shadow-card dark:shadow-card-dark transition-all duration-300 hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

export default Card;
