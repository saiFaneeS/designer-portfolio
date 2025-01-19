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

  return (
    <div
      className={`h-screen relative top-0 overflow-x-hidden bg-gradient-to-t from-pencil-darker to-pencil text-background transition-all flex flex-col justify-between items-center gap-5 max-sm:gap-4 w-full lg:overflow-hidden`}
    >
      <div className="fixed top-0 lg:text-5xl text-4xl w-full font-medium leading-none pb-24 h-full flex flex-col items-center justify-center">
        <div className="mb-10 text-sm">
          <div className="flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap">
            <span className="px-3 py-1 text-xs font-medium text-pencil bg-green-200/75 border-l-2 border-l-green-500">
              Branding
            </span>
            <span className="px-3 py-1 text-xs font-medium text-pencil bg-yellow-200/75 border-l-2 border-l-yellow-500">
              Art
            </span>
            <span className="px-3 py-1 text-xs font-medium text-pencil bg-red-200/75 border-l-2 border-l-red-500">
              Animations
            </span>
            <span className="max-sm:hidden px-3 py-1 text-xs font-medium text-pencil bg-violet-200/75 border-l-2 border-l-violet-500">
              Motion Graphics
            </span>
            <span className="px-3 py-1 text-xs font-medium text-pencil bg-blue-200/75 border-l-2 border-l-blue-500">
              Web/Apps
            </span>
          </div>
        </div>
        <div className="">
          <motion.h1
            className={`leading-none lg:text-3xl text-2xl -mb-7 max-lg:-mb-5 font-clash font-medium flex break-words justify-start items-center text-left`}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            An All In One
          </motion.h1>
        </div>
        <div className="overflow-hidden">
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
        <p className="text-base text-background/90 text-center max-w-xl px-6 leading-normal">
          I&apos;m Saif, a designer and developer passionate about creativity.
        </p>
      </div>

      <div className="w-full absolute bottom-0">
        <Slider />
      </div>
    </div>
  );
}
