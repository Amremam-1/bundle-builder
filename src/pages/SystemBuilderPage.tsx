import SystemSteps from "../components/system-builder/SystemSteps";
import SystemSummary from "../components/system-builder/SystemSummary";

const SystemBuilderPage = () => {
  return (
    <main className="w-full md:px-5 md:py-12.25 xl:px-26.25">
      <div
        className="
          flex w-full flex-col

          md:flex-row
          md:items-start
          md:gap-7.25

          xl:flex-col
          xl:gap-8.25
        "
      >
        {/* System Steps */}
        <div className="w-full min-w-0 md:flex-1 xl:w-full">
          <SystemSteps />
        </div>

        {/* System Summary */}
        <aside
          className="
            w-full

            md:w-75
            md:shrink-0

            xl:w-full
          "
        >
          <SystemSummary />
        </aside>
      </div>
    </main>
  );
};

export default SystemBuilderPage;
