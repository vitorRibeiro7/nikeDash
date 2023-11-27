import { useState } from 'react';
import ListPaginationControl from './ListPaginationControl';
import Card from './Card';
import ListHeader from './ListHeader';
import { UserResponse } from '../../services/api';
import { ListParams } from '../../types/list';

interface ListProps {
  data?: UserResponse; //todo: remove undefined
  loading?: boolean;
  page: number;
  limit: number;
  maxPages: number;
  handleParams?: (params: ListParams) => void;
}

const List = ({
  data,
  loading,
  page,
  limit,
  maxPages,
  handleParams,
}: ListProps) => {
  const [search, setSearch] = useState('');

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <div className={`flex flex-col w-full h-[100%] justify-between gap-1`}>
      <ListHeader
        changeLimit={(limit) => handleParams?.({ limit: limit })}
        changeSearch={handleSearch}
        limit={limit}
        search={search}
      />
      <div
        className={`bg-white rounded-lg p-2 overflow-y-scroll h-[85%] max-h-[60vh] gap-2  ${
          loading
            ? 'animate-pulse flex justify-center items-center bg-red-600'
            : 'grid grid-cols-1 auto-cols-min sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'
        }}`}
      >
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          data?.data?.map((item) => <Card key={item.id} data={item} />)
        )}
      </div>
      <div className=" h-[5%]">
        <p>
          Page {page + 1} of {maxPages}
        </p>
      </div>
      <ListPaginationControl
        maxPages={maxPages > 0 ? maxPages : 1}
        page={page}
        disabled={loading}
        handlePage={(page) => handleParams?.({ page: page })}
      />
    </div>
  );
};

export default List;
