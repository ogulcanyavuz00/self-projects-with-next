import { DisplayNotesComponent } from "../helpers/types";
import { SingleNote } from "./DisplayNotesSingleNote";

export function DisplayNotes({
  allNoteList,
  deleteNoteFromNoteList,
  handleDisplayedNoteChange,
}: DisplayNotesComponent) {
  return (
    <div>
      {allNoteList.map((noteData) => (
        <SingleNote
          key={noteData?.id}
          noteData={noteData}
          deleteNoteFromNoteList={deleteNoteFromNoteList}
          handleDisplayedNoteChange={handleDisplayedNoteChange}
        />
      ))}
    </div>
  );
}
