import { useState } from 'react';
import List from '../../../components/List';
import { UserResponse, getUsers } from '../../../services/api';

const ListMembers = () => {
  const [data, setData] = useState<UserResponse>();
  const [loading, setLoading] = useState(false);

  const fetch = async (page: number, limit: number) => {
    setLoading(true);
    const response = await getUsers(page, limit);
    setData(response);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-1xl md:text-4xl">Members</h1>
      <List data={data} loading={loading} fetch={fetch} />
    </>
  );
};

export default ListMembers;
