"use client";

import { FaHtml5, FaJs } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { SiGreensock } from "react-icons/si";
import ProjectCard from "../ui/ProyectCard";
import MediaContainer from "../ui/MediaContainer";

const projects = [
  {
    id: 1,
    title: "Neural Genius",
    description:
      "Innovators in artificial intelligence, virtual reality, and metaverse, offering advanced solutions for various industries.",
    url: "https://neuralgenius.ai/",
    image: "/images/imageNeuralGenius.jpg",
    video: "/images/videoNeuralGenius.mp4",
    shadow: "bg-gradient-to-r from-black to-transparent",
    technologies: [
      { Icon: FaHtml5, label: "HTML5" },
      { Icon: MdCss, label: "CSS" },
      { Icon: FaJs, label: "JavaScript" },
      { Icon: SiGreensock, label: "GreenSock" },
    ],
  },
  {
    id: 2,
    title: "Jaque",
    description: "UX/UI Designer creating intuitive and engaging digital experiences across industries.",
    url: "https://jaquelinacordero.com/",
    image: "/images/imageJaque.jpg",
    video: "/images/videoJaque.mp4",
    shadow: "bg-gradient-to-l from-gray-900 to-transparent",
    technologies: [
      { Icon: FaHtml5, label: "HTML5" },
      { Icon: MdCss, label: "CSS" },
      { Icon: FaJs, label: "JavaScript" },
    ],
  },
  {
    id: 3,
    title: "Fynan",
    description: "Innovators in Web3 financing, offering advanced solutions for projects in various industries.",
    url: "https://github.com/joelC16",
    image: "/images/imageFynan.jpg",
    video: "/images/videoFynan.mp4",
    shadow: "bg-gradient-to-r from-black to-transparent",
    technologies: [
      { Icon: FaHtml5, label: "HTML5" },
      { Icon: MdCss, label: "CSS" },
      { Icon: FaJs, label: "JavaScript" },
    ],
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-12 w-full px-[7%] mt-[150px] overflow-hidden">
      <h1 className="font-MachinaRegular text-whitePrimary text-subtitle-lg mb-[15px]">
        Some of my <span className="text-colorPrimary">projects</span>
      </h1>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className="flex items-center gap-10 min-h-[40vh] w-full group"
        >
          {index % 2 === 0 ? (
            <>
              <ProjectCard
                title={project.title}
                description={project.description}
                url={project.url}
                technologies={project.technologies}
              />
              <MediaContainer image={project.image} video={project.video} shadow={project.shadow}/>
            </>
          ) : (
            <>
              <MediaContainer image={project.image} video={project.video} shadow={project.shadow}/>
              <ProjectCard
                title={project.title}
                description={project.description}
                url={project.url}
                technologies={project.technologies}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
