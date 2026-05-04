import Card from './Card';
import CardCover from './CardCover';

const Skill = ({ skill: { style, name, icon, proficiency = 0 } }) => (
  <Card style={style}>
    <div className="rounded-md w-full group relative flex flex-col justify-between duration-500 py-2 h-24 border-black overflow-hidden">
      <CardCover style={{ display: "hidden group-hover:block", ...style }} />
      <div className="flex justify-center w-fit mx-auto z-20">
        {icon}
      </div>
      <div className="text-center dark:text-white text-black z-20">
        <p>{name}</p>
      </div>
      {proficiency > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-700">
          <div
            className="h-full bg-aba transition-all duration-700 ease-out"
            style={{ width: `${proficiency}%` }}
          />
        </div>
      )}
    </div>
  </Card>
);

export default Skill;
