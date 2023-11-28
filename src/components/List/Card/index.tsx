import { IoMdEye } from 'react-icons/io';
import { User } from '../../../services/api';
interface CardProps {
  user: User;
  onClick?: (user: User) => void;
}

const Card = ({ user, onClick }: CardProps) => {
  const name = `${user.firstName} ${user.lastName}`;

  let title = '';
  switch (user.title) {
    case 'ms':
      title = 'Ms';
      break;
    case 'mr':
      title = 'Mr';
      break;
    case 'miss':
      title = 'Miss';
      break;
    case 'mrs':
      title = 'Mrs';
      break;
  }

  return (
    <div className="flex flex-col w-auto h-fit p-4 items-center border-b-2 rounded-md border-[#f1f1f1]">
      <div className="flex flex-row">
        <div className="p-2">
          <img
            src={user.picture}
            alt="avatar"
            className="rounded-2xl min-w-[72px] min-h-[72px]"
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
          <p className="text-sm text-[#4AD697] break-all">{user.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
