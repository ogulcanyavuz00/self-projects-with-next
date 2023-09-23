import { useEffect, useState, useRef } from "react";

import { TakeANoteDefault } from "./TakeANoteDefault";
import { TakeANoteFocused } from "./TakeANoteFocused";

type TakeANote = {
  handleNoteChange(event): void;
};

export function TakeANote({ handleNoteChange, noteData }: any) {
  const [inputHasFocus, setInputHasFocus] = useState(false);

  const takeANoteFocusedRef = useRef<HTMLDivElement>(null);

  function toggleFocus() {
    setInputHasFocus((p) => !p);
  }

  function disableFocus() {
    setInputHasFocus(false);
  }

  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === "Escape" && inputHasFocus === true) {
        disableFocus();
      }
    }

    function handleClickOutside(e: MouseEvent) {
      if (!takeANoteFocusedRef.current?.contains(e.target as Node)) {
        disableFocus();
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
  }, [inputHasFocus]);

  return (
    <div>
      {inputHasFocus ? (
        <TakeANoteFocused
          handleNoteChange={handleNoteChange}
          noteData={noteData}
          toggleFocus={toggleFocus}
          takeANoteFocusedRef={takeANoteFocusedRef}
        />
      ) : (
        <TakeANoteDefault toggleFocus={toggleFocus} />
      )}
    </div>
  );
}
