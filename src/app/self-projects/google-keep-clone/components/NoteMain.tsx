"use client";

import { TakeANote } from "./TakeANote";
import { DisplayNotes } from "./DisplayNotes";
import { useState, useEffect, useMemo, useRef } from "react";
import { initialNoteData, initialAllNoteList } from "../helpers/initialStates";
import {
  InitialNoteData,
  InitialAllNoteList,
  HandleNoteChange,
  NoParamReturnVoid,
  AddNoteToNoteList,
  DeleteNoteFromNoteList,
} from "../helpers/types";

export function NoteMain() {
  const isItFirstRenderRef = useRef<"firstRender" | "notFirstRender">(
    "firstRender"
  );

  const [noteData, setNoteData] = useState<InitialNoteData>(
    () => initialNoteData
  );

  const [allNoteList, setAllNoteList] =
    useState<InitialAllNoteList>(initialAllNoteList);

  useEffect(() => {
    let storedData: InitialAllNoteList = initialAllNoteList;
    try {
      storedData =
        JSON.parse(localStorage.getItem("allNoteList") as string) ||
        initialAllNoteList;
      setAllNoteList(storedData);
    } catch (error) {
      console.error("Error parsing data from local storage:", error);
    }
  }, []);

  useEffect(() => {
    if (isItFirstRenderRef.current === "notFirstRender") {
      try {
        localStorage.setItem("allNoteList", JSON.stringify(allNoteList));
      } catch (error) {
        console.error("Error saving data to local storage:", error);
      }
    }
  }, [allNoteList]);

  const handleNoteChange: HandleNoteChange = function (event) {
    const { name, value, type, checked } = event.target;
    setNoteData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
      lastEdited: new Date(),
      id: crypto.randomUUID(),
    }));
  };

  const nullifyNoteChange: NoParamReturnVoid = function () {
    setNoteData(initialNoteData);
  };

  const addNoteToNoteList: AddNoteToNoteList = function (noteDataParam) {
    isItFirstRenderRef.current = "notFirstRender";
    setAllNoteList((p) => [noteDataParam, ...p]);
  };

  const deleteNoteFromNoteList: DeleteNoteFromNoteList = function (id) {
    setAllNoteList((prevAllNoteList) =>
      prevAllNoteList.filter((singleNote) => id !== singleNote?.id)
    );
  };

  return (
    <main className="grid place-content-center">
      <TakeANote
        handleNoteChange={handleNoteChange}
        noteData={noteData}
        addNoteToNoteList={addNoteToNoteList}
        nullifyNoteChange={nullifyNoteChange}
      />
      <DisplayNotes
        allNoteList={allNoteList}
        deleteNoteFromNoteList={deleteNoteFromNoteList}
      />
    </main>
  );
}

// const handleDisplayedNoteChange = function (event: any, id: any) {
//   const { name, value, type, checked } = event.target;
//   setAllNoteList((prevAllNoteList) =>
//     prevAllNoteList.map((prevSingleNote) =>
//       prevSingleNote?.id === id
//         ? {
//             ...prevSingleNote,
//             [name]: type === "checkbox" ? checked : value,
//             lastEdited: new Date(),
//           }
//         : prevSingleNote
//     )
//   );
// };
