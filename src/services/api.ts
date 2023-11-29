import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
});

api.interceptors.request.use((config) => {
  config.headers['app-id'] = '655d160e5bd3a1f07ff7a654';
  return config;
});

export type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type getAllUsersResponse = {
  data: User[];
  total: number;
  page: number;
  limit: number;
};

export async function getUsers(
  page: number,
  limit: number
): Promise<getAllUsersResponse> {
  const { data } = await api.get<getAllUsersResponse>(
    `user?page=${page}&limit=${limit}`
  );

  if (!data) {
    throw new Error('Failed to get data :p');
  }

  return data;
}

export type getUserByIdResponse = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
  registerDate: string;
  updatedAt: string;
};

export async function getUserById(id: string) {
  const { data } = await api.get<getUserByIdResponse>(`user/${id}`);

  if (!data) {
    throw new Error('Failed to get data :p');
  }

  return data;
}
