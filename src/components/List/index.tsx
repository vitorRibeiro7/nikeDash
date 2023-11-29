import { useState } from 'react';
import ListPaginationControl from './ListPaginationControl';
import Card from './Card';
import ListHeader from './ListHeader';
import { User, getAllUsersResponse } from '../../services/api';
import { ListParams } from '../../types/list';
import UserModal from './UserModal';

interface ListProps {
  data: getAllUsersResponse | undefined;
  loading?: boolean;
  params: ListParams;
  maxPages: number;
  error: boolean;
  handleParams: (params: ListParams) => void;
}

const List = ({
  data,
  loading,
  params,
  maxPages,
  error,
  handleParams,
}: ListProps) => {
  const [open, setOpen] = useState(false);
  const [seletctedUserId, setSelectedUserId] = useState('');

  return (
    <div className={`flex flex-col w-full h-[100%] justify-between gap-1`}>
      <ListHeader
        changeLimit={(limit) => handleParams({ ...params, limit: limit })}
        changeSearch={(search) => handleParams({ ...params, search: search })}
        limit={params.limit}
        search={params.search}
      />
      <div
        className={`bg-white rounded-lg p-2 overflow-y-scroll h-[85%] max-h-[60vh] gap-2 flex`}
      >
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-center">Loading...</p>
          </div>
        ) : error ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-center">Failed to find you search</p>
          </div>
        ) : (
          <div className="grid gap-2 grid-cols-[1fr] h-fit w-full sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr,1fr]">
            {data?.data.map((item) => (
              <Card
                key={item.id}
                user={item}
                onClick={(user: User) => {
                  setOpen(true);
                  setSelectedUserId(user.id);
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className=" h-[5%]">
        <p className="text-[#7c7c7c] text-sm">
          Page {params.page + 1} of {maxPages}
        </p>
      </div>
      <ListPaginationControl
        maxPages={maxPages > 0 ? maxPages : 1}
        page={params.page}
        disabled={loading}
        handlePage={(page) => handleParams({ ...params, page: page })}
      />
      <UserModal
        userId={seletctedUserId}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default List;
