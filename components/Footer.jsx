import { Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container py-8 bg-background-darker">
      <div className="flex justify-between items-center gap-8">
        <p className="text-lg font-medium">Saif Anees</p>
        <ul className="flex gap-4 items-center">
          <Link href={"/"} className="text-pencil p-1 rounded-sm">
            <Instagram size={22} strokeWidth={1.8} />
          </Link>
          <Link href={"/"} className="text-pencil p-1 rounded-sm">
            <MessageCircle size={22} strokeWidth={1.8} />
          </Link>
          <Link href={"/"} className="text-pencil p-1 rounded-sm">
            <Mail size={22} strokeWidth={1.8} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
