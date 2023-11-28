/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  open: boolean;
  position?: 'right' | 'left' | 'top' | 'bottom' | 'center';
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, position, onClose, children }: ModalProps) => {
  return (
    open && (
      <div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50`}
          onClick={onClose}
        ></div>
        <div
          className={`fixed w-auto bg-white p-4 rounded-md shadow-2xl z-50
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
          <div className="flex justify-end">
            <button onClick={onClose}>
              <IoClose size="24" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
