import { DisplayNotesComponent } from "../helpers/types";
import { SingleNote } from "./DisplayNotesSingleNote";

export function DisplayNotes({ allNoteList }: DisplayNotesComponent) {
  const notesToDisplay = allNoteList.map((noteData) => (
    <SingleNote noteData={noteData} key={crypto.randomUUID()} />
  ));
  return notesToDisplay;
}
