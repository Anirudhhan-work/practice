import type { Notes } from "../types/types";

const Card = (props: Notes) => {
  return (
    <div className="bg-white w-80 h-80 rounded-xl p-5">
      <h1 className="font-medium text-2xl">{props.title}</h1>
      <hr className="border-black" />
      <p className="text-gray-600 pt-5">{props.details}</p>
    </div>
  );
};

export default Card;
