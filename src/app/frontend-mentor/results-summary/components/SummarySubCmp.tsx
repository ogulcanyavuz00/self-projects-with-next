export function SummarySubCmp() {
  return (
    <div className="flex p-3 text-base rounded-xl bg-rose-200">
      <p className="mr-2">@</p>
      <p className="font-bold text-resultsSummary-lightRed">Reaction</p>
      <div className="flex ml-auto">
        <p className=" text-resultsSummary-darkGrayBlue">80</p>
        <p className="font-bold text-resultsSummary-lightLavender">/ 100</p>
      </div>
    </div>
  );
}
