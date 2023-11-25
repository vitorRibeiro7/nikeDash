import { FaFolder, FaUsers } from 'react-icons/fa';
import { AiFillControl } from 'react-icons/ai';
import NikeLogo from '../../assets/logos/nike.svg';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const itens = [
  {
    name: 'Control Panel',
    icon: <AiFillControl size="22" />,
    navTo: '',
  },
  {
    name: 'Products',
    icon: <FaFolder size="22" />,
    navTo: '',
  },
  {
    name: 'Members',
    icon: <FaUsers size="22" />,
    navTo: '/members',
  },
];

const Sidebar = () => {
  const [active, setActive] = useState('Members');
  const navigate = useNavigate();

  return (
    <div className="w-16 lg:w-64 bg-white h-full overflow-y-auto shadow-2xl min-h-screen z-50 duration-500">
      <div className="flex items-center justify-center mt-8 w-fill h-32 p-1">
        <img src={NikeLogo} alt="Nike Logo" className="w-24" />
      </div>
      <div className="">
        <div className="mt-6">
          {itens.map((item, index) => (
            <button
              key={index}
              className={`flex items-center pl-5 py-3 transition-all duration-300 hover:bg-gray-200 cursor-pointer min-h-[52px] w-full border-l-4 ${
                active === item.name && ' border-[#4AD697]'
              }`}
              onClick={() => {
                setActive('Members'); // item.name
                navigate('/members'); // item.navTo
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
                } hidden lg:block text-xl whitespace-pre overflow-hidden transition-all duration-1000 active:text-[#ff2f2f]`}
              >
                {item.name}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
