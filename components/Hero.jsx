"use client";

import { useNavbar } from "@/context/Navbar";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { TrustIndicators } from "./TrustIndicators";
import Slider from "./Slider";
import { motion } from "framer-motion";

export default function Hero() {
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setPageChanged(false);

    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, [setPageChanged]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Animation variants for sliding in from the top
  const titleVariants = {
    hidden: { opacity: 0, y: -20 }, // Start off-screen above
    visible: { opacity: 1, y: 0 }, // End position
  };

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get the current scroll position
    setRotation(scrollY * 0.2); // Adjust the multiplier to control the rotation speed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation variants for loading
  const fanVariants = {
    hidden: { rotate: "-180deg" }, 
    visible: { rotate: "0deg" }, 
  };

  return (
    <div
      className={`h-screen relative top-0 overflow-x-hidden bg-gradient-to-t from-pencil-darker to-pencil text-background transition-all flex flex-col justify-between items-center gap-5 max-sm:gap-4 w-full lg:overflow-hidden`}
    >
      <div className="fixed px-[5%] grid grid-cols-2 max-sm:grid-cols-1 top-0 lg:text-5xl text-4xl w-full font-medium leading-none pb-24 h-full items-center justify-center">
        <div>
          <>
            <motion.h1
              className={`leading-none sm:pl-6 md:pl-8 lg:pl-12 lg:text-3xl text-2xl -mb-7 max-lg:-mb-5 font-clash font-medium flex justify-start max-sm:justify-center items-center text-left`}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              transition={{ duration: 0.5 }}
            >
              An All In One
            </motion.h1>
          </>
          <div>
            <motion.h1
              className="font-yellow-tail pb-4 tracking-wide px-2 text-nowrap leading-none max-sm:text-center max-sm:mt-1 max-sm:break-words text-emerald-500"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              transition={{ duration: 0.5 }}
            >
              Visual Storyteller
            </motion.h1>
          </div>
          <p className="text-base text-background/90 text-center sm:text-start max-w-xl px-2 md:pl-3 leading-normal">
            I&apos;m Saif, a designer and developer passionate about creativity.
          </p>
        </div>
        {/* categories-fan */}
        <motion.div
          className="mb-10 text-sm flex items-center justify-center max-xl:scale-95 max-lg:scale-90 max-md:scale-75 max-sm:scale-100 max-sm:absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 max-sm:opacity-20 transition-all cursor-default"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fanVariants}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative flex flex-nowrap items-center justify-center gap-2 text-nowrap"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <span className="absolute left-[22px] rotate-0 px-3 py-1 text-xs font-medium text-pencil bg-green-200/75 border-l-4 border-l-green-500/80 w-28 flex justify-center">
              Branding
            </span>
            <span className="absolute bottom-[55px] -left-[17px] -rotate-[60deg] px-3 py-1 text-xs font-medium text-pencil bg-yellow-200/75 border-l-4 border-l-yellow-500/80 w-28 flex justify-center">
              Art
            </span>
            <span className="absolute -right-[17px] bottom-[55px] rotate-[60deg] px-3 py-1 text-xs font-medium text-pencil bg-red-200/75 border-r-4 border-r-red-500/80 w-28 flex justify-center">
              Animations
            </span>
            <span className="absolute right-[22px] rotate-0 px-3 py-1 text-xs font-medium text-pencil bg-red-200/75 border-r-4 border-r-red-500/80 w-28 flex justify-center">
              Motion Graphics
            </span>
            <span className="absolute -right-[17px] top-14 -rotate-[60deg] px-3 py-1 text-xs font-medium text-pencil bg-violet-200/75 border-r-4 border-r-violet-500/80 w-28 flex justify-center">
              Video
            </span>
            <span className="absolute -left-[17px] top-14 rotate-[60deg] px-3 py-1 text-xs font-medium text-pencil bg-blue-200/75 border-l-4 border-l-blue-500/80 w-28 flex justify-center">
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
