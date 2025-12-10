import { ReactNode } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

type Event = React.MouseEvent<HTMLDivElement>;

const Modal = ({ children, isOpen, closeModal }: Props) => {
  const handleCloseModal = () => {
    closeModal();
  };

  const handleStopPropagation = (e: Event) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={`w-full h-dvh bg-black/80 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 ${
          !isOpen ? "hidden" : ""
        }`}
        onClick={handleCloseModal}>
        <div className="w-2xl h-96 relative " onClick={handleStopPropagation}>
          <span className="absolute top-0 right-0 text-5xl">
            <IoCloseCircleOutline onClick={handleCloseModal} />
          </span>
          {children}
        </div>
      </div>
    </>
  );
};
export default Modal;
