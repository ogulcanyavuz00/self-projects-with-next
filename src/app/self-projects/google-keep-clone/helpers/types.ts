import { ChangeEvent } from "react";

type BackgroundColor =
  | "default"
  | "coral"
  | "peach"
  | "sand"
  | "mint"
  | "sage"
  | "fog"
  | "storm"
  | "dusk"
  | "blossom"
  | "clay"
  | "chalk";

type BackgroundImage =
  | "default"
  | "groceries"
  | "food"
  | "music"
  | "recipes"
  | "notes"
  | "places"
  | "travel"
  | "video"
  | "celebration";

type InitialNoteData = {
  title: string;
  note: string;
  lastEdited: null | Date;
  isPinned: boolean;
  isArchived: boolean;
  isTrashed: boolean;
  label: string;
  backgroundColor: BackgroundColor;
  backgroundImage: BackgroundColor;
};

type InitialAllNoteList = InitialNoteData[] | null[];

type HandleNoteChange = (event: ChangeEvent<HTMLInputElement>) => void;

type AddNoteToNoteList = (noteDataParam: InitialNoteData) => void;

type NoParamReturnVoid = () => void;

type TakeANoteFocusedRef = {
  current: null | HTMLDivElement;
};

type TakeANoteComponent = {
  handleNoteChange: HandleNoteChange;
  nullifyNoteChange: NoParamReturnVoid;
  addNoteToNoteList: AddNoteToNoteList;
  noteData: InitialNoteData;
};

type TakeANoteFocusedComponent = {
  handleNoteChange: HandleNoteChange;
  noteData: InitialNoteData;
  disableFocusForFocusedComponent: NoParamReturnVoid;
  takeANoteFocusedRef: TakeANoteFocusedRef;
};

type TakeANoteDefaultComponent = {
  enableFocusForBlurredComponent: NoParamReturnVoid;
};

type DisplayNotesComponent = {
  allNoteList: InitialNoteData[];
};

export type {
  InitialNoteData,
  InitialAllNoteList,
  HandleNoteChange,
  NoParamReturnVoid,
  AddNoteToNoteList,
  TakeANoteComponent,
  TakeANoteFocusedComponent,
  TakeANoteDefaultComponent,
  DisplayNotesComponent,
};
