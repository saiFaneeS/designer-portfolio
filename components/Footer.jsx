import { Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-3 bg-pencil-darker text-background px-[5%]">
      <div className="flex justify-center items-center gap-6">
        {/* <div className="h-[1px] w-full bg-background/60"></div> */}
        <p className="text-sm tracking-wide font-medium font-yellow-tail text-nowrap">
          Saif Anees
        </p>
        {/* <div className="h-[1px] w-full bg-background/60"></div> */}
        {/* <ul className="flex gap-4 items-center">
          <Link href={"/"} className="p-1 rounded-sm">
            <Instagram size={22} strokeWidth={1.8} />
          </Link>
          <Link href={"/"} className="p-1 rounded-sm">
            <MessageCircle size={22} strokeWidth={1.8} />
          </Link>
          <Link href={"/"} className="p-1 rounded-sm">
            <Mail size={22} strokeWidth={1.8} />
          </Link>
        </ul> */}
      </div>
    </div>
  );
};

export default Footer;
