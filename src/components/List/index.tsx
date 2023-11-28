import { useState } from 'react';
import ListPaginationControl from './ListPaginationControl';
import Card from './Card';
import ListHeader from './ListHeader';
import { User, getAllUsersResponse } from '../../services/api';
import { ListParams } from '../../types/list';
import Modal from '../Modal';

interface ListProps {
  data?: getAllUsersResponse;
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
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<User>({
    id: '',
    firstName: '',
    lastName: '',
    title: '',
    picture: '',
  });

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleModalData = (user: User) => {
    setModalData(user);
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
        className={`bg-white rounded-lg p-2 overflow-y-scroll h-[85%] max-h-[60vh] gap-2 flex`}
      >
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-center">Loading...</p>
          </div>
        ) : (
          <div className="grid gap-2 grid-cols-[1fr] h-fit w-full sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr,1fr]">
            {data?.data?.map((item) => (
              <Card
                key={item.id}
                user={item}
                onClick={(user: User) => {
                  setOpen(true);
                  handleModalData(user);
                }}
              />
            ))}
          </div>
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
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        position="center"
      >
        <p>{modalData?.firstName}</p>
      </Modal>
    </div>
  );
};

export default List;
