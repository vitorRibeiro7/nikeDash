import { AiFillCaretDown } from 'react-icons/ai';

const UserDropdown = () => {
  return (
    <div className="flex md:gap-1 items-center md:hover:bg-zinc-100 rounded-s-full cursor-pointer pr-2">
      <img
        src="https://avatars.githubusercontent.com/u/72838474?v=4"
        alt=""
        className="rounded-full w-10 object-fit"
      />
      <div>
        <h2 className="hidden md:flex text-xl">Vitor Ribeiro</h2>
        <p className="hidden md:flex text-xs">Admin for Members</p>
      </div>
      <AiFillCaretDown size="20" />
    </div>
  );
};

export default UserDropdown;
