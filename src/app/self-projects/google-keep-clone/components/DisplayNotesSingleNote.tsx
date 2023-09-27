import { DisplayNotesSingleNoteComponent } from "../helpers/types";

export function SingleNote({
  noteData,
  deleteNoteFromNoteList,
}: DisplayNotesSingleNoteComponent) {
  return (
    <div className="p-3 my-4 border-2 border-gray-300 border-solid">
      <p>{noteData?.title}</p>
      <p>{noteData?.note}</p>
      <button onClick={() => deleteNoteFromNoteList(noteData?.id)}>
        Delete Note
      </button>
      <div className="relative opacity-0 top-2 group-hover/single-note:opacity-100 transition-[opacity] ease-in-out">
        alt b b
      </div>
    </div>
  );
}