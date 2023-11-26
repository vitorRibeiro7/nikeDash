import { AiOutlineSearch } from 'react-icons/ai';
import ButtonSelect from './ButtonSelect';
import SearchInput from '../../Inputs/Search';
import { useEffect, useState } from 'react';
import SelectInput from '../../Inputs/Select';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const statusOptions = [
  { text: 'All Members', disable: false, selected: true },
  { text: 'Pending', disable: true, selected: false },
  { text: 'Cancelled', disable: true, selected: false },
];

const limitOptions = ['8', '12', '16', '20'];

const ListHeader = () => {
  const [values, setValues] = useState({
    status: 'All Members',
    search: '',
    limit: '8',
  });

  const { width } = useWindowDimensions();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, search: e.target.value });
  };

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, limit: e.target.value });
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div
      className={`flex justify-between gap-2 ${
        width > 800 ? 'flex-row' : 'flex-col'
      } border-b-2 border-[#151515] h-auto`}
    >
      <div className="flex h-auto overflow-">
        {statusOptions.map((option, index) => (
          <ButtonSelect option={option} key={index} />
        ))}
      </div>
      <div className="flex justify-start gap-1">
        <SearchInput
          id="search"
          placeholder="Search"
          startIcon={<AiOutlineSearch size="20" />}
          onChange={handleSearch}
          value={values.search}
        />
        <SelectInput
          options={limitOptions}
          id="limit"
          onChange={handleLimit}
          value={values.limit}
        />
      </div>
    </div>
  );
};

export default ListHeader;
