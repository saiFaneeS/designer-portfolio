import Contact from "@/components/Contact";
import Layout from "./Layout";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Scroller from "@/components/Scroller";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Scroller scrollText="WELCOME" />
      <Projects />
      {/* <Scroller scrollText="REACH OUT" /> */}
      <Contact />
    </Layout>
  );
}
