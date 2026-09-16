const CardCover = ({ text }) => (
  <div className="hidden group-hover:flex flex-col items-center justify-center z-10 absolute inset-0 bg-black/70 backdrop-blur-sm rounded-2xl duration-300 p-6">
    {text && (
      <p className="text-sm text-gray-200 text-center leading-relaxed">{text}</p>
    )}
  </div>
);

export default CardCover;
