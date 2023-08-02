import { ResultCmp } from "./ResultCmp";
import { SummaryCmp } from "./SummaryCmp";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-hanken-grotesk",
});

export function WholeComponent() {
  return (
    <main className={`${hankenGrotesk.className} md:flex text-lg`}>
      <ResultCmp />
      <SummaryCmp />
    </main>
  );
}
