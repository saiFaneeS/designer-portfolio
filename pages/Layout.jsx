import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-main text-pencil">
      <Head>
        <title>Saif Anees</title>
        <link rel="icon" type="image/x-icon" href="/pfp.png" />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
