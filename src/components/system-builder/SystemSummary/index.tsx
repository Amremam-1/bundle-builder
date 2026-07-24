import SummaryLeft from "./SummaryLeft";
import SummaryRight from "./SummeryRight";

const SystemSummary = () => {
  return (
    <section className="rounded-lg bg-surface-muted px-4 py-6 md:px-6 xl:px-12 xl:py-7">
      <p className="mb-2 text-[9px] font-medium tracking-widest text-text-secondary uppercase">
        Review
      </p>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
        <SummaryLeft />

        <SummaryRight />
      </div>
    </section>
  );
};

export default SystemSummary;
