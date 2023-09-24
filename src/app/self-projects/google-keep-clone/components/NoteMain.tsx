"use client";

import { TakeANote } from "./TakeANote";
import { DisplayNotes } from "./DisplayNotes";
import { ChangeEvent, useState } from "react";
import { initialNoteData, initialAllNoteList } from "../helpers/initialStates";
import {
  InitialNoteData,
  HandleNoteChange,
  NoParamReturnVoid,
  AddNoteToNoteList,
} from "../helpers/types";

export function NoteMain() {
  const [noteData, setNoteData] = useState<InitialNoteData>(
    () => initialNoteData
  );
  const [allNoteList, setAllNoteList] = useState(() => initialAllNoteList);

  console.log(allNoteList);

  const handleNoteChange: HandleNoteChange = function (event) {
    const { name, value, type, checked } = event.target;
    setNoteData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
      lastEdited: new Date(),
    }));
  };

  const nullifyNoteChange: NoParamReturnVoid = function () {
    setNoteData(initialNoteData);
  };

  const addNoteToNoteList: AddNoteToNoteList = function (noteDataParam) {
    setAllNoteList((p) => [...p, noteDataParam]);
  };

  return (
    <main className="grid place-content-center">
      <TakeANote
        handleNoteChange={handleNoteChange}
        noteData={noteData}
        addNoteToNoteList={addNoteToNoteList}
        nullifyNoteChange={nullifyNoteChange}
      />
      <DisplayNotes />
    </main>
  );
}
