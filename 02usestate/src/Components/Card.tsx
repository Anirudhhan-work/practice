import { useContext } from "react";
import type { Notes } from "../types/types";
import { NotesContext } from "../Context/NotesContext";

const Card = (props: Notes) => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("NotesContext must be used within NotesProvider");
  }
  console.log("card");

  const { deleteNote } = context;
  return (
    <div className="bg-white bg-[url('')] w-80 h-80 rounded-xl p-5 relative">
      <h1 className="font-medium text-2xl">{props.title}</h1>
      <hr className="border-black" />
      <p className="text-gray-600 pt-5">{props.details}</p>
      <button
        onClick={() => deleteNote(props.id)}
        className="rounded-md text-white bg-red-600 p-1 w-15 h-7 absolute bottom-5 right-5 hover:bg-red-500 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
