import Image from "next/image";
import Cards from "./Cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PackageCheck } from "lucide-react";

const Projects = () => {
  const categories = [
    {
      title: "Web/App Designs",
      color: "blue",
      works: [
        {
          image: "/msre.png",
          client: "MS Real Estate LLC",
          budget: "$600",
          time: "1 Months",
          desc: "Modernised re-design of pages and migration from of the wordpress to full-stack.",
        },
        {
          image: "/projects/ohghad1.jpeg",
          client: "Ohghad Non-profit",
          budget: "$900",
          time: "1 Months",
          desc: "Design a platform for fundraising for the people of Ghana.",
        },
      ],
    },
    {
      title: "Branding",
      color: "green",
      works: [
        {
          image: "/brand2.png",
          client: "Client B",
          budget: "$700",
          time: "1 Month",
          desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
        },
        {
          image: "/brand2.png",
          client: "Client C",
          budget: "$800",
          time: "1.5 Months",
          desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
        },
      ],
    },
    {
      title: "Animations / Motion Graphics",
      color: "violet",
      works: [
        {
          image: "/img1.png",
          client: "Client F",
          budget: "$500",
          time: "3 Weeks",
          desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
        },
        {
          image: "/img1.png",
          client: "Client F",
          budget: "$500",
          time: "3 Weeks",
          desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
        },
      ],
    },
    {
      title: "Digital Art",
      color: "amber",
      works: [
        {
          image: "/art1.webp",
          client: "Client G",
          budget: "$400",
          time: "1 Month",
          desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
        },
        {
          image: "/art1.webp",
          client: "Client G",
          budget: "$400",
          time: "1 Month",
          desc: "Lorem ipsum dolor set amet. Lorem ipsum dolor set emet. dolor ip.",
        },
      ],
    },
  ];

  return (
    <div className="works-section px-[5%] py-12 bg-background relative z-0">
      <h2 className="flex items-center gap-2 max-lg:gap-2 text-xl font-medium mb-6 font-yellow-tail">
        <PackageCheck className="h-7 w-7" strokeWidth={1.8} /> Commission Works
      </h2>
      <div className="grid grid-cols-4 max-2xl:grid-cols-2 max-sm:grid-cols-1 gap-8 gap-y-12 max-md:gap-8">
        {categories.map((category) => (
          <div key={category.title}>
            <Carousel
              opts={{
                align: "start",
              }}
              className={`w-full border p-4 max-md:p-3 border-pencil/10 bg-${category.color}-500/10`}
            >
              <div className="flex gap-4 justify-between mb-3">
                <h2 className="text-base xl:text-lg font-medium line-clamp-1 font-robotoMedium">
                  {category.title}
                </h2>
                <div className="flex gap-2 items-center">
                  <CarouselPrevious className="static bg-pencil/10 text-pencil/80 -mb-7 bg-opacity-50 border-none hover:bg-emerald-500/10 max-md:size-7" />
                  <CarouselNext className="static bg-pencil/10 text-pencil/80 -mb-7 bg-opacity-50 border-none hover:bg-emerald-500/10 max-md:size-7" />
                </div>
              </div>
              <div className="w-full h-[1px] bg-pencil/20 mb-4"></div>

              <CarouselContent>
                {category.works.map((work, index) => (
                  <CarouselItem key={index} className="aspect-[16/9]">
                    <div className="relative h-full w-full overflow-hidden bg-background p-3 max-md:p-2 border border-pencil/20 shadow-md">
                      <Image
                        src={work.image}
                        height={1000}
                        width={1000}
                        className="h-full w-full object-cover"
                        alt={work.client}
                      />
                      <div className="h-full w-full z-10 absolute bottom-0 left-0"></div>
                    </div>
                    <div className="rounded-sm mt-3">
                      <div className="mb-1 border-b border-b-pencil/10 font-medium">
                        <h4>
                          <span>{work.client}</span>
                          {" - "}
                          <span>{work.time}</span>
                        </h4>
                      </div>
                      <div className="font-roboto text-sm text-pencil/80">
                        {work.desc.split("\s").map((line, index) => (
                          <span
                            key={index}
                            className="border-b border-b-pencil/10"
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
