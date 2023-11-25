import Header from '../Header';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-screen">
      <div className="flex w-16 lg:w-64 transition-all duration-500">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full max-h-screen bg-red-500">
        <Header />
        <div className="p-5 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
