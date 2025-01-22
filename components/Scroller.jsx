import React, { useEffect, useState } from "react";

const Scroller = ({ scrollText }) => {
  const [scrollLength, setScrollLength] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollLength(scrollY * 0.2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-10 bg-emerald-400 py-1 font-semibold text-lg text-nowrap whitespace-nowrap overflow-x-hidden">
      <div
        className="flex items-center gap-20 max-sm:gap-8 transition-all ease-in-out duration-400"
        style={{ transform: `translateX(-${scrollLength}px)` }}
      >
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
        <span>・{scrollText}</span>
      </div>
    </div>
  );
};

export default Scroller;
