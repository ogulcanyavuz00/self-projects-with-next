import { ChangeEvent, useEffect, useRef, useState } from "react";

export function TakeANote({ handleNoteChange }: any) {
  const [inputHasFocus, setInputHasFocus] = useState(false);
  const inputRef = useRef(null);

  function handleFocus() {
    setInputHasFocus(true);
  }
  function handleBlur() {
    setInputHasFocus(false);
  }

  return (
    <div ref={inputRef} onFocus={handleFocus} onBlur={handleBlur}>
      {inputHasFocus ? (
        <TakeANoteFocused handleNoteChange={handleNoteChange} />
      ) : (
        <TakeANoteDefault />
      )}
    </div>
  );
}

function TakeANoteDefault() {
  return (
    <input
      type="text"
      name="title"
      placeholder="Take a note..."
      id="default-input-component"
      className="border-2 border-gray-300 border-solid outline-none"
    />
  );
}

function TakeANoteFocused({ handleNoteChange }: any) {
  const focusedInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    focusedInputRef.current && focusedInputRef.current.focus();
  }, []);
  return (
    <input
      ref={focusedInputRef}
      type="text"
      name="note"
      placeholder="Take aasfafasfasf note..."
      id="focused-input-component"
      onChange={handleNoteChange}
      className="border-2 border-gray-300 border-solid outline-none"
    />
  );
}
