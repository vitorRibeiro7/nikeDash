import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    localStorage.setItem('active', 'Home');
  }, []);

  return (
    <div>
      <h1>Welcome to Nike Members Dashboard</h1>
    </div>
  );
};

export default Home;
