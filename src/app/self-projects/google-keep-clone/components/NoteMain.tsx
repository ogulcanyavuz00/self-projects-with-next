"use client";

import { TakeANote } from "./TakeANote";
import { DisplayNotes } from "./DisplayNotes";
import { ChangeEvent, useState } from "react";

const initialNote = {
  title: "",
  note: "",
  lastEdited: "",
  isPinned: "",
  backgroundColor: "",
  backgroundImage: "",
  isArchived: "",
  label: "",
  isTrashed: "",
};

export function NoteMain() {
  const [note, setNote] = useState(() => initialNote);

  console.log(note);

  function handleNoteChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setNote((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
      lastEdited: "1",
    }));
  }

  return (
    <main className="grid place-content-center">
      <TakeANote handleNoteChange={handleNoteChange} />
      <DisplayNotes />
    </main>
  );
}
