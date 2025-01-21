"use client";

import { useNavbar } from "@/context/Navbar";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { TrustIndicators } from "./TrustIndicators";
import Slider from "./Slider";
import { motion } from "framer-motion";
import {
  Codepen,
  Hexagon,
  Package2,
  PackageOpen,
  Pentagon,
} from "lucide-react";
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
      setScale(window.innerWidth < 640 ? 0.4 : 1);
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
      className={`h-screen max-sm:h-[90vh] relative top-0 overflow-x-hidden bg-pencil-darker text-background transition-all flex flex-col justify-between items-center gap-5 max-sm:gap-4 w-full lg:overflow-hidden`}
    >
      <div className="h-full w-full fixed -z-0 top-0 left-0 opacity-10">
        <Image
          src={"/paper.avif"}
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="fixed px-[5%] grid grid-cols-2 max-sm:grid-cols-1 top-0 lg:text-5xl text-4xl w-full font-medium leading-none pb-24 h-full items-center justify-center">
        <div className="max-sm:order-1 mt-8">
          <>
            <motion.h1
              className={`leading-none sm:pl-4 drop-shadow-xl md:pl-6 lg:pl-8 lg:text-3xl text-2xl -mb-7 max-lg:-mb-5 font-clash font-medium flex justify-start max-sm:justify-center items-center text-left`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              An All In One
            </motion.h1>
          </>
          <div>
            <motion.h1
              className="font-yellow-tail pb-4 tracking-wide drop-shadow-lg px-2 text-nowrap leading-none max-sm:text-center max-sm:mt-1 max-sm:break-words text-emerald-400"
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
          <p className="text-base text-background/90 text-center sm:text-start max-w-xl px-2 md:pl-4 lg:pl-5 leading-normal font-normal">
            I&apos;m Saif, a designer and developer passionate about creativity.
          </p>
        </div>
        {/* categories-fan */}
        <motion.div
          className="lg:ml-20 text-sm flex items-center justify-center max-sm:absolute top-[32%] max-sm:brightness-90 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all cursor-default"
          initial="hidden"
          animate={"visible"}
          variants={fanVariants}
          transition={{ duration: 0.5 }}
          style={{ scale }}
        >
          <div
            className="relative flex flex-nowrap items-center justify-center gap-2 text-nowrap transition-all"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-background/80">
              <Hexagon size={30} strokeWidth={1.8} />
            </div>
            <span className="absolute left-[22px] rotate-0 px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-green-200/75 border-l-4 border-l-green-500/80 w-28 flex justify-center shadow-xl shadow-green-500/15 rounded ">
              Branding
            </span>
            <span className="absolute bottom-[55px] -left-[17px] -rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-amber-200/75 border-l-4 border-l-amber-500/80 w-28 flex justify-center shadow-xl shadow-yellow-500/15 rounded ">
              Art
            </span>
            <span className="absolute -right-[17px] bottom-[55px] rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-red-200/75 border-r-4 border-r-red-500/80 w-28 flex justify-center shadow-xl shadow-red-500/15 rounded ">
              Animations
            </span>
            <span className="absolute right-[22px] rotate-0 px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-pink-200/75 border-r-4 border-r-pink-500/80 w-28 flex justify-center shadow-xl shadow-red-500/15 rounded ">
              Social Media
            </span>
            <span className="absolute -right-[17px] top-14 -rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-violet-200/75 border-r-4 border-r-violet-500/80 w-28 flex justify-center shadow-xl shadow-violet-500/15 rounded ">
              Motion Graphics
            </span>
            <span className="absolute -left-[17px] top-14 rotate-[60deg] px-3 py-1 text-xs font-medium max-sm:py-1.5 text-pencil bg-sky-200/75 border-l-4 border-l-sky-500/80 w-28 flex justify-center shadow-xl shadow-pink-500/15 rounded ">
              Web/Apps
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
