import { BsTelephoneOutbound } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
  return (
    <section className="w-full h-80 relative  bg-primary-green">
      <div className="w-full h-64 absolute bottom-0 grid grid-cols-3">
        <div className="ml-9 flex flex-col justify-between">
          <p>Eco-Tech</p>
          <p className=" mb-5 text-sm">2025 All Rights Reserved</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-bold w-28">Tienda en productos</p>
          <ul className="text-sm mb-10">
            <li className="pb-2">Notebooks</li>
            <li className="pb-2">headsets</li>
            <li className="pb-2">Mices</li>
            <li className="pb-2">WebCam</li>
            <li className="pb-2">Keyboard</li>
          </ul>
        </div>
        <div>
          <div className="w-44 flex  items-center">
            <BsTelephoneOutbound className="mr-3" />
            <p>+00 00 00 00 00 00 </p>
          </div>
          <div className="w-44 flex items-center">
            <TfiEmail className="mr-5" />
            <p>info@info.com</p>
          </div>

          <div className="w-32 text-2xl flex justify-between mt-10 ">
            <FaInstagram />
            <ImPinterest2 />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
