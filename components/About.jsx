import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowDownToDot } from "lucide-react";
import Link from "next/link";
import { useNavbar } from "@/context/Navbar";

const About = () => {
  const { isActive, pageChanged, setPageChanged } = useNavbar();

  const tools = [
    {
      category: "Web",
      items: [
        { name: "React", icon: "/icons/react-color.svg" },
        { name: "Next.js", icon: "/icons/nextdotjs-color.svg" },
        { name: "Javascript", icon: "/icons/javascript-color.svg" },
        { name: "TailwindCSS", icon: "/icons/tailwindcss-color.svg" },
        { name: "Node.js", icon: "/icons/nodedotjs-color.svg" },
        { name: "MongoDB", icon: "/icons/mongodb-color.svg" },
        { name: "GitHub", icon: "/icons/github-color.svg" },
        { name: "Wordpress", icon: "/icons/wp.svg" },
      ],
    },
    {
      category: "Design & Media",
      items: [
        { name: "Figma", icon: "/icons/figma-color.svg" },
        { name: "Framer", icon: "/icons/framer-color.svg" },
        { name: "DaVinci Resolve", icon: "/icons/davinci-resolve.svg" },
      ],
    },
  ];

  useEffect(() => {
    setPageChanged(false);
  }, []);

  return (
    <div
      className={`min-h-screen overflow-x-hidden overflow-y-auto relative flex flex-col justify-center gap-8 container py-24 pt-40 max-sm:pt-28 max-sm:py-16 ${
        isActive ? "slide-out-top" : "slide-in-bottom"
      } ${pageChanged ? "hidden" : ""}`}
    >
      <div className="w-full flex flex-col justify-center lg:w-4/5">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <div className="h-[2px] shrink-0 w-full bg-current mb-6"></div>

        <p className="text-base text-gray-700 leading-relaxed mb-6">
          Hey, I&apos;m Saif. I&apos;m a full-stack engineer with a primary
          focus on building Websites & Apps. I have experience in working with
          small to medium-sized businesses with consistent positive client
          satisfaction. When I&apos;m not building, I&apos;m learning new stuff.
        </p>

        <div className="space-y-8">
          {tools.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {section.category}
              </h3>
              <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 gap-y-5 saturate-[70%]">
                {section.items.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center gap-3  transition-all duration-300 group"
                  >
                    <div className={`relative w-6 h-6 flex-shrink-0 ${tool.name === "Javascript" && "bg-neutral-800"}`}>
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="font-medium text-gray-800">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Uncomment if you want to add the resume link back
        <Link
          href={"/"}
          className="flex gap-2 items-center text-base font-medium mt-8 hover:text-gray-600 transition-colors w-fit"
        >
          <ArrowDownToDot size={18} />
          resume
        </Link>
        */}
      </div>
    </div>
  );
};

export default About;
