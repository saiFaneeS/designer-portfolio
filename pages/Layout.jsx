import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-main text-pencil">
      <Head>
        <title>Saif Anees | Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/pfp.png" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
