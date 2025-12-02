import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full h-44  flex flex-col bg-header-blue">
      <div className="w-full h-12 mb-4 bg-primary-green">
        <div className="w-11/12 h-12   m-auto flex justify-between items-center ">
          <div className="w-80 flex justify-between items-center">
            <BsTelephoneOutbound />
            <p>+00 00 00 00 00 00 </p>
            <TfiEmail />
            <p>info@info.com</p>
          </div>
          <div className="w-32 text-2xl flex justify-between">
            <FaInstagram />
            <ImPinterest2 />
            <FaXTwitter />
          </div>
        </div>
      </div>
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
            <FaRegUser className="text-[20px] text-primary-green" />
          </div>
          <div>
            <FaRegHeart className="text-[20px] text-primary-green" />
          </div>
          <div className="hidden">
            <FaHeart className="text-2xl text-primary-green" />
          </div>
        </div>
      </div>
      <form className="text-center">
        <label htmlFor="search" className="relative text-black">
          <input
            type="search"
            placeholder="Buscar"
            id="search"
            className="w-96 h-10 px-9 rounded-lg bg-primary-white placeholder:text-black outline-0"
          />
          <IoSearch className="absolute bottom-0 left-3" />
        </label>
      </form>
    </header>
  );
};
export default Header;
