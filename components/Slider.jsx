import { Mail, Pause, Play, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TrustIndicators } from "./TrustIndicators";

const Slider = () => {
  const [paused, setPaused] = useState(false);
  const panel = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const images = [{ id: 1 }, { id: 2 }];

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
              className={`flex gap-16 md:gap-20 animate-scroll max-sm:animate-scroll-faster whitespace-nowrap sm:group-hover:paused ${
                paused && "paused max-sm:paused"
              }`}
            >
              <div>
                <TrustIndicators />
              </div>
              <div className="flex gap-4">
                <div className="h-24 aspect-square rounded-full flex items-center justify-center gap-4 bg-background/10 overflow-hidden p-2 text-pencil">
                  <div className="bg-emerald-400/90 h-full aspect-square grid place-items-center rounded-full">
                    <Trophy className="size-8"/>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center">
                  {/* <h4 className="text-base font-medium leading-none">
                  Welcome !
                </h4> */}
                  {/* <Link
                  href={"/works"}
                  className="px-2 pl-3 py-1 flex gap-2 items-center hover:underline text-xs text-nowrap border border-background/40 bg-background/10 rounded-full text-background"
                >
                  Works
                  <ArrowDown size={14} strokeWidth={1.5} />
                </Link> */}
                </div>
              </div>

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
                  className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400/90 hover:bg-amber-300 text-pencil rounded-full aspect-square h-16 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center h-full w-full group">
                    <Mail className="h-7 w-full" strokeWidth={1.4} />
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
