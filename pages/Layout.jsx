import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-main text-pencil">
      <Head>
        <title>Saif Anees</title>
        <link rel="icon" type="image/x-icon" href="/pfp2.jpg" />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Analytics />
      <Footer />
    </div>
  );
};

export default Layout;
