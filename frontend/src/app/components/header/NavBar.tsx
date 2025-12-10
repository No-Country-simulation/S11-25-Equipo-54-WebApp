import { FaHeart, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { IoCart, IoCartOutline } from "react-icons/io5";
import Modal from "../modal/Modal";
import Login from "../login/Login";
import useModal from "@/app/hooks/useModal";

const NavBar = () => {
  const { isOpen, closeModal, openModal } = useModal();

  const handleOpenModal = (): void => {
    openModal();
  };
  return (
    <>
      <div className="flex justify-evenly">
        <div className="size-14 bg-black rounded-full">
          <p className="w-full h-full inline-flex justify-center items-center">
            Logo
          </p>
        </div>
        <nav className="w-[600px] h-12 text-black">
          <ul className="h-full flex justify-evenly items-center">
            <li>Tienda de productos</li>
            <li>Ofertas</li>
            <li>Productos populares</li>
            <li>Circularidad</li>
            <li>Eco-News</li>
          </ul>
        </nav>

        <div className="w-32 h-12 flex justify-around items-center">
          <div>
            <IoCartOutline className="text-2xl text-primary-green" />
          </div>
          <div className="hidden">
            <IoCart className="text-2xl text-primary-green" />
          </div>
          <div>
            <FaRegUser
              className="text-[20px] text-primary-green"
              onClick={handleOpenModal}
            />
          </div>
          <div>
            <FaRegHeart className="text-[20px] text-primary-green" />
          </div>
          <div className="hidden">
            <FaHeart className="text-2xl text-primary-green" />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Login />
      </Modal>
    </>
  );
};
export default NavBar;
