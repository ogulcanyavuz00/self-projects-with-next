import { ChangeEvent } from "react";
import { DisplayNotesSingleNoteComponent } from "../helpers/types";

export function SingleNote({
  noteData,
  deleteNoteFromNoteList,
  handleUserNoteChange,
}: DisplayNotesSingleNoteComponent) {
  return (
    <div className="p-3 my-4 border-2 border-gray-300 border-solid group/single-note">
      <input
        type="checkbox"
        name="isPinned"
        checked={noteData?.isPinned}
        onChange={(event) => handleUserNoteChange(event, noteData?.id)}
      />
      <p>{noteData?.title}</p>
      <p>{noteData?.note}</p>

      <div className="relative opacity-0 top-2 group-hover/single-note:opacity-100 transition-[opacity] ease-in-out">
        <button onClick={() => deleteNoteFromNoteList(noteData?.id)}>
          Delete Note
        </button>
      </div>
    </div>
  );
}
