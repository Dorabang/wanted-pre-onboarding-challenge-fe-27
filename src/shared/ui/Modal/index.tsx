import { ModalContext, useModalContext } from './useModal';

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ id, isOpen, onClose, children }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ isOpen, onClose, id }}>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <div
            className="relative z-50 w-full max-w-md rounded-lg bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

interface HeaderProps {
  title: string;
  onClose?: () => void; // Additional side effects when closing
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, onClose, className = '' }) => {
  const { onClose: contextOnClose } = useModalContext();

  const handleClose = () => {
    onClose?.();
    contextOnClose();
  };

  return (
    <div
      className={`flex items-center justify-between border-b border-gray-200 px-4 py-3 ${className}`}
    >
      <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      <button
        onClick={handleClose}
        className="text-gray-400 hover:text-gray-500 focus:outline-none"
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body: React.FC<BodyProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`max-h-[calc(100vh-160px)] overflow-y-auto p-4 ${className}`}
    >
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;

export default Modal;
