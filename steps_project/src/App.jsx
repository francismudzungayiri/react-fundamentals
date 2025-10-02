import { useState } from "react";
import Button from "./Components/Button";
import StepNumber from "./Components/StepNumber";

const messages = [
  "Learn Reacting as a Founder",
  "Read 5am Club by Robin Sharma",
  "Invest my time and effort into my side hustle",
];

const App = () => {
  {
    /* state to keep track of the current app state */
  }
  const [step_count, setStep] = useState(1);
  const [open, isSetOpen] = useState(true);

  function handlePrevious() {
    if (step_count === 1) {
      setStep(3);
      return;
    }
    setStep((s) => s - 1);
  }
  function handleNext() {
    if (step_count === 3) {
      setStep(1);
      return;
    }
    setStep((s) => s + 1);
  }
  function handleOpen() {
    if (open == false) {
      isSetOpen(true);
    } else {
      isSetOpen(false);
    }
  }

  return (
    <div className="overflow-hidden relative bg-[#F7F4EA] h-screen w-screen">
      <button
        onClick={handleOpen}
        className="p-4 font-bold absolute top-1/12 left-4/5 bg-green-400 rounded-xl text-gray-800"
      >
        {open ? "Close" : "Open"}
      </button>
      {open && (
        <div className="w-[50%] h-[50%] bg-[#EBD9D1] rounded mx-auto my-[10%] flex flex-col justify-around">
          <div className="flex justify-around">
            <StepNumber step_number={1} stepCount={step_count} />
            <StepNumber step_number={2} stepCount={step_count} />
            <StepNumber step_number={3} stepCount={step_count} />
          </div>
          <h1 className="text-center text-2xl text-[#B87C4C] font-bold">
            <span>Step {step_count}: </span>
            {messages[step_count - 1]}
          </h1>
          <div className="w-full flex justify-around">
            <Button text={"Previous"} onclick={handlePrevious} />
            <Button text={"Next"} onclick={handleNext} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
