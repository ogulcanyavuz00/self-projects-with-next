import { GoogleKeepMainComponent } from "./components/GoogleKeepMainComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clone - Google Keep",
};

export default function GoogleKeepPage() {
  return <GoogleKeepMainComponent />;
}
