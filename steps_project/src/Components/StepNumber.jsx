const StepNumber = ({ step_number, stepCount }) => {
  return (
    <span
      className={`p-5 h-13 w-13 rounded-[50%] flex justify-center border border-[#A8BBA3] items-center text-lg text-[#B87C4C] font-bold ${
        step_number <= stepCount ? "bg-[#A8BBA3]" : ""
      }`}
    >
      {step_number}
    </span>
  );
};

export default StepNumber;
