import { IoSearch } from "react-icons/io5";
import Contact from "./Contact";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full h-44  flex flex-col bg-header-blue">
      <Contact />
      <NavBar />

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
