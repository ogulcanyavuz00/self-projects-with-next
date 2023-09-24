import { TakeANoteDefaultComponent } from "../helpers/types";

export function TakeANoteDefault({ toggleFocus }: TakeANoteDefaultComponent) {
  return (
    <input
      type="text"
      name="title"
      placeholder="Take a note..."
      id="default-input-component"
      className="border-2 border-gray-300 border-solid outline-none"
      onClick={toggleFocus}
    />
  );
}
