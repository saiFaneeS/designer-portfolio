import { useNavbar } from "@/context/Navbar";
import { ArrowUpRightFromCircle, LayoutGrid, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const { isActive, setIsActive, pageChanged, setPageChanged } = useNavbar();
  const [currentTime, setCurrentTime] = useState("");

  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    setCurrentTime(formattedTime);
  }, []);

  return (
    <>
      <div
        className={`container backdrop-blur-sm fixed top-0 bg-background text-pencil w-full flex gap-4 items-center justify-between z-20 py-3 border-b border-b-pencil/10 border-b/50`}
      >
        <Link
          href={"/"}
          className="text-base font-medium flex gap-3 items-center shrink-0"
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
        <ul className="flex gap-6 items-center max-sm:hidden">
          <Link href={"#"}>Works</Link>
          <Link
            href={"#"}
            className="bg-pencil text-white px-4 py-2 rounded-md"
          >
            Message Me
          </Link>
        </ul>
        <div className="sm:hidden text-lg font-semibold flex gap-4 items-center justify-center">
          {/* <span>{currentTime}</span> */}
          <div
            className="cursor-pointer flex leading-none gap-2 hover:bg-emerald-500/10 border border-emerald-500/0 hover:border-emerald-800/10 hover:bg-opacity-50 p-1 rounded transition-all"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu size={24} strokeWidth={1.7} />
          </div>
        </div>
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
