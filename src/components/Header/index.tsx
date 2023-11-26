import UserDropdown from './UserDropdown';
import NikeLogo from '../../assets/logos/nike.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { GiHamburgerMenu } from 'react-icons/gi';

interface HeaderProps {
  hamburgerOnClick?: () => void;
}

const Header = ({ hamburgerOnClick }: HeaderProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className="bg-white w-auto grid grid-cols-3 items-center px-4 py-4 shadow-1xl">
      <div className="flex items-center justify-start">
        {width > 640 ? (
          <h1 className="font-bold">ADMIN</h1>
        ) : (
          <button onClick={hamburgerOnClick}>
            <GiHamburgerMenu size="24" />
          </button>
        )}
      </div>
      <div className="flex items-center justify-center">
        <img src={NikeLogo} alt="Nike Logo" className="sm:hidden w-12" />
      </div>
      <div className="flex items-center justify-end">
        <UserDropdown />
      </div>
    </div>
  );
};

export default Header;
