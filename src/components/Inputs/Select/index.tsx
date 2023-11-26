interface SelectInputProps {
  id: string;
  options: string[];
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ id, options, value, onChange }: SelectInputProps) => {
  return (
    <select
      id={id}
      className="appearance-none w-20 text-indent-1 bg-no-repeat bg-center-right pr-2 bg-white bg-[url(assets/icons/arrow-down.png)] bg-[length:14px] rounded-full p-2 px-4 outline-none select-none cursor-pointer h-full "
      onChange={onChange}
      value={value}
    >
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
