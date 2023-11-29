/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  position?: 'right' | 'left' | 'top' | 'bottom' | 'center';
  isMobile?: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, position, isMobile, onClose }: ModalProps) => {
  return (
    open && (
      <div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50`}
          onClick={onClose}
        ></div>
        <div
          className={`fixed w-auto bg-white p-2 shadow-2xl z-50 ${
            isMobile && 'max-h-[85%] rounded-t-3xl'
          } overflow-hidden
                ${position === 'right' && 'right-0 top-0 h-screen'} 
                ${position === 'left' && 'left-0 top-0 h-screen'} 
                ${position === 'top' && 'top-0 left-0 w-screen'} 
                ${position === 'bottom' && 'bottom-0 left-0 w-full'}
                ${
                  position === 'center' &&
                  'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                }
                `}
        >
          <div className="flex justify-end ">
            <button onClick={onClose}>
              <IoClose size="24" />
            </button>
          </div>
          <div className="h-full overflow-auto pb-5">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
