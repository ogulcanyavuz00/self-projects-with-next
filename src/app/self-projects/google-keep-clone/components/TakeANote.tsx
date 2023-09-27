import { useEffect, useState, useRef, useCallback } from "react";

import { TakeANoteDefault } from "./TakeANoteDefault";
import { TakeANoteFocused } from "./TakeANoteFocused";
import { TakeANoteComponent } from "../helpers/types";

export function TakeANote({
  handleNoteChange,
  noteData,
  addNoteToNoteList,
  nullifyNoteChange,
}: TakeANoteComponent) {
  const [inputHasFocus, setInputHasFocus] = useState(false);

  const takeANoteFocusedRef = useRef<HTMLDivElement>(null);

  function enableFocusForBlurredComponent() {
    setInputHasFocus(true);
  }

  const disableFocusForFocusedComponent = useCallback(() => {
    if (noteData.title || noteData.note) {
      addNoteToNoteList(noteData);
    }
    nullifyNoteChange();
    setInputHasFocus(false);
  }, [noteData, addNoteToNoteList, nullifyNoteChange]);

  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === "Escape" && inputHasFocus === true) {
        disableFocusForFocusedComponent();
      }
    }

    function handleClickOutside(e: MouseEvent) {
      if (!takeANoteFocusedRef.current?.contains(e.target as Node)) {
        disableFocusForFocusedComponent();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    if (inputHasFocus) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputHasFocus, disableFocusForFocusedComponent]);

  return (
    <div>
      {inputHasFocus ? (
        <TakeANoteFocused
          handleNoteChange={handleNoteChange}
          noteData={noteData}
          disableFocusForFocusedComponent={disableFocusForFocusedComponent}
          takeANoteFocusedRef={takeANoteFocusedRef}
        />
      ) : (
        <TakeANoteDefault
          enableFocusForBlurredComponent={enableFocusForBlurredComponent}
        />
      )}
    </div>
  );
}
