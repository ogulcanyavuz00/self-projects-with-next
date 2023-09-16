import Image from "next/image";
import img from "public/frontend-mentor/result-summary/icon-reaction.svg";

export function SummarySubCmp({
  category,
  score,
  icon,
}: {
  category: string;
  score: number;
  icon: string;
}) {
  return (
    <div className="flex p-3 text-base rounded-xl bg-rose-200">
      {/* <p className="mr-2">@</p> */}
      <Image alt="picture" width={50} height={50} src={img} />
      <p className="font-bold text-resultsSummary-lightRed">{category}</p>
      <div className="flex ml-auto">
        <p className=" text-resultsSummary-darkGrayBlue">{score}</p>
        <p className="font-bold text-resultsSummary-lightLavender">/ 100</p>
      </div>
    </div>
  );
}
