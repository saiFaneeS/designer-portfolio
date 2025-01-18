import { useNavbar } from "@/context/Navbar";
import { ArrowUpRightFromCircle, LayoutGrid, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
  const { isActive, setIsActive, pageChanged, setPageChanged } = useNavbar();
  const [currentTime, setCurrentTime] = useState("");
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    setCurrentTime(formattedTime);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (currentScrollPosition / docHeight) * 100;

      // setScrollUp(currentScrollPosition <= lastScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

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
    <>
      <div
        className={`container backdrop-blur-sm fixed top-0 bg-background/90 text-pencil w-full flex gap-4 items-center justify-between z-20 py-3 border-b border-b-pencil/10 border-b/50`}
      >
        <Link
          href={"/"}
          className="text-base font-medium flex gap-3 items-center shrink-0 font-yellow-tail"
        >
          <Image
            src={"/pfp.png"}
            height={500}
            width={500}
            className="w-8 aspect-square object-cover rounded-full"
          />
          Saif Anees
        </Link>
        {/* <div className="bg-neutral-900 w-full h-4 rounded-full max-md:hidden"></div> */}
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
        {/* <div className="sm:hidden text-lg font-semibold flex gap-4 items-center justify-center">
          <div
            className="cursor-pointer flex leading-none gap-2 hover:bg-emerald-500/10 border border-emerald-500/0 hover:border-emerald-800/10 hover:bg-opacity-50 p-1 rounded transition-all"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu size={24} strokeWidth={1.7} />
          </div>
        </div> */}
      </div>
      <div
        className={`h-screen w-full fixed left-0 border-b border-b-black flex flex-col justify-center px-[25%] py-4 z-10 transition-all delay-75 duration-1000 ${
          isActive ? "top-0" : "top-[-140%]"
        }`}
      >
        <div className="font-semibold flex flex-col text-4xl leading-none mb-8 -ml-9 pt-20 list-none">
          <li
            onClick={() => [
              setIsActive(false),
              path === "/" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-emerald-500`}
          >
            {" "}
            <span className="text-base font-medium mr-2">01</span>HOME
          </li>
          <li
            onClick={() => [
              setIsActive(false),
              path === "/works" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/works");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-emerald-500`}
          >
            <span className="text-base font-medium mr-2">02</span>WORKS
          </li>
          <li
            onClick={() => [
              setIsActive(false),
              path === "/about" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/about");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-emerald-500`}
          >
            <span className="text-base font-medium mr-2">03</span>ABOUT
          </li>
          <li
            onClick={() => [
              setIsActive(false),
              path === "/contact" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/contact");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-emerald-500`}
          >
            <span className="text-base font-medium mr-2">04</span>CONTACT
          </li>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            target="_blank"
            href={"https://github.com/saiFaneeS"}
            className="flex gap-2 items-center text-base font-semibold hover:underline"
          >
            <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
            Github
          </Link>
          <Link
            href={"https://wa.me/+9203283490764"}
            className="flex gap-2 items-center text-base font-semibold hover:underline"
          >
            <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
            Whatsapp
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
