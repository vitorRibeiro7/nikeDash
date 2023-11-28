import NikeLogo from '../../assets/logos/nike.svg';
import { useCallback, useEffect, useState } from 'react';

import { IoClose } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';
import { Itens } from '../Layout';

interface SidebarProps {
  itens: Itens;
  isVisible?: boolean;
  isMobile?: boolean;
  setEnableSidebar: () => void;
  setDisableSidebar: () => void;
}

type Item = {
  name: string;
  icon: JSX.Element;
  navTo: string;
};

const Sidebar = ({
  itens,
  isVisible,
  isMobile,
  setDisableSidebar,
  setEnableSidebar,
}: SidebarProps) => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) {
      setEnableSidebar();
    } else {
      setDisableSidebar();
    }
  }, [isMobile]);

  const handleActive = useCallback((item: Item) => {
    localStorage.setItem('active', item.name);
    setActive(item.name);
  }, []);

  useEffect(() => {
    setActive(localStorage.getItem('active') || '');
  }, []);

  return (
    isVisible && (
      <div
        className={`sm:w-16 lg:w-64 bg-white h-full shadow-1xl overflow-clip min-h-screen z-50 transition-all duration-500 ${
          isMobile && isVisible ? 'fixed w-8/12 top-0 left-0' : 'hidden'
        }}`}
      >
        {isMobile && (
          <div className="flex justify-end p-2">
            <button
              onClick={() => {
                setDisableSidebar();
              }}
            >
              <IoClose size="30" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-center mt-2 w-fill h-32 p-1">
          <img src={NikeLogo} alt="Nike Logo" className="w-24" />
        </div>
        <div className="">
          <div className="mt-6">
            {itens.map((item, index) => (
              <button
                key={index}
                className={`flex items-center pl-5 py-3 transition-all duration-500 hover:bg-gray-200 min-h-[52px] w-full border-l-4 ${
                  active === item.name
                    ? ' border-[#4AD697]'
                    : 'border-transparent'
                }`}
                onClick={() => {
                  handleActive(item);
                  navigate(item.navTo);
                  if (isMobile) {
                    setDisableSidebar();
                  }
                }}
              >
                <span
                  className={`${
                    active === item.name ? 'text-[#151515]' : 'text-[#A4A4A4]'
                  }`}
                >
                  {item.icon}{' '}
                </span>
                <h2
                  className={`ml-2 ${
                    active === item.name ? 'text-[#151515]' : 'text-[#A4A4A4]'
                  } ${
                    !isMobile && 'hidden'
                  } lg:block text-xl whitespace-pre overflow-hidden transition-all duration-500`}
                >
                  {item.name}
                </h2>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
