import { Metadata } from "next";
import { NoteMain } from "./components/NoteMain";

export const metadata: Metadata = {
  title: "Clone - Google Keep",
};

export default function GoogleKeepPage() {
  return <NoteMain />;
}
