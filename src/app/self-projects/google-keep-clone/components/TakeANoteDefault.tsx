export function TakeANoteDefault({ toggleFocus }: any) {
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
