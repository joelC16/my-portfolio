import { FaXmark } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";
import { CgArrowsExchangeAltV } from "react-icons/cg";



export default function Navbar() {
    return (
        <div className="relative flex items-center justify-between w-full h-14 bg-blackTransparent border-[1px] border-grayPrimary rounded-t-[5px]">
            <div className="flex items-center justify-center w-[calc(3.5rem-1px)] h-full border-r-[1px] border-grayPrimary font-MachinaRegular"  style={{color: "red"}}>
                <CgArrowsExchangeAltV className="text-[40px] text-colorPrimary" />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <p className="text-whitePrimary font-MachinaRegular text-paragraph-lg mt-2">
                    Joel{" "}
                    <span className="font-MachinaRegular text-colorPrimary">
                        &lt;Cordero&gt;
                    </span>
                </p>
            </div>
            <div className="flex items-center justify-end gap-3 pr-4 text-grayPrimary">
                <GoHorizontalRule className="stroke-[2]"/>
                <FaRegSquare className="stroke-[2]" />
                <FaXmark className="text-[22px] stroke-[2]" />
            </div>
        </div>

    );
}
