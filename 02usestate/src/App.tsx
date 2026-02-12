import { useContext, useState } from "react";
import Card from "./Components/Card";
import type { Notes } from "./types/types";
import { NotesContext } from "./Context/NotesContext";

const App = () => {
  const [note, setNote] = useState<Notes>({ id: 0, title: "", details: "" });
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("ThemeContext must be used within ThemeProvider");
  }

  const { allNotes, addNote } = context;

  const submitNote = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currId = allNotes.length;
    setNote({ ...note, id: currId + 1 });
    addNote(note);
    console.log(allNotes);
  };

  return (
    <div className="lg:flex lg:h-screen">
      <div className="lg:w-1/2 w-full lg:h-screen h-100  flex justify-center items-center">
        <form
          action=""
          className="grid grid-cols-1 lg:gap-10 gap-5"
          onSubmit={(e) => submitNote(e)}
        >
          <input
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            type="text"
            placeholder="Topic"
            className="text-white lg:w-100 lg:h-15 border-white border-2 outline-none p-5 rounded-xl font-medium"
          />
          <textarea
            onChange={(e) => setNote({ ...note, details: e.target.value })}
            name=""
            id=""
            placeholder="Enter Details.."
            className="text-white lg:w-100 lg:h-60 h-40 border-white border-2 outline-none p-5 rounded-xl font-medium"
          ></textarea>
          <button
            type="submit"
            className="bg-white py-3 rounded-lg cursor-pointer font-medium"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-screen h-100 bg-gray-950 lg:p-30 p-10 lg:border-l-2 border-white">
        <h1 className="text-white text-5xl font-medium pb-5">Notes</h1>
        <div className="grid lg:grid-cols-2 gap-5 justify-items-center">
          {allNotes.map((val, idx) => (
            <Card
              id={val.id}
              title={val.title}
              details={val.details}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
