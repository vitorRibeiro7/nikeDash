import { useCallback, useEffect, useState } from 'react';
import List from '../../../components/List';
import {
  getAllUsersResponse,
  getUserByIdResponse,
  getUsers,
  getUserById,
} from '../../../services/api';
import { useQuery } from 'react-query';
import { ListParams } from '../../../types/list';

const ListMembers = () => {
  const [params, setParams] = useState({
    page: 0,
    limit: 10,
    search: '',
  });

  useEffect(() => {
    localStorage.setItem('active', 'Members');
  }, []);

  const getAllUsersQuery = useQuery<getAllUsersResponse>(
    'getAllUsers',
    () => getUsers(params.page, params.limit),
    {
      staleTime: 1000 * 60 * 1,
      cacheTime: 10,
    }
  );

  const getUserByIdQuery = useQuery<getUserByIdResponse>(
    'getUserById',
    () => getUserById(params.search),
    {
      staleTime: Infinity,
      cacheTime: 10,
    }
  );

  useEffect(() => {
    getAllUsersQuery.refetch();
  }, [params.page]);

  const maxPages =
    params.search == '' && getAllUsersQuery.data
      ? Math.ceil(getAllUsersQuery.data?.total / params.limit)
      : 1;

  useEffect(() => {
    if (params.page > maxPages) {
      setParams({ ...params, page: maxPages - 1 });
    }

    getAllUsersQuery.refetch?.();
  }, [params.limit]);

  const handleParams = useCallback(
    (newParams: ListParams) => {
      setParams({ ...params, ...newParams });
    },
    [params]
  );

  useEffect(() => {
    if (params.search !== '' && params.search.length >= 24) {
      getUserByIdQuery.refetch?.();
      setParams({ ...params, page: 0 });
    }

    if (params.search === '') {
      getAllUsersQuery.refetch?.();
    }
  }, [params.search]);

  return (
    <>
      <h1 className="text-2xl md:text-4xl">Members</h1>
      <List
        data={
          !(params.search !== '' && params.search.length <= 24)
            ? getAllUsersQuery.data
            : {
                data: [
                  {
                    id: getUserByIdQuery.data?.id ?? '',
                    title: getUserByIdQuery.data?.title ?? '',
                    firstName: getUserByIdQuery.data?.firstName ?? '',
                    lastName: getUserByIdQuery.data?.lastName ?? '',
                    picture: getUserByIdQuery.data?.picture ?? '',
                  },
                ],
                total: 1,
                page: 0,
                limit: 1,
              }
        }
        params={params}
        maxPages={maxPages}
        loading={
          getAllUsersQuery.isLoading ||
          getAllUsersQuery.isFetching ||
          getUserByIdQuery.isLoading ||
          getUserByIdQuery.isFetching ||
          (params.search.length < 24 && params.search.length > 0)
        }
        handleParams={handleParams}
        error={getUserByIdQuery.isError && params.search.length >= 24}
      />
    </>
  );
};

export default ListMembers;
