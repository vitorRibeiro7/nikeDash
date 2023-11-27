import List from '../../../components/List';
import ListHeader from '../../../components/List/ListHeader';

const data = {
  data: [
    {
      id: '60d0fe4f5311236168a109d5',
      title: 'mrs',
      firstName: 'Sibylle',
      lastName: 'Leibold',
      picture: 'https://randomuser.me/api/portraits/med/women/89.jpg',
    },
    {
      id: '60d0fe4f5311236168a109d6',
      title: 'mrs',
      firstName: 'Elisa',
      lastName: 'Lorenzo',
      picture: 'https://randomuser.me/api/portraits/med/women/89.jpg',
    },
    {
      id: '60d0fe4f5311236168a109d7',
      title: 'mr',
      firstName: 'Leevi',
      lastName: 'Savela',
      picture: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    },
    {
      id: '60d0fe4f5311236168a109d8',
      title: 'mrs',
      firstName: 'Karoline',
      lastName: 'Sviggum',
      picture: 'https://randomuser.me/api/portraits/med/women/61.jpg',
    },
    {
      id: '60d0fe4f5311236168a109d9',
      title: 'ms',
      firstName: 'Nuria',
      lastName: 'Leon',
      picture: 'https://randomuser.me/api/portraits/med/women/93.jpg',
    },
    {
      id: '60d0fe4f5311236168a109da',
      title: 'mr',
      firstName: 'Lance',
      lastName: 'Foster',
      picture: 'https://randomuser.me/api/portraits/med/men/13.jpg',
    },
    {
      id: '60d0fe4f5311236168a109db',
      title: 'miss',
      firstName: 'Naomi',
      lastName: 'Rodrigues',
      picture: 'https://randomuser.me/api/portraits/med/women/39.jpg',
    },
    {
      id: '60d0fe4f5311236168a109dc',
      title: 'mr',
      firstName: 'Evan',
      lastName: 'Roux',
      picture: 'https://randomuser.me/api/portraits/med/men/59.jpg',
    },
    {
      id: '60d0fe4f5311236168a109dd',
      title: 'mr',
      firstName: 'Miguel',
      lastName: 'Lima',
      picture: 'https://randomuser.me/api/portraits/med/men/31.jpg',
    },
    {
      id: '60d0fe4f5311236168a109de',
      title: 'miss',
      firstName: 'Bessie',
      lastName: 'Burke',
      picture: 'https://randomuser.me/api/portraits/med/women/72.jpg',
    },
  ],
  total: 98,
  page: 1,
  limit: 10,
};

const ListMembers = () => {
  return (
    <>
      <h1 className="text-1xl md:text-4xl">Members</h1>
      <ListHeader />
      <List data={data.data} limit={data.limit} total={data.total} />
    </>
  );
};

export default ListMembers;
