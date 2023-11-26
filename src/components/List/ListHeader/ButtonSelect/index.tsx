interface ButtonSelectProps {
  key: number;
  option: {
    text: string;
    disable: boolean;
    selected?: boolean;
  };
}

//todo; implement function to select filter by

const ButtonSelect = ({ key, option }: ButtonSelectProps) => {
  return (
    <button
      key={key}
      className={`text-[#151515] ${
        option.selected ? 'opacity-100' : 'opacity-50'
      } px-4 py-2 mr-2 h-full ${
        option.selected &&
        'text-[#151515] opacity-100 cursor-pointer border-b-4 border-[#4AD697]'
      }`}
      disabled={option.disable}
    >
      {option.text}
    </button>
  );
};

export default ButtonSelect;
