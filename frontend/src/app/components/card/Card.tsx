import Image from "next/image";
import IMG_LENOVO from "../../../../public/category/Lenovo_Idea_Pad_Slim_3_Chromebook_1.png";
import IMG_FOOT from "../../../../public/category/icon-footprint-01.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

interface Props {
  name: string;
}

const Card = ({ name }: Props) => {
  return (
    <div className="w-48 h-[290px] rounded-xl flex flex-col justify-around items-center  bg-navbar-card text-black">
      <figure className="relative">
        <Image src={IMG_LENOVO} alt="Lenovo_Pad_Slim_3" />
        <p className="w-14 h-6 inline-flex items-center justify-center text-sm rounded-sm bg-primary-green text-white absolute top-0 left-3">
          Nuevo
        </p>
        <button>
          <FaRegHeart className="text-2xl absolute top-1 right-2  text-primary-green" />
        </button>
      </figure>
      <div className="w-[177px] h-[30px] flex justify-between">
        <p className="w-[77px] h-5 pl-1 inline-flex items-center   bg-primary-white font-medium">
          {name}
        </p>

        <div className="w-16 h-9  flex justify-around">
          <figure className="w-4 h-8">
            <Image src={IMG_FOOT} alt="footprint" />
          </figure>
          <figure className="w-4 h-8">
            <Image src={IMG_FOOT} alt="footprint" />
          </figure>
          <figure className="w-4 h-8 opacity-50">
            <Image src={IMG_FOOT} alt="footprint" />
          </figure>
        </div>
      </div>
      <hr className="w-11/12  border-b text-button-green " />

      <div className="text-xs">
        <div className="w-[173px] h-8">
          <p>Lenovo Idea Pad Slim 3</p>
          <p>Chromebook 14M868 14&quot;</p>
        </div>
        <div className="w-[173px] h-4 flex justify-end gap-x-6">
          <p className="line-through text-gray-400">-$0000000 </p>
          <p>$825.000,00</p>
        </div>
      </div>
      <div className="w-[173px] h-9 text-xs flex justify-between ">
        <button className="w-16 h-9 rounded-lg bg-button-green">Ver mas</button>
        <button className="w-9 h-9 inline-flex justify-center items-center  rounded-lg bg-button-green ">
          <IoCartOutline className="text-2xl text-primary-green" />
        </button>
      </div>
    </div>
  );
};
export default Card;
