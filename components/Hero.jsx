"use client";

import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollY = window?.scrollY;
    setRotation(scrollY * 0.2);
  };

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 640 ? 1.1 : 1);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fanVariants = {
    hidden: { opacity: 0, rotate: "-20deg" },
    visible: { opacity: 1, rotate: "0deg" },
  };

  return (
    <div
      className={`h-screen max-sm:h-[90vh] overflow-y-hidden relative top-0 overflow-x-hidden bg-pencil-darker text-background transition-all flex flex-col justify-between items-center gap-5 max-sm:gap-4 w-full lg:overflow-hidden`}
    >
      <div className="h-full w-full fixed -z-0 top-0 left-0 opacity-10 brightness-50 contrast-200 rotate-180">
        <Image
          src={"/paper.avif"}
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="fixed px-[5%] grid grid-cols-2 max-sm:grid-cols-1 top-0 lg:text-5xl text-4xl w-full font-medium leading-none pb-24 h-full items-center justify-center transition-all">
        <div className="max-sm:order-1 mt-8">
          <>
            <motion.h1
              className={`font-yellow-tail leading-none drop-shadow-xl pl-1 lg:text-3xl text-2xl font-medium flex justify-start max-sm:justify-cente items-center text-left`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              All In One
            </motion.h1>
          </>
          <div>
            <motion.h1
              className="pt-2 pb-4 uppercase font-semibold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-3xl drop-shadow-lg md:text-nowrap leading-none max-sm:text-cente max-sm:break-words text-emerald-400"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Visual Storyteller
            </motion.h1>
          </div>
          <p className="text-base text-background/90 text-cente sm:text-start max-w-xl leading-normal font-normal">
            I&apos;m Saif, a designer and developer passionate about creativity.
          </p>
        </div>
        {/* categories-fan */}
        <motion.div
          className="lg:ml-20 text-sm flex items-center justify-center max-sm:absolute top-[36%] max-sm:brightness-75 right-0 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all cursor-default"
          initial="hidden"
          animate={"visible"}
          variants={fanVariants}
          transition={{ duration: 0.5 }}
          style={{ scale }}
        >
          <div
            className="relative flex flex-nowrap items-center justify-center gap-2 text-nowrap transition-all ease-in-out duration-400"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-background/80">
              <Hexagon size={30} strokeWidth={1.8} />
            </div>
            <span className="absolute left-[22px] rotate-0 px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-green-200/75 border-l-4 border-l-green-500/80 w-28 flex justify-center shadow-xl shadow-green-500/15 rounded ">
              Thumbnails
            </span>
            <span className="absolute bottom-[55px] -left-[17px] -rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-amber-200/75 border-l-4 border-l-amber-500/80 w-28 flex justify-center shadow-xl shadow-yellow-500/15 rounded ">
              Brand Design
            </span>
            <span className="absolute -right-[17px] bottom-[55px] rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-red-200/75 border-r-4 border-r-red-500/80 w-28 flex justify-center shadow-xl shadow-red-500/15 rounded ">
              Book Covers
            </span>
            <span className="absolute right-[22px] rotate-0 px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-pink-200/75 border-r-4 border-r-pink-500/80 w-28 flex justify-center shadow-xl shadow-red-500/15 rounded ">
              Illustration
            </span>
            <span className="absolute -right-[17px] top-14 -rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-violet-200/75 border-r-4 border-r-violet-500/80 w-28 flex justify-center shadow-xl shadow-violet-500/15 rounded ">
              2D Animations
            </span>
            <span className="absolute -left-[17px] top-14 rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-sky-200/75 border-l-4 border-l-sky-500/80 w-28 flex justify-center shadow-xl shadow-pink-500/15 rounded ">
              UI Design
            </span>
          </div>
        </motion.div>
      </div>

      <div className="w-full absolute bottom-0">
        <Slider />
      </div>
    </div>
  );
}
