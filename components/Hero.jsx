"use client";

import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";
import {
  AppWindow,
  AppWindowMac,
  Circle,
  CircleDashed,
  CircleDotDashed,
  Hexagon,
  Paintbrush,
  Squircle,
  View,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollY = window?.scrollY;
    setRotation(scrollY * 0.5);
  };

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 640 ? 0.8 : 1.4);
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
      className={`h-screen max-sm:h-[85vh] overflow-y-hidden relative top-0 overflow-x-hidden bg-pencil-darker text-background transition-all flex flex-col justify-between items-center gap-5 max-sm:gap-4 w-full lg:overflow-hidden`}
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
        <div className="max-sm:order-1 mt-8 max-sm:mt-0">
          <>
            <motion.h3
              className={`font-yellow-tail text-emerald-400 leading-none drop-shadow-xl pl-1 text-xl font-medium flex justify-start max-sm:justify-cente items-center text-left`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              hello, I&apos;m Sayf.
            </motion.h3>
          </>
          <div className="text-4xl">
            <motion.h1
              className="pt-2 pb-4  font-semibold drop-shadow-lg lg:text-nowrap leading-none text-background/95"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              VISUAL DESIGNER
            </motion.h1>
          </div>
          <p className="text-base text-background/90 text-cente sm:text-start max-w-xl leading-normal font-normal">
            I&apos;m a designer and developer passionate about creativity.
          </p>
        </div>
        {/* categories-fan */}
        {/* <motion.div
          className="lg:ml-20 text-sm flex items-center justify-center max-sm:absolute top-[36%] max-sm:brightness-75 right-0 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all cursor-default md:mt-9"
          initial="hidden"
          animate={"visible"}
          variants={fanVariants}
          transition={{ duration: 0.5 }}
          style={{ scale }}
        >
          <div
            className="relative flex flex-nowrap items-center justify-center gap-2 text-nowrap transition-all ease-in-out duration-500"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-background/80">
              <Hexagon size={30} strokeWidth={1.8} />
            </div>
            <span className="absolute left-[22px] rotate-0 px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-green-200/75 border-l-4 border-l-green-500/80 w-28 flex justify-center shadow-xl shadow-green-500/15 rounded">
              <span className="max-sm:rotate-180">User Experience</span>
            </span>
            <span className="absolute bottom-[55px] -left-[17px] -rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-amber-200/75 border-l-4 border-l-amber-500/80 w-28 flex justify-center shadow-xl shadow-yellow-500/15 rounded">
              <span className="max-sm:rotate-180">Brand Design</span>
            </span>
            <span className="absolute -right-[17px] bottom-[55px] rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-red-200/75 border-r-4 border-r-red-500/80 w-28 flex justify-center shadow-xl shadow-red-500/15 rounded">
              Book Covers
            </span>
            <span className="absolute right-[22px] rotate-0 px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-pink-200/75 border-r-4 border-r-pink-500/80 w-28 flex justify-center shadow-xl shadow-red-500/15 rounded">
              Illustration
            </span>
            <span className="absolute -right-[17px] top-14 -rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-violet-200/75 border-r-4 border-r-violet-500/80 w-28 flex justify-center shadow-xl shadow-violet-500/15 rounded">
              2D Art
            </span>
            <span className="absolute -left-[17px] top-14 rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-sky-200/75 border-l-4 border-l-sky-500/80 w-28 flex justify-center shadow-xl shadow-pink-500/15 rounded">
              <span className="max-sm:rotate-180">UI Interface</span>
            </span>
          </div>
        </motion.div> */}
        {/* swatch */}
        <div className="mt-40 -mr-40 max-sm:hidden">
          <motion.div
            className="lg:ml-20 text-sm flex items-center justify-center max-sm:absolute top-[36%] max-sm:brightness-75 right-0 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all cursor-default md:mt-9"
            style={{ scale }}
          >
            <div
              className="relative flex flex-nowrap items-center justify-center gap-2 text-nowrap transition-all ease-in-out duration-300"
              style={{ transform: `rotate(${rotation * 0.1}deg)` }}
            >
              <div className="h-8 w-8 absolute -top-[15px] -left-[1px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-pencil-darker z-10">
                <Circle
                  size={10}
                  strokeWidth={2}
                  className="fill-pencil-darker"
                />
              </div>
              {/* <motion.span
                className="absolute bottom-[50px] -right-[63px] px-5 py-1.5 text-xs font-medium max-sm:py-1.5 text-pencil bg-amber-200 pr-12 w-32 flex justify-center shadow-xl shadow-amber-500/15 rounded rounded-r-2xl border-[1px] border-pencil/80"
                initial={{ rotate: "0deg", right: "-8px", bottom: "0px" }}
                animate={{ rotate: "90deg", right: "-63px", bottom: "50px" }}
                transition={{ duration: 0.8 }}
              >
                <span className="max-sm:rotate-180">Experiences</span>
              </motion.span> */}
              <motion.span
                className="items-center gap-1.5 absolute bottom-9 -right-[60px] rotate-[45deg] pl-6 pr-14 py-1.5 text-xs font-medium max-sm:py-1.5 text-pencil bg-yellow-200 w-32 flex justify-center shadow-lg shadow-yellow-500/10 rounded rounded-r-2xl border-[1px] border-pencil/80"
                initial={{
                  rotate: "45deg",
                  right: "-28px",
                  bottom: "36px",
                  opacity: 0,
                }}
                animate={{
                  rotate: "90deg",
                  right: "-63px",
                  bottom: "50px",
                  opacity: "100%",
                }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <View className="shrink-0" size={10} />
                Experiences
              </motion.span>
              <motion.span
                className="items-center gap-1.5 absolute bottom-9 -right-[28px] rotate-[45deg] pl-6 pr-14 py-1.5 text-xs font-medium max-sm:py-1.5 text-pencil bg-blue-200 w-32 flex justify-center shadow-lg shadow-blue-500/10 rounded rounded-r-2xl border-[1px] border-pencil/80"
                initial={{
                  rotate: "0deg",
                  right: "-10px",
                  bottom: "0px",
                  opacity: 0,
                }}
                animate={{
                  rotate: "45deg",
                  right: "-28px",
                  bottom: "36px",
                  opacity: "100%",
                }}
                transition={{ duration: 0.8 }}
              >
                <AppWindowMac className="shrink-0" size={10} />
                Interfaces
              </motion.span>
              <motion.span
                className="items-center gap-1.5 absolute bottom-0 -right-[14px] rotate-0 pl-6 pr-14 py-1.5 text-xs font-medium max-sm:py-1.5 text-pencil bg-green-200 w-32 flex justify-center shadow-lg shadow-green-500/10 rounded rounded-r-2xl border-[1px] border-pencil/80"
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "0deg" }}
                transition={{ duration: 0.8 }}
              >
                <Paintbrush className="shrink-0" size={10} />
                Branding
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full absolute bottom-0">
        <Slider />
      </div>
    </div>
  );
}
