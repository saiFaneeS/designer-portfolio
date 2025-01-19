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
      title: "Motion Graphics / Animations",
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
    <div className="works-section px-[5%] py-12 font-clash bg-background relative z-0">
      <h2 className="flex items-center gap-3 text-xl font-medium mb-8 ">
        <PackageCheck className="h-7 w-7" /> Commission Works
      </h2>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
        {categories.map((category) => (
          <div key={category.title}>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full border p-4 rounded-lg border-pencil/20"
            >
              <div className="flex gap-4 justify-between mb-2">
                <h2 className="text-lg font-medium">{category.title}</h2>
                <div className="flex gap-2 items-center">
                  <CarouselPrevious className="static bg-pencil/20 -mb-7" />
                  <CarouselNext className="static bg-pencil/20 -mb-7" />
                </div>
              </div>

              <CarouselContent>
                {category.works.map((work, index) => (
                  <CarouselItem key={index} className="aspect-video">
                    <div className="relative h-full w-full rounded-md overflow-hidden">
                      <Image
                        src={work.image}
                        height={1000}
                        width={1000}
                        className="h-full w-full object-cover"
                        alt={work.client}
                      />
                      <div className="h-full w-full bg-gradient-to-t from-black/20 to-transparent z-10 absolute bottom-0 left-0"></div>
                    </div>
                    <div className="mt-4 mb-1 font-medium">
                      <h4>
                        <span>{work.client}</span>
                        {" - "}
                        <span>{work.time}</span>
                      </h4>
                    </div>
                    <p className="font-roboto text-sm text-pencil/80">{work.desc} </p>
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
