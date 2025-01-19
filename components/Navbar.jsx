import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroSectionHeight = 420;

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition < heroSectionHeight) {
      setIsVisible(true);
      return;
    }

    if (currentScrollPosition > lastScrollPosition) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-500 ${
        isVisible ? "translate-y-full" : "-translate-y-20"
      } bg-background z-20`}
    >
      <div
        className={`px-[5%] backdrop-blur-sm shadow fixed top-0 bg-background/90 text-pencil w-full flex gap-4 items-center justify-between z-20 py-3 border-b border-b-pencil/10 border-b/50`}
      >
        <Link
          href={"/"}
          className="text-base font-medium flex gap-3 items-center shrink-0 font-yellow-tail"
        >
          {/* <Image
            src={"/pfp.png"}
            height={500}
            width={500}
            className="w-8 aspect-square object-cover rounded-full"
          /> */}
          Saif Anees
        </Link>
        <ul className="flex gap-6 items-center text-sm font-medium tracking-wide font-clash">
          <ScrollLink
            to="works-section"
            onClick={() => scrollToSection("works-section")}
            href={"#"}
            className="max-sm:hidden"
          >
            Works
          </ScrollLink>
          <ScrollLink
            href={"#"}
            to="contact-section"
            onClick={() => scrollToSection("contact-section")}
            className="bg-pencil text-background-brighter px-4 py-2 rounded-full"
          >
            Message Me
          </ScrollLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
