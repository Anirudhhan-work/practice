import { useState, type ReactNode } from "react";
import type { Notes } from "../types/types";
import { NotesContext } from "./NotesContext";

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [allNotes, setAllNotes] = useState<Notes[]>([]);
  const deleteNote = (id: number) => {
    setAllNotes((prev) => prev.filter((val) => val.id !== id));
  };
  const addNote = (notes: Notes) => {
    setAllNotes([...allNotes, notes]);
  };

  return (
    <NotesContext.Provider value={{ allNotes, deleteNote, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};
