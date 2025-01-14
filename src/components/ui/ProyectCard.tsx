import { MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  url: string,
  technologies: { Icon: React.ComponentType<{ size: number; color: string }>; label: string }[];
};

export default function ProjectCard({ title, description, url, technologies }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between gap-4 w-[30%] min-h-80 p-8 bg-blackTransparent border-[1px] border-grayPrimary rounded-[10px]">
      <Link href={url} target="blank" className="flex items-start gap-4 text-paragraph-lg text-whitePrimary">
        {title}
        <MdOutlineOpenInNew size={15} />
      </Link>
      <p className="text-paragraph-md text-grayPrimary">{description}</p>
      <div className="flex items-start gap-4">
        {technologies.map(({ Icon, label }) => (
          <span
            key={label}
            className="p-2 rounded-[5px] bg-whiteTransparent text-whitePrimary font-MachinaLight"
          >
            <Icon size={25} color="black" title={label} />
          </span>
        ))}
      </div>
    </div>
  );
}
