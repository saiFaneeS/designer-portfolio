import Image from "next/image";
import Cards from "./Cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AppWindow,
  Clapperboard,
  DraftingCompass,
  PackageCheck,
  SwatchBook,
} from "lucide-react";

const Projects = () => {
  // const categories = [
  const categories = [
    {
      type: "Web/App Designs",
      color: "blue",
      image: "/msre.png",
      client: "MS Real Estate LLC",
      budget: "$600",
      time: "1 Month",
      desc: "Modernised re-design of pages and migration from of the wordpress to full-stack.",
    },
    {
      type: "Branding",
      color: "green",
      image: "/brand2.png",
      client: "Client B",
      budget: "$700",
      time: "1 Month",
      desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
    },
    {
      type: "Animations / Motion Graphics",
      color: "purple",
      image: "/img1.png",
      client: "Client F",
      budget: "$500",
      time: "3 Weeks",
      desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
    },
    {
      type: "Digital Art",
      color: "red",
      image: "/art1.webp",
      client: "Client G",
      budget: "$400",
      time: "1 Month",
      desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
    },
  ];

  return (
    <div className="works-section px-[5%] py-12 bg-background relative z-0">
      <div className="h-full w-full absolute top-0 left-0 brightness-110 opacity-20">
        <Image
          src={"/paper.avif"}
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="flex items-center gap-2 max-lg:gap-2 text-2xl font-medium mb-6 font-yellow-tail relative z-10">
        <PackageCheck
          className="size-8 max-md:size-6 max-sm:size-5"
          strokeWidth={1.8}
        />{" "}
        Commission Works
      </h2>
      <div className="grid grid-cols-4 max-2xl:grid-cols-2 max-md:grid-cols-1 gap-8 gap-y-12 max-md:gap-8">
        {categories.map((category, index) => (
          <div key={category.title}>
            {/* <Carousel
              opts={{
                align: "start",
              }} 
              className={`w-full`}
            > */}
            {/* <div
                className={`flex gap-4 justify-between mb-2 w-full p-1 px-2 rounded-md bg-${category.color}-500/20`}
              >
                <h2
                  className={`text-base xl:text-lg font-medium line-clamp-1 flex gap-2 items-center text-nowrap`}
                >
                  <category.icon className="shrink-0 max-md:size-5 max-sm:size-4" />
                  {category.title}
                </h2>
                <div className="flex gap-2 items-center">
                  <CarouselPrevious className="static bg-pencil/10 text-pencil/80 -mb-7 bg-opacity-50 border-none hover:bg-emerald-500/10 max-md:size-7" />
                  <CarouselNext className="static bg-pencil/10 text-pencil/80 -mb-7 bg-opacity-50 border-none hover:bg-emerald-500/10 max-md:size-7" />
                </div>
              </div> */}
            {/* <div className="w-full h-[1px] bg-pencil/10 mb-4"></div> */}

            {/* <CarouselContent> */}
            {/* <CarouselItem key={index} className=""> */}
            <div key={index} className="">
              <div className="bg-background p-3 max-md:p-2 border border-pencil/20 shadow-md flex items-start rounded-lg gap-3 leading-loose">
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
                  <h4 className={`mb-1 border-b bg-${category.color}-500/20 border-b-pencil/10 font-medium line-clamp-1`}>
                    <span>{category.type}</span>
                  </h4>
                  <h4 className="mb-1 border-b border-b-pencil/10 font-medium line-clamp-1">
                    <span>Client: {category.client}</span>
                  </h4>
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
            {/* </CarouselItem> */}

            {/* </CarouselContent>
            </Carousel> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
