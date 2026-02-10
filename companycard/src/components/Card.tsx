import { Bookmark } from "lucide-react";
import type { Details } from "../types/types";

function Feature({ feature }: { feature: string }) {
  return (
    <p className="text-xs bg-blue-100 p-1 font-semibold rounded-md">
      {feature}
    </p>
  );
}

const Card = (props: Details) => {
  return (
    <div className="h-80 w-70 rounded-4xl bg-white gap-1 text-black p-5 flex flex-col">
      <div className="flex justify-between">
        <img
          src={props.logo}
          alt="amazon"
          className="w-11 h-11 rounded-full p-1 border border-gray-600"
        />
        <div className="flex border rounded-lg items-center gap-2 border-gray-600 p-1 h-8">
          <p className="text-gray-600 text-sm font-bold">Save</p>
          <Bookmark className="text-gray-600 size-4" />
        </div>
      </div>

      <p className="font-bold text-gray-700">
        {props.CompanyName}
        <span className="text-gray-400 font-bold text-[10px] p-1">
          5 days ago
        </span>
      </p>

      <p className="text-xl font-bold">{props.designation}</p>

      <div className="flex py-2 gap-2">
        {props.features.map((f) => (
          <Feature feature={f} />
        ))}
      </div>

      <div className="flex justify-between mt-auto">
        <div>
          <p className="font-semibold">${props.fee}/hr</p>
          <p className="text-xs text-gray-400">{props.location}</p>
        </div>
        <button className="text-white">Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
