import { useState } from "react";
import { systemSteps } from "../../../constants/mockData/steps";
import Step from "../Step";

const SystemSteps = () => {
  const [activeStep, setActiveStep] = useState("cameras");

  const handleToggle = (id: string) => {
    setActiveStep((prev) => (prev === id ? "" : id));
  };

  const handleNext = (currentStepId: string) => {
    const currentIndex = systemSteps.findIndex(
      (step) => step.id === currentStepId,
    );

    if (currentIndex === -1) return;
    const nextStep = systemSteps[currentIndex + 1];

    if (nextStep) {
      setActiveStep(nextStep.id);
    }
  };

  return (
    <div className="flex gap-3.25 flex-col">
      {systemSteps.map((step, index) => (
        <Step
          key={step.id}
          step={step}
          totalSteps={systemSteps.length}
          isOpen={activeStep === step.id}
          onToggle={() => handleToggle(step.id)}
          onNext={() => handleNext(step.id)}
          nextStepTitle={systemSteps[index + 1]?.title}
        />
      ))}
    </div>
  );
};

export default SystemSteps;
