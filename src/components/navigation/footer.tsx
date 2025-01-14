"use client"

import { useState } from "react";
import { useEffect } from "react";

import Button from "../ui/button";


export default function Footer() {

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const buenosAiresTime = new Date().toLocaleTimeString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(buenosAiresTime);
    };

    updateTime(); // Llama una vez al montar el componente
    const intervalId = setInterval(updateTime, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);



  return (
    <div className="relative flex items-center justify-between w-full h-14 bg-blackTransparent border-[1px] border-grayPrimary rounded-b-[5px]">
      <div className="flex items-center justify-center w-[calc(3.5rem-1px)] h-full border-r-[1px] rounded-bl-[5px] border-grayPrimary font-MachinaRegular bg-colorPrimary">
        AI
      </div>
      <div className="flex gap-8 absolute left-1/2 transform -translate-x-1/2">
        <p className="text-whitePrimary font-MachinaRegular text-paragraph-lg mt-2">
          Buenos Aires
        </p>
        <div className="text-grayPrimary font-MachinaRegular text-paragraph-lg mt-2">
          <p>{time || "Cargando hora..."}</p>
        </div>
      </div>
      <Button name="Contact" />
    </div>

  );
}
