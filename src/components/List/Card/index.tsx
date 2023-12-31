import { IoMdEye } from 'react-icons/io';
import { User } from '../../../services/api';
import titleSwitch from '../../../utils/titleSwitch';
interface CardProps {
  user: User;
  onClick?: (user: User) => void;
}

const Card = ({ user, onClick }: CardProps) => {
  const name = `${user.firstName} ${user.lastName}`;

  const title = titleSwitch(user.title);

  return (
    <div className="flex flex-col w-auto h-fit p-4 items-center border-b-2 rounded-md border-[#f1f1f1]">
      <div className="flex flex-row">
        <div className="p-2">
          <img
            src={user.picture}
            alt="avatar"
            className="rounded-full min-w-[72px] min-h-[72px]"
          />
        </div>
        <div className="flex flex-col items-start p-2">
          <div className="flex flex-row justify-between items-baseline w-full">
            <p className="text-left text-sm">{title}</p>

            <button
              className="text-gray-400 p-1"
              onClick={() => {
                onClick?.(user);
              }}
            >
              <IoMdEye size="20" />
            </button>
          </div>
          <p className="text-left text-base">{name}</p>
          <p className="text-[12px] text-[#4AD697] break-all">{user.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
