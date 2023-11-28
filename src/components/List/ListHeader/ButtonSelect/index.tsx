interface ButtonSelectProps {
  index: number;
  option: {
    text: string;
    disable: boolean;
    selected?: boolean;
  };
}

//todo; implement function to select filter by

const ButtonSelect = ({ index, option }: ButtonSelectProps) => {
  return (
    <button
      key={index}
      className={`
      text-[#151515]
      ${
        option.selected
          ? 'text-[#151515] cursor-pointer border-b-4 border-[#4AD697]'
          : 'text-[#7c7c7c]'
      } px-4 py-2 mr-2 h-full `}
      disabled={option.disable}
    >
      {option.text}
    </button>
  );
};

export default ButtonSelect;
