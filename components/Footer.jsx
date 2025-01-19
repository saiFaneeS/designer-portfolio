import { Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-6 bg-pencil text-background">
      <div className="flex flex-col justify-between items-center gap-6">
        <p className="text-lg font-medium font-yellow-tail">Saif Anees</p>
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
