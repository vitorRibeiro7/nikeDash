import { useState } from 'react';
import ListPaginationControl from './ListPaginationControl';
import Card from './Card';

interface ListProps {
  data: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  }[];
  total: number;
  limit: number;
  loading?: boolean;
  refetch?: (params: { page: number }) => void;
}

const List = ({ data, total = 0, limit = 8, loading, refetch }: ListProps) => {
  const [page, setPage] = useState(1);

  const maxPages = Math.ceil(limit / total);

  const handlePage = (page: number) => {
    setPage(page);

    if (!refetch) return;
    refetch({ page });
  };

  return (
    <div className={`flex flex-col w-full h-[100%] justify-between gap-1`}>
      <div className="bg-white rounded-lg p-2 overflow-y-scroll h-[85%] max-h-[60vh] gap-2 grid grid-cols-1 auto-cols-min sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          data.map((item) => <Card key={item.id} data={item} />)
        )}
      </div>
      <div className=" h-[5%]">
        <p>
          Page {page} of {maxPages}
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
