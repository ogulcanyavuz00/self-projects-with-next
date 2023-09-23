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
