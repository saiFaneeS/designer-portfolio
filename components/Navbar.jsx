import { Instagram } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useRouter } from "next/router";

const Navbar = () => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroSectionHeight = 420;
  const router = useRouter();

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
    if (router.pathname !== "/") {
      router.push(`/?scrollTo=${sectionId}`).then(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -50,
        });
      });
    } else {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  };

  useEffect(() => {
    const { scrollTo } = router.query;
    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  }, [router.query]);

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-500 ${
        isVisible ? "translate-y-full" : "-translate-y-20"
      } bg-background z-30`}
    >
      <div
        className={`px-[5%] fixed top-0 bg-background text-pencil w-full flex gap-4 items-center justify-between z-20 py-3 border-b border-b-pencil/10 border-b/50`}
      >
        <Link
          href={"/"}
          className="text-lg font-medium flex gap-3 items-center shrink-0 font-yellow-tail"
        >
          Sayf Anees
        </Link>
        <ul className="flex gap-8 max-sm:gap-4 items-center text-sm font-medium tracking-wide font-clash">
          <ScrollLink
            to="works-section"
            onClick={() => scrollToSection("works-section")}
            href={"#"}
            className="max-sm:hidden mr-2 hover:text-pencil/80"
          >
            Works
          </ScrollLink>
          <ScrollLink
            href={"#"}
            to="contact-section"
            onClick={() => scrollToSection("contact-section")}
            className="bg-pencil text-background-brighter/95 flex items-center gap-2 px-2.5 pr-3 py-2 rounded-sm hover:bg-pencil/80 hover:text-background/90 transition-all"
          >
            Message Me
          </ScrollLink>
          {/* <Link
            href={"https://www.instagram.com/sayfogram"}
            target="_blank"
            className="bg-pencil text-background-brighter/95 flex items-center gap-2 px-2.5 pr-3 py-2 rounded-sm hover:bg-pencil/80 hover:text-background/90 transition-all"
          >
            <Instagram size={20} /> Instagram
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
