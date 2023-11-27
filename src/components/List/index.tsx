import { useEffect, useState } from 'react';
import ListPaginationControl from './ListPaginationControl';
import Card from './Card';
import ListHeader from './ListHeader';
import { UserResponse } from '../../services/api';

interface ListProps {
  data?: UserResponse; //todo: remove undefined
  loading?: boolean;
  fetch?: (page: number, limit: number) => void;
}

const List = ({ data, loading, fetch }: ListProps) => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [search, setSearch] = useState('');

  const maxPages = data?.total ? Math.ceil(data?.total / limit) : 1;

  const handlePage = (page: number) => {
    setPage(page);
  };

  const handleLimit = (limit: number) => {
    setLimit(limit);
  };

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    if (page > maxPages) {
      setPage(maxPages - 1);
    }

    fetch?.(page, limit);
  }, [page, limit, search]);

  return (
    <div className={`flex flex-col w-full h-[100%] justify-between gap-1`}>
      <ListHeader
        changeLimit={handleLimit}
        changeSearch={handleSearch}
        limit={limit}
        search={search}
      />
      <div
        className={`bg-white rounded-lg p-2 overflow-y-scroll h-[85%] max-h-[60vh] gap-2  ${
          loading
            ? 'animate-pulse flex justify-center items-center bg-red-600'
            : 'grid grid-cols-1 auto-cols-min sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
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
        handlePage={handlePage}
      />
    </div>
  );
};

export default List;
