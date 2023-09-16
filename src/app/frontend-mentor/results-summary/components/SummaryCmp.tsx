import { SummarySubCmp } from "./SummarySubCmp";

type SummaryCmp = {
  data: { category: string; score: number; icon: string }[];
};

export function SummaryCmp({ data }: SummaryCmp) {
  const subCmps = data.map((el) => (
    <SummarySubCmp
      key={el.category}
      category={el.category}
      score={el.score}
      icon={el.icon}
    />
  ));

  return (
    <div className="px-4">
      <h2 className="font-bold text-resultsSummary-darkGrayBlue">Summary</h2>
      {subCmps}
    </div>
  );
}
