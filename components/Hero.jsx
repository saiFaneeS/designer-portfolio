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
      className={`h-screen overflow-x-hidden bg-pencil text-background max-sm:h-[88vh] flex flex-col justify-between gap-5 max-sm:gap-4 pt-40 absolute w-full lg:overflow-hidden lg:h-screen ${
        isActive ? "slide-out-top" : "slide-in-bottom"
      } ${pageChanged ? "hidden" : ""}`}
    >
      <div className="container text-4xl w-full max-sm:text-4xl pr-4 font-semibold leading-none">
        <div className="">
          <h1
            className={`leading-none font-semibold flex break-words justify-start items-center text-left text-slide-in-bottom`}
          >
            All
            {/* <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-background"></div> */}
            -IN-
            {/* <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-background"></div> */}
            ONE
          </h1>
        </div>
        <div className="overflow-hidden -mr-4">
          <h1 className="leading-none text-slide-in-bottom max-sm:break-words text-emerald-500">
            DESIGNER
          </h1>
        </div>
      </div>

      <div className="container flex w-full gap-6">
        <TrustIndicators />
      </div>

      <Slider />

      {/* <div className="flex flex-nowrap items-center justify-center gap-2 text-sm sm:hidden animate-scroll whitespace-nowrap">
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          Apps
        </span>
      </div> */}
    </div>
  );
}
