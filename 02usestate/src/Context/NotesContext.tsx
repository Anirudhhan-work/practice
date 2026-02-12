import { createContext } from "react";
import type { Notes } from "../types/types";

type NotesContextType = {
  allNotes: Notes[];
  deleteNote: (id: number) => void;
  addNote: (notes: Notes) => void;
};

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined,
);
