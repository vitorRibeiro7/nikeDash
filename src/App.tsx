import { Home, ControlPanel, ListMembers, Products } from './Pages';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className="flex">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="control-panel" element={<ControlPanel />} />
          <Route path="products" element={<Products />} />
          <Route path="members" element={<ListMembers />} />
          <Route path="*" />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
