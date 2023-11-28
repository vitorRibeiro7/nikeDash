import { useCallback, useEffect, useState } from 'react';
import List from '../../../components/List';
import { UserResponse, getUsers } from '../../../services/api';
import { useQuery } from 'react-query';
import { ListParams } from '../../../types/list';

const ListMembers = () => {
  const [params, setParams] = useState({
    page: 0,
    limit: 10,
  });

  const { data, isLoading, refetch, isFetching } = useQuery<UserResponse>(
    'users',
    () => getUsers(params.page, params.limit),
    { staleTime: 5000, cacheTime: 10 }
  );

  useEffect(() => {
    refetch();
  }, [params.page]);

  const maxPages = data?.total ? Math.ceil(data?.total / params.limit) : 1;

  useEffect(() => {
    if (params.page > maxPages) {
      setParams({ ...params, page: maxPages - 1 });
    }

    refetch?.();
  }, [params.limit]);

  const handleParams = useCallback(
    (newParams: ListParams) => {
      setParams({ ...params, ...newParams });
    },
    [params]
  );

  return (
    <>
      <h1 className="text-2xl md:text-4xl">Members</h1>
      <List
        data={data}
        limit={params.limit}
        page={params.page}
        maxPages={maxPages}
        loading={isLoading || isFetching}
        handleParams={handleParams}
      />
    </>
  );
};

export default ListMembers;
