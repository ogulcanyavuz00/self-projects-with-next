import { WholeComponent } from "./components/WholeCmp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results Component",
};

export default function ResultsSummary() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <WholeComponent />
    </div>
  );
}
