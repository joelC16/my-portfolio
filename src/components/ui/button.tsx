import { GoArrowRight } from "react-icons/go";

export default function Button({ name }: { name: string}) {

  return (

    <div className="flex items-center gap-2 text-center px-6 py-0 mr-5 border-[1px] border-grayPrimary rounded-[5px] text-whitePrimary cursor-pointer">
        <p className="mt-1 font-MachinaRegular text-paragraph-lg">
            {name}
        </p>
        <GoArrowRight />
    </div>

  );
}
