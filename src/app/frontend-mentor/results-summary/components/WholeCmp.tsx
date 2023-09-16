"use client";

import { ResultCmp } from "./ResultCmp";
import { SummaryCmp } from "./SummaryCmp";
import { Hanken_Grotesk } from "next/font/google";
import jsonData from "../../../../../public/frontend-mentor/result-summary/data.json";
import { useState } from "react";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export function WholeComponent() {
  const [data, setData] = useState(jsonData);
  const [averageScore] = useState(
    jsonData.reduce((acc, cur, _, arr) => acc + cur.score / arr.length, 0)
  );

  return (
    <main className={`${hankenGrotesk.className} md:flex text-lg`}>
      <ResultCmp averageScore={averageScore} />
      <SummaryCmp data={data} />
    </main>
  );
}
