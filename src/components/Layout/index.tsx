import { useState } from 'react';
import Header from '../Header';
import Sidebar from './Sidebar';

import { FaFolder, FaUsers } from 'react-icons/fa';
import { AiFillControl } from 'react-icons/ai';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Container from './Container';

interface LayoutProps {
  children: React.ReactNode;
}

const itens = [
  {
    name: 'Control Panel',
    icon: <AiFillControl size="22" />,
    navTo: '/control-panel',
  },
  {
    name: 'Products',
    icon: <FaFolder size="22" />,
    navTo: '/products',
  },
  {
    name: 'Members',
    icon: <FaUsers size="22" />,
    navTo: '/members',
  },
];

export type Itens = typeof itens;

const Layout = ({ children }: LayoutProps) => {
  const { width } = useWindowDimensions();
  const [isVisible, setVisible] = useState(width > 640);

  const handleMobileVisible = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="flex w-screen">
      <div
        className={`sm:flex w-16 lg:w-64 transition-all duration-500 ${
          width < 640 && 'fixed top-0 left-0'
        }`}
      >
        <Sidebar
          itens={itens}
          isVisible={isVisible}
          isMobile={width < 640}
          setDisableSidebar={() => {
            setVisible(false);
          }}
          setEnableSidebar={() => {
            setVisible(true);
          }}
        />
      </div>
      <div className="flex flex-col w-full min-h-screen bg-[#f1f1f1]">
        <Header hamburgerOnClick={handleMobileVisible} />
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
