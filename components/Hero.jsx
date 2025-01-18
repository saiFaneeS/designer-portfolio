"use client";

import { useNavbar } from "@/context/Navbar";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { TrustIndicators } from "./TrustIndicators";
import Slider from "./Slider";

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

  return (
    <div
      className={`h-screen relative top-0 overflow-x-hidden bg-pencil text-background max-sm:h-[88vh] flex flex-col justify-between gap-5 max-sm:gap-4 w-full lg:overflow-hidden lg:h-screen ${
        isActive ? "slide-out-top" : "slide-in-bottom"
      } ${pageChanged ? "hidden" : ""}`}
    >
      <div className="container fixed top-0 lg:text-5xl text-4xl w-full font-medium leading-none pb-24 h-full flex flex-col items-center justify-center">
        <div className="">
          <h1
            className={`leading-none lg:text-3xl text-2xl -mb-7 max-lg:-mb-5 font-clash font-medium flex break-words justify-start items-center text-left text-slide-in-bottom`}
          >
            An All In One
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="font-yellow-tail pb-4 tracking-wide px-2 text-nowrap leading-none max-sm:text-center max-sm:mt-1 text-slide-in-bottom max-sm:break-words text-emerald-500">
            Visual Storyteller
          </h1>
        </div>
        <p className="text-base text-background/80 text-center max-w-xl px-6 leading-relaxed">
          I&apos;m Saif, a designer and developer passionate about creativity.
        </p>
        <div className="flex mt-10 max-w-lg flex-nowrap items-center justify-center gap-4 text-sm animate-scroll whitespace-nowrap">
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Branding
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Art
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Animations
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Web & Apps
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Motion Graphics
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Branding
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Art
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Animations
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Web & Apps
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Motion Graphics
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Branding
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Art
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Animations
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Web & Apps
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Motion Graphics
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Branding
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Art
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Animations
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Web & Apps
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Motion Graphics
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Branding
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Art
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Animations
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Web & Apps
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Motion Graphics
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Branding
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Art
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Animations
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Web & Apps
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Motion Graphics
          </span>
          <span className="px-3 py-1 text-xs font-medium text-background bg-background/5 rounded-full">
            Branding
          </span>
        </div>
      </div>

      <div className="absolute bottom-0">
        <Slider />
      </div>
    </div>
  );
}
