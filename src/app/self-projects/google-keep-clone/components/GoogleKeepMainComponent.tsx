"use client";

import { GoogleKeepInputElement } from "./GoogleKeepInputElement";
import { GoogleKeepNoteList } from "./GoogleKeepNoteList";
import { useReducer, useContext } from "react";

const reducer = (state: any, action: any) => {};

const initialState = {
  newNote: "",
};

export function GoogleKeepMainComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GoogleKeepInputElement />
      <GoogleKeepNoteList />
    </>
  );
}
