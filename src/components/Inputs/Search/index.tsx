interface SearchInputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  id,
  placeholder,
  value,
  className,
  startIcon,
  endIcon,
  onChange,
}: SearchInputProps) => {
  return (
    <div className="flex w-full flex-row rounded-full items-center bg-white px-4 gap-2 h-full">
      <div className="flex flex-row">
        {startIcon && <div className="flex items-center">{startIcon}</div>}
        <input
          id={id}
          className={`bg-white border-2 border-none w-full rounded-md p-2 outline-none ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {endIcon && <div className="flex items-center">{endIcon}</div>}
      </div>
    </div>
  );
};

export default SearchInput;
