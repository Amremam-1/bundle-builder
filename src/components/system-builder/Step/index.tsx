import { selectSelectedCameras } from "../../../store/builderSelectors";
import { useAppSelector } from "../../../store/hook";
import type { StepData } from "../../../types";
import ProductCards from "../ProductCards";
import { IoMdArrowDropdown } from "react-icons/io";

interface StepProps {
  step: StepData;
  totalSteps: number;
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
  nextStepTitle?: string;
}

const Step = ({
  step,
  totalSteps,
  isOpen,
  onToggle,
  onNext,
  nextStepTitle,
}: StepProps) => {
  const Icon = step.icon;

  const selectedCameras = useAppSelector(selectSelectedCameras);

  return (
    <section
      className={`
        overflow-hidden transition-colors duration-300
        ${isOpen ? "rounded-lg bg-surface-muted" : ""}
      `}
    >
      {step.title === "Choose your cameras" && (
        <h1 className="block md:hidden  xl:hidden text-[31px] py-6.25 font-normal text-center">
          Let’s get started!
        </h1>
      )}
      <p className="px-3.75 pt-2 pb-1 text-xs font-normal uppercase tracking-widest text-text-secondary">
        STEP {step.stepNumber} OF {totalSteps}
      </p>

      <div
        className={`
          border-text-primary px-3.75 py-3.75
          transition-colors duration-300
          ${isOpen ? "border-t" : "border-y"}
        `}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2">
            <Icon className="text-icon-primary" size={25} />

            <h2 className="text-sm lg:text-lg xl:text-2xl font-normal text-step-primary">
              {step.title}
            </h2>
          </div>

          <div className="flex items-center gap-1 text-primary">
            {step.id === "cameras" && <p>{selectedCameras.length} Selected</p>}
            <IoMdArrowDropdown
              className={`
               transition-transform duration-300
              ${isOpen ? "rotate-180" : "rotate-0"}
              `}
              size={20}
            />
          </div>
        </button>
        <div
          className={`
            grid transition-[grid-template-rows] duration-300 ease-in-out
            ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
          `}
        >
          <div className="overflow-hidden">
            <div
              className={`
               px-0 xl:px-3.75 transition-all duration-300
                ${isOpen ? "pt-4 opacity-100" : "pt-0 opacity-0"}
              `}
            >
              {step.products.length > 0 ? (
                <div>
                  {step.stepNumber === 1 && (
                    <ProductCards products={step.products} />
                  )}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed p-8 text-center text-text-muted">
                  This step isn't available in this prototype.
                </div>
              )}
              {nextStepTitle && (
                <button
                  onClick={onNext}
                  className="mx-auto mt-5 block rounded-lg border border-primary px-3.5 py-1.25 font-bold text-primary"
                >
                  Next: {nextStepTitle}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
