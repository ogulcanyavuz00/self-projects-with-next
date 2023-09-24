"use client";

import { TakeANote } from "./TakeANote";
import { DisplayNotes } from "./DisplayNotes";
import { useState } from "react";
import { initialNoteData, initialAllNoteList } from "../helpers/initialStates";
import {
  InitialNoteData,
  InitialAllNoteList,
  HandleNoteChange,
  NoParamReturnVoid,
  AddNoteToNoteList,
} from "../helpers/types";

export function NoteMain() {
  const [noteData, setNoteData] = useState<InitialNoteData>(
    () => initialNoteData
  );
  const [allNoteList, setAllNoteList] = useState<InitialAllNoteList>(
    () => initialAllNoteList
  );

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
    setAllNoteList((p) => [noteDataParam, ...p]);
  };

  return (
    <main className="grid place-content-center">
      <TakeANote
        handleNoteChange={handleNoteChange}
        noteData={noteData}
        addNoteToNoteList={addNoteToNoteList}
        nullifyNoteChange={nullifyNoteChange}
      />
      <DisplayNotes allNoteList={allNoteList} />
    </main>
  );
}
