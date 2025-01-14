"use client";

import { useState } from "react";

import Button from "../ui/button";

import { FaRegSquare, FaXmark } from "react-icons/fa6";
import { GoHorizontalRule } from "react-icons/go";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiNextjsFill } from "react-icons/ri";
import { SiGreensock } from "react-icons/si";

export default function About() {
  const [isOpen, setOpen] = useState([
    { id: 1, state: true },
    { id: 2, state: false },
    { id: 3, state: false },
    { id: 4, state: false },
    { id: 5, state: false },
    { id: 6, state: false },
    { id: 7, state: false },
  ]);

  function abrir(id: number) {
    setOpen(
      isOpen.map((element) =>
        element.id == id
          ? { ...element, state: true }
          : { ...element, state: false }
      )
    );
    console.log(isOpen);
  }

  return (
    <div className="flex flex-col items-center gap-12 w-full px-[7%] mt-[150px] overflow-hidden">
      <h1 className="font-MachinaRegular text-whitePrimary text-subtitle-lg mb-[15px]">
        About <span className="text-colorPrimary">me</span>
      </h1>
      <div className="text-white">
        Acá irian los cosos para abrirlos y cerrarlos
      </div>

      <div className="grid grid-cols-4 grid-rows-3 w-[90%] h-[600px] gap-4">
        <div
          className={`bg-blackTransparent ${
            isOpen[0].state
              ? "col-start-1 row-start-1 col-span-3 row-span-2"
              : "col-span-1 row-span-1"
          } border-[1px] border-grayPrimary rounded-[10px]`}
        >
          <div className="flex items-center justify-end gap-3 p-2 border-b-[1px] border-grayPrimary text-grayPrimary">
            <GoHorizontalRule className="stroke-[2]" />
            <FaRegSquare
              onClick={() => {
                abrir(1);
              }}
              className="stroke-[2]"
            />
            <FaXmark className="text-[22px] stroke-[2]" />
          </div>
          <div className="p-12">
            <p className="text-whitePrimary font-NachinaRegular text-paragraph-lg">
              <span className="text-colorPrimary">Front-End Developer</span> in
              progress, passionate about{" "}
              <span className="text-colorPrimary">creating</span> clean,
              functional, and visually striking{" "}
              <span className="text-colorPrimary">web</span> experiences with{" "}
              <span className="text-colorPrimary">React</span> and{" "}
              <span className="text-colorPrimary">Next.js.</span> I’m driven by
              the challenge of turning complex ideas into simple,{" "}
              <span className="text-colorPrimary">user-friendly</span>{" "}
              solutions. For me, every project is a chance to learn, evolve, and
              bring something meaningful to life.
            </p>
          </div>
          <div className="flex justify-between items-center px-12">
            <div className="flex items-center gap-4">
              <CiLinkedin className="p-2 rounded-[5px] bg-whiteTransparent text-blackPrimary text-[35px]"></CiLinkedin>
              <FaInstagram className="p-2 rounded-[5px] bg-whiteTransparent text-blackPrimary text-[35px]"></FaInstagram>
              <FaWhatsapp className="p-2 rounded-[5px] bg-whiteTransparent text-blackPrimary text-[35px]"></FaWhatsapp>
            </div>
            <Button name="Descargar cv"></Button>
          </div>
        </div>{" "}
        <div
          className={`bg-blackTransparent border-[1px] ${
            isOpen[1].state
              ? "col-start-1 row-start-1 col-end-4 row-end-3"
              : "col-start-4 row-start-1"
          } border-grayPrimary rounded-[10px]`}
        >
          <div className="flex items-center justify-end gap-3 p-2 border-b-[1px] border-grayPrimary text-grayPrimary">
            <GoHorizontalRule className="stroke-[2]" />
            <FaRegSquare
              onClick={() => {
                abrir(2);
              }}
              className="stroke-[2]"
            />
            <FaXmark className="text-[22px] stroke-[2]" />
          </div>
          <div className="flex gap-3 justify-center items-center h-[84%]">
            <FaHtml5 className="p-2 rounded-[5px] text-blackPrimary bg-whiteTransparent text-[45px]" />
            <FaCss3 className="p-2 rounded-[5px] text-blackPrimary bg-whiteTransparent text-[45px]" />
            <FaJs className="p-2 rounded-[5px] text-blackPrimary bg-whiteTransparent text-[45px]" />
            <SiGreensock className="p-2 rounded-[5px] text-blackPrimary bg-whiteTransparent text-[45px]" />
            <FaReact className="p-2 rounded-[5px] text-blackPrimary bg-whiteTransparent text-[45px]" />
            <RiNextjsFill className="p-2 rounded-[5px] text-blackPrimary bg-whiteTransparent text-[45px]" />
          </div>
        </div>{" "}
        <div
          className={`bg-blackTransparent border-[1px] ${
            isOpen[2].state
              ? "col-start-1 row-start-1 col-span-3 row-span-2"
              : "col-start-4 row-start-2"
          } border-grayPrimary rounded-[10px]`}
        >
          <div className="flex items-center justify-end gap-3 p-2 border-b-[1px] border-grayPrimary text-grayPrimary">
            <GoHorizontalRule className="stroke-[2]" />
            <FaRegSquare
              onClick={() => {
                abrir(3);
              }}
              className="stroke-[2]"
            />
            <FaXmark className="text-[22px] stroke-[2]" />
          </div>
          <div>3</div>
        </div>{" "}
        <div
          className={`bg-blackTransparent border-[1px] ${
            isOpen[3].state
              ? "col-start-1 row-start-1 col-span-3 row-span-2"
              : "col-start-1 row-start-3"
          } border-grayPrimary rounded-[10px]`}
        >
          <div className="flex items-center justify-end gap-3 p-2 border-b-[1px] border-grayPrimary text-grayPrimary">
            <GoHorizontalRule className="stroke-[2]" />
            <FaRegSquare
              onClick={() => {
                abrir(4);
              }}
              className="stroke-[2]"
            />
            <FaXmark className="text-[22px] stroke-[2]" />
          </div>
          <div>4</div>
        </div>{" "}
        <div
          className={`bg-blackTransparent border-[1px] ${
            isOpen[4].state
              ? "col-start-1 row-start-1 col-span-3 row-span-2"
              : "col-start-2 row-start-3"
          } border-grayPrimary rounded-[10px]`}
        >
          <div className="flex items-center justify-end gap-3 p-2 border-b-[1px] border-grayPrimary text-grayPrimary">
            <GoHorizontalRule className="stroke-[2]" />
            <FaRegSquare
              onClick={() => {
                abrir(5);
              }}
              className="stroke-[2]"
            />
            <FaXmark className="text-[22px] stroke-[2]" />
          </div>
          <div>5</div>
        </div>{" "}
        <div
          className={`bg-blackTransparent border-[1px] ${
            isOpen[5].state
              ? "col-start-1 row-start-1 col-span-3 row-span-2"
              : "col-start-3 row-start-3"
          } border-grayPrimary rounded-[10px]`}
        >
          <div className="flex items-center justify-end gap-3 p-2 border-b-[1px] border-grayPrimary text-grayPrimary">
            <GoHorizontalRule className="stroke-[2]" />
            <FaRegSquare
              onClick={() => {
                abrir(6);
              }}
              className="stroke-[2]"
            />
            <FaXmark className="text-[22px] stroke-[2]" />
          </div>
          <div>6</div>
        </div>{" "}
        <div
          className={`bg-blackTransparent border-[1px] ${
            isOpen[6].state
              ? "col-start-1 row-start-1 col-span-3 row-span-2"
              : "col-start-4 row-start-3"
          } border-grayPrimary rounded-[10px]`}
        >
          <div className="flex items-center justify-end gap-3 p-2 border-b-[1px] border-grayPrimary text-grayPrimary">
            <GoHorizontalRule className="stroke-[2]" />
            <FaRegSquare
              onClick={() => {
                abrir(7);
              }}
              className="stroke-[2]"
            />
            <FaXmark className="text-[22px] stroke-[2]" />
          </div>
          <div>7</div>
        </div>{" "}
      </div>
    </div>
  );
}
