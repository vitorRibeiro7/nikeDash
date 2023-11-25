import ListMembers from './Pages/Members/List';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Layout>
        <Routes>
          <Route path="members" element={<ListMembers />} />
          <Route path="*" />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
