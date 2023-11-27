import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ListPaginationControlProps {
  maxPages?: number;
  page: number;
  disabled?: boolean;
  handlePage: (page: number) => void;
}

const ListPaginationControl = ({
  page = 1,
  maxPages = 8,
  disabled = false,
  handlePage,
}: ListPaginationControlProps) => {
  const next = () => {
    if (page < maxPages - 1) {
      handlePage(page + 1);
    }
  };

  const prev = () => {
    if (page > 0) {
      handlePage(page - 1);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className={`bg-[#4AD697] p-2 w-8 ${page === 0 ? 'opacity-20' : ''}`}
        onClick={prev}
        disabled={disabled || page === 0}
      >
        <FaChevronLeft />
      </button>
      <div className="flex items-center justify-center h-full w-8 px-2">
        <p className="text-xl">{page + 1}</p>
      </div>
      <button
        className={`bg-[#4AD697] p-2 w-8 ${
          page === maxPages - 1 ? 'opacity-20' : ''
        }`}
        onClick={next}
        disabled={disabled || page === maxPages - 1}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ListPaginationControl;
