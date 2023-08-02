import { ComponentResult } from "./ComponentResult";
import { ComponentSummary } from "./ComponentSummary";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-hanken-grotesk",
});

export function WholeComponent() {
  return (
    <main className={`${hankenGrotesk.className} md:flex text-lg`}>
      <ComponentResult />
      <ComponentSummary />
    </main>
  );
}
