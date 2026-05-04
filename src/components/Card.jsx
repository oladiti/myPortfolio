const Card = ({ children, style }) => (
  <div className={`shadow-md ${style?.shadow} rounded-lg text-white hover:scale-105 hover:shadow-xl duration-500 transition-all ease-out`}>
    {children}
  </div>
);

export default Card;
