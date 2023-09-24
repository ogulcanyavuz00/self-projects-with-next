import { InitialNoteData, InitialAllNoteList } from "./types";

const initialNoteData: InitialNoteData = {
  title: "",
  note: "",
  lastEdited: null,
  isPinned: false,
  isArchived: false,
  isTrashed: false,
  backgroundColor: "default",
  backgroundImage: "default",
  label: "",
};

const initialAllNoteList: InitialAllNoteList = [];

export { initialNoteData, initialAllNoteList };
