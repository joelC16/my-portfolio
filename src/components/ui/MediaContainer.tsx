import Image from "next/image";
import { useRef } from "react";

type MediaContainerProps = {
  image: string;
  video: string;
  shadow: string;
};

export default function MediaContainer({ image, video, shadow }: MediaContainerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const resetVideo = (action: "play" | "pause") => {
    if (videoRef.current) {
      if (action === "play") {
        videoRef.current.currentTime = 0;
        setTimeout(() => videoRef.current?.play(), 250);
      } else {
        videoRef.current.pause();
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }, 700);
      }
    }
  };

  return (
    <div
      className="relative flex items-center w-[70%] min-h-80 p-8 border-[1px] border-grayPrimary rounded-[10px] overflow-hidden"
      onMouseEnter={() => resetVideo("play")}
      onMouseLeave={() => resetVideo("pause")}
    >
      <div className="absolute top-0 right-0 w-full h-full -z-10">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="Preview of project"
          className="rounded-[10px] -z-20 group-hover:opacity-0 transition-all duration-1000 ease-out"
        />
        <video
          src={video}
          className="absolute w-[120%] h-[100%] object-cover opacity-0 group-hover:opacity-100 transition-all duration-1000 z-[1000]"
          ref={videoRef}
          muted
          loop
          autoPlay
          aria-label="Project video"
        ></video>
        <div className={`absolute w-[100%] min-w-[300px] h-full rounded-l-[10px] z-50`}></div>
      </div>
    </div>
  );
}
