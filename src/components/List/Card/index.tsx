interface CardProps {
  data: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

const Card = ({ data }: CardProps) => {
  const name = `${data.firstName} ${data.lastName}`;

  let title = '';
  switch (data.title) {
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
    <button className="flex w-auto h-fit p-4 items-center border-b-2 rounded-md border-[#f1f1f1]">
      <div className="p-2">
        <img
          src={data.picture}
          alt="avatar"
          className="rounded-2xl min-w-[72px] min-h-[72px]"
        />
      </div>
      <div className="flex flex-col items-start p-2">
        <p className="text-left text-sm">{title}</p>
        <p className="text-left text-base">{name}</p>
      </div>
    </button>
  );
};

export default Card;
