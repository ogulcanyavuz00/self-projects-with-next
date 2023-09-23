"use client";

import { TakeANote } from "./TakeANote";
import { DisplayNotes } from "./DisplayNotes";
import { ChangeEvent, useState } from "react";
import { initialNoteData, initialAllNoteList } from "../helpers/initialStates";

export function NoteMain() {
  const [noteData, setNoteData] = useState(() => initialNoteData);
  const [allNoteList, setAllNoteList] = useState(() => initialAllNoteList);

  console.log(noteData);

  function handleNoteChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setNoteData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
      lastEdited: new Date(),
    }));
  }

  return (
    <main className="grid place-content-center">
      <TakeANote handleNoteChange={handleNoteChange} noteData={noteData} />
      <DisplayNotes />
    </main>
  );
}
