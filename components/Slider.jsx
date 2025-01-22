import {
  Mail,
  Pause,
  Play,
  Trophy,
  Star,
  Heart,
  Paintbrush,
  AppWindowMac,
  Clapperboard,
  FileImage,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { TrustIndicators } from "./TrustIndicators";
import { AnimatePresence, motion } from "framer-motion";

const Slider = () => {
  const [paused, setPaused] = useState(false);
  const panel = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const icons = [Clapperboard, Paintbrush, AppWindowMac, FileImage];
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute -top-12 z-20 w-full flex justify-center items-center">
        {paused ? (
          <Play
            onClick={() => setPaused(!paused)}
            className="bg-background/20 p-1.5 h-8 w-8 hover:scale-105 cursor-pointer rounded backdrop-blur-3xl"
          />
        ) : (
          <Pause
            onClick={() => setPaused(!paused)}
            className="bg-background/20 p-1.5 h-8 w-8 hover:scale-105 cursor-pointer rounded backdrop-blur-3xl"
          />
        )}{" "}
      </div>
      <div
        className={`relative flex items-center max-sm:py-4 py-8 gap-16 md:gap-20 border-t-4 border-t-background/20 backdrop-blur-3xl bg-background/[5%] hover:bg-background/[7%] ${
          paused && "bg-background/[7%]"
        } transition-all group`}
      >
        {panel.map((el) => {
          return (
            <div
              key={el.id}
              className={`flex items-center gap-16 md:gap-20 animate-scroll max-sm:animate-scroll-faster whitespace-nowrap sm:group-hover:paused ${
                paused && "paused max-sm:paused"
              }`}
            >
              <TrustIndicators />
              <div className="h-20 border border-background/20 aspect-square rounded-full flex items-center justify-center gap-4 bg-background/10 overflow-hidden p-2 text-pencil">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={iconIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="bg-pencil text-emerald-300 h-full aspect-square grid place-items-center rounded-full"
                  >
                    {React.createElement(icons[iconIndex], {
                      className: "size-8",
                      strokeWidth: 1.6,
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
              <TrustIndicators />
              <div className="relative flex justify-center items-center z-20">
                <svg
                  className="w-[95px] h-[95px] animate-rotate rounded-full"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
                    />
                  </defs>
                  <text
                    className="text-[18px] font-clash fill-white"
                    textLength="565"
                    dominantBaseline="middle"
                  >
                    <textPath href="#circlePath">
                      MESSAGE ME ・ MESSAGE ME ・ {"-"}
                    </textPath>
                  </text>
                </svg>

                <Link
                  href="mailto:saifanees11@gmail.com"
                  className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 hover:bg-amber-300 text-pencil rounded-full aspect-square h-16 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center h-full w-full group">
                    <Mail className="h-7 w-full" strokeWidth={1.6} />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
