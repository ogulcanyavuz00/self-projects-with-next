import { InitialNoteData } from "../helpers/types";

export function SingleNote({ noteData }: { noteData: InitialNoteData }) {
  return (
    <div className="p-3 my-4 border-2 border-gray-300 border-solid group/single-note">
      <p>{noteData.title}</p>
      <p>{noteData.note}</p>
      <div className="relative invisible top-2 group-hover/single-note:visible">
        biz
      </div>
      <div className="relative"></div>
    </div>
  );
}
