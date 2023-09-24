import { useEffect, useRef } from "react";
import { TakeANoteFocusedComponent } from "../helpers/types";

export function TakeANoteFocused({
  handleNoteChange,
  noteData,
  disableFocusForFocusedComponent,
  takeANoteFocusedRef,
}: TakeANoteFocusedComponent) {
  const noteInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    noteInputRef.current?.focus();
  }, []);

  return (
    <div
      ref={takeANoteFocusedRef}
      className="border-2 border-gray-300 border-solid "
    >
      <div className="flex">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="outline-none"
          value={noteData.title}
          onChange={handleNoteChange}
          autoComplete="off"
        />
        <input
          type="checkbox"
          name="isPinned"
          checked={noteData.isPinned}
          onChange={handleNoteChange}
        />
      </div>
      <input
        ref={noteInputRef}
        type="text"
        name="note"
        placeholder="Take a note..."
        onChange={handleNoteChange}
        value={noteData.note}
        className="outline-none"
        autoComplete="off"
      />
      <div className="flex place-content-evenly">
        <button>bO</button>
        <input
          type="checkbox"
          name="isArchived"
          onChange={handleNoteChange}
          checked={noteData.isArchived}
        />
      </div>
      <button
        onClick={disableFocusForFocusedComponent}
        className="block ml-auto mr-5"
      >
        Close
      </button>
    </div>
  );
}
