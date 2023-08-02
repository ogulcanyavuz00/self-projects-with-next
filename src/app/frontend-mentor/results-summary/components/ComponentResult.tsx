export function ComponentResult() {
  return (
    <section className="flex flex-col items-center justify-center px-10 py-6 rounded-b-3xl from-resultsSummary-lightSlateBlue to-resultsSummary-lightRoyalBlue bg-gradient-to-b w-72">
      <h1 className="text-resultsSummary-lightLavender">Your Result</h1>
      <div className="grid w-32 h-32 rounded-full place-content-center bg-gradient-to-b from-resultsSummary-violetBlue to-resultsSummary-persianBlue">
        <p className="text-5xl font-bold text-white">76</p>
        <p className="text-resultsSummary-lightLavender">of 100</p>
      </div>
      <h3 className="text-white">Great</h3>
      <p className="text-sm text-resultsSummary-lightLavender">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
}
