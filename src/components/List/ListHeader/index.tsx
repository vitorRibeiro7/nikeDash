import { AiOutlineSearch } from 'react-icons/ai';
import ButtonSelect from './ButtonSelect';
import SearchInput from '../../Inputs/Search';
import SelectInput from '../../Inputs/Select';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const statusOptions = [
  { text: 'All Members', disable: false, selected: true },
  { text: 'Pending', disable: true, selected: false },
  { text: 'Cancelled', disable: true, selected: false },
];

const limitOptions = ['10', '20', '30', '40', '50'];

interface ListHeaderProps {
  limit: number;
  search: string;
  changeLimit: (limit: number) => void;
  changeSearch: (search: string) => void;
}

const ListHeader = ({
  search,
  limit,
  changeLimit,
  changeSearch,
}: ListHeaderProps) => {
  const { width } = useWindowDimensions();

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLimit(parseInt(e.target.value));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearch?.(e.target.value);
  };

  return (
    <div
      className={`flex justify-between gap-2 ${
        width > 800 ? 'flex-row' : 'flex-col'
      } border-b-2 border-[#151515] h-auto`}
    >
      <div className="flex h-auto overflow-">
        {statusOptions.map((option, index) => (
          <ButtonSelect option={option} index={index} key={index} />
        ))}
      </div>
      <div className="flex justify-start gap-1">
        <SearchInput
          id="search"
          placeholder="Search"
          startIcon={<AiOutlineSearch size="20" />}
          onChange={handleSearch}
          value={search}
        />
        <SelectInput
          options={limitOptions}
          id="limit"
          onChange={handleLimit}
          value={limit.toString()}
        />
      </div>
    </div>
  );
};

export default ListHeader;
