import Contact from "@/components/Contact";
import Layout from "./Layout";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
}
