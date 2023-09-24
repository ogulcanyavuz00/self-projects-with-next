import { TakeANoteDefaultComponent } from "../helpers/types";

export function TakeANoteDefault({
  enableFocusForBlurredComponent,
}: TakeANoteDefaultComponent) {
  return (
    <input
      type="text"
      name="title"
      placeholder="Take a note..."
      id="default-input-component"
      className="border-2 border-gray-300 border-solid outline-none"
      onClick={enableFocusForBlurredComponent}
    />
  );
}
