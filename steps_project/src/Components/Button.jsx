const Button = ({ text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="cursor-pointer px-5 py-2 font-normal bg-[#A8BBA3] text-lg text-[#B87C4C]font-medium rounded-lg hover:bg-transparent hover:border-2 hover: border-[#A8BBA3]"
    >
      {text}
    </button>
  );
};

export default Button;
