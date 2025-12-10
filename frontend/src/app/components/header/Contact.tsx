import { BsTelephoneOutbound } from "react-icons/bs";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
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
  );
};
export default Contact;
