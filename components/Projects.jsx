import Image from "next/image";
import { ArrowDownToDot, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  // const categories = [
  const categories = [
    {
      type: "Web/App Designs",
      color: "blue",
      image: "/msre.png",
      client: "MS Real Estate LLC",
      time: "1 Month",
      desc: "Modernised re-design of pages and migration from of the wordpress to full-stack.",
    },
    {
      type: "Branding",
      color: "green",
      image: "/idan.png",
      client: "Igal S.",
      time: "1 Week",
      desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
    },
    {
      type: "Animations / Motion Graphics",
      color: "purple",
      image: "/img1.png",
      time: "3 Weeks",
      desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
    },
    {
      type: "Digital Art",
      color: "red",
      image: "/art1.webp",
      time: "1 Month",
      desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
    },
    {
      type: "Web/App Designs",
      color: "blue",
      image: "/ohghad-web.png",
      client: "Ohghad Org",
      time: "1 Month",
      desc: "Modernised re-design of pages and migration from of the wordpress to full-stack.",
    },
    {
      type: "Web/App Designs",
      color: "blue",
      image: "/mslm.webp",
      client: "Modern Standards Luxury motors",
      time: "1.5 Month",
      desc: "Modernised re-design of pages and migration from of the wordpress to full-stack.",
    },
  ];

  return (
    <div className="works-section px-[5%] py-12 pb-24 bg-background relative z-0">
      <div className="h-full w-full absolute top-0 left-0 brightness-110 opacity-20">
        <Image
          src={"/paper.avif"}
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="flex items-center gap-2 max-lg:gap-2 text-2xl font-medium mb-6 font-yellow-tail relative z-10">
        <PackageCheck className="size-8 max-md:size-6" strokeWidth={1.8} />{" "}
        Commission Works
      </h2>
      <div className="grid grid-cols-4 max-2xl:grid-cols-2 max-md:grid-cols-1 gap-8 gap-y-12 max-md:gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.5 }}
            variants={{
              hidden: { rotate: "0deg" },
              visible: { rotate: "1deg" },
            }}
          >
            <div key={index} className="">
              <div className="bg-background/30 p-3 max-md:p-2 border border-pencil/20 shadow-md flex items-start rounded-lg gap-3 leading-loose">
                <div className="relative h-full w-full overflow-hidden aspect-[16/12] max-sm:aspect-[16/14] shrink-0 basis-1/2 pr-3 border-r-2 border-dashed border-pencil/20">
                  <Image
                    src={category.image}
                    height={1000}
                    width={1000}
                    alt={category.client}
                    className="h-full w-full object-cover rounded-md"
                  />
                  <div className="h-full w-full z-10 absolute bottom-0 left-0"></div>
                </div>
                <div className="max-sm:text-sm leading-normal">
                  <h4
                    className={`mb-1 border-b bg-${category.color}-500/20 border-b-pencil/10 font-medium line-clamp-1`}
                  >
                    <span>{category.type}</span>
                  </h4>
                  {category?.client && (
                    <h4 className="mb-1 border-b border-b-pencil/10 font-medium line-clamp-1">
                      <span>Client: {category.client}</span>
                    </h4>
                  )}
                  <h4 className="mb-1 border-b border-b-pencil/10 font-medium">
                    <span>Time: {category.time}</span>
                  </h4>
                  <p className="text-sm max-sm:text-xs text-pencil/80 line-clamp-3 leading-relaxed max-sm:leading-normal">
                    {category.desc.split(" ").map((line, index) => (
                      <span key={index} className="border-b border-b-pencil/10">
                        {line + " "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-12 relative">
        <button className="font-yellow-tail flex items-center gap-2 hover:bg-emerald-500/20 px-2 text-base">
          Show More
          <ArrowDownToDot
            className="size-5 text-pencil/90 relative transition-all"
            strokeWidth={1.8}
          />
        </button>
      </div>
    </div>
  );
};

export default Projects;
