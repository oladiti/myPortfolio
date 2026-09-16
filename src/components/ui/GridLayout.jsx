const GridLayout = ({ children, className = "" }) => (
  <div className={`grid gap-5 ${className}`}>
    {children}
  </div>
);

export default GridLayout;
