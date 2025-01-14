import { TbBrandGoogleHome } from "react-icons/tb"; // Si encontras otros icons como estos usalo, ta piola
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { PiSuitcaseBold } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { GrGamepad } from "react-icons/gr";


export default function Sidebar() {
    return (
      <div className="flex flex-none flex-col items-center justify-center h-full w-14 gap-6 border-x-[1px] border-grayPrimary text-grayPrimary">
          <FiHome className="text-[24px]"/>
          <PiSuitcaseBold className="text-[24px]"/>
          <FaRegUser className="text-[24px]"/>
          <FiMail className="text-[24px]"/>
          <GrGamepad className="text-[24px]"/>
      </div>
      
    );
  }
  