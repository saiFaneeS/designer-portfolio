import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TrustIndicators } from "./TrustIndicators";

const Slider = () => {
  const panel = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const images = [{ id: 1 }, { id: 2 }];

  return (
    <div className="relative flex overflow-hidden items-center max-sm:py-6 py-8 gap-28 border-y border-y-background/20 bg-background/[3%] hover:bg-background/[4%] transition-all group">
      {/* Slider Wrapper */}
      {panel.map((el) => {
        return (
          <div
            key={el.id}
            className="flex gap-20 animate-scroll whitespace-nowrap group-hover:paused"
          >
            <div className="flex gap-4">
              <div className="h-24 aspect-[2.8] rounded-md flex items-center justify-center gap-4 bg-background/10 border border-background/20 overflow-hidden">
                {images.map((el) => {
                  return (
                    <>
                      <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 aspect-video animate-snap-loop">
                        <Image
                          src={"/ohghad-web.png"}
                          height={200}
                          width={200}
                          className="h-full w-full object-cover rounded-md shadow-xl"
                        />
                      </div>
                      <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 aspect-video animate-snap-loop">
                        <Image
                          src={"/msre.png"}
                          height={200}
                          width={200}
                          className="h-full w-full object-cover rounded-md shadow-xl"
                        />
                      </div>
                      <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 aspect-video animate-snap-loop">
                        <Image
                          src={"/mslm.webp"}
                          height={200}
                          width={200}
                          className="h-full w-full object-cover rounded-md shadow-xl"
                        />
                      </div>
                    </>
                  );
                })}
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

            <div className="bg-background/5 p-2 rounded-lg">
              <TrustIndicators />
            </div>

            {/* <div className="flex flex-wrap items-center justify-center gap-2 text-sm min-w-80 max-w-80 max-sm:hidden">
              <span className="px-3 py-1 text-xs font-medium text-background bg-background/10 rounded-full">
                Design
              </span>
              <span className="px-3 py-1 text-xs font-medium text-background bg-background/10 rounded-full">
                Art
              </span>
              <span className="px-3 py-1 text-xs font-medium text-background bg-background/10 rounded-full">
                Video
              </span>
              <span className="px-3 py-1 text-xs font-medium text-background bg-background/10 rounded-full">
                Web
              </span>
              <span className="px-3 py-1 text-xs font-medium text-background bg-background/10 rounded-full">
                Animations
              </span>

              <span className="px-3 py-1 text-xs font-medium text-background bg-emerald-600/40 rounded-full">
                & More
              </span>
            </div> */}

            <div className="relative flex justify-center items-center z-20">
              <svg
                className="w-[90px] h-[90px] animate-rotate rounded-full"
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
                  className="text-[20px] font-medium fill-background"
                  textLength="565"
                  dominantBaseline="middle"
                >
                  <textPath href="#circlePath">
                    {" GET IN TOUCH ・ GET IN TOUCH ・ "}
                  </textPath>
                </text>
              </svg>

              <Link
                href="mailto:saifanees11@gmail.com"
                className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-400 hover:bg-amber-300 text-pencil rounded-full p-4"
              >
                <Mail className="h-7 w-7" strokeWidth={1.2} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
