import { DisplayNotesComponent } from "../helpers/types";
import { SingleNote } from "./DisplayNotesSingleNote";

export function DisplayNotes({
  allNoteList,
  deleteNoteFromNoteList,
}: DisplayNotesComponent) {
  const notesToDisplay = allNoteList.map((noteData) => {
    return (
      <SingleNote
        key={noteData?.id}
        noteData={noteData}
        deleteNoteFromNoteList={deleteNoteFromNoteList}
      />
    );
  });
  return notesToDisplay;
}
