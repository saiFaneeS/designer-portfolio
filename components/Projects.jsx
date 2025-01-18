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
      title: "Web/App Design",
      works: [
        {
          image: "/msre.png",
          client: "Client A",
          budget: "$900",
          time: "2 Months",
        },
        {
          image: "/projects/ohghad1.jpeg",
          client: "Client A",
          budget: "$900",
          time: "2 Months",
        },
      ],
    },
    {
      title: "Branding",
      works: [
        {
          image: "/brand1.webp",
          client: "Client B",
          budget: "$700",
          time: "1 Month",
        },
        {
          image: "/brand2.png",
          client: "Client C",
          budget: "$800",
          time: "1.5 Months",
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
        },
        {
          image: "/img1.png",
          client: "Client F",
          budget: "$500",
          time: "3 Weeks",
        },
      ],
    },
    {
      title: "Digital Art",
      works: [
        {
          image: "/art2.webp",
          client: "Client G",
          budget: "$400",
          time: "1 Month",
        },
        {
          image: "/art1.webp",
          client: "Client G",
          budget: "$400",
          time: "1 Month",
        },
      ],
    },
  ];

  return (
    <div className="works-section container py-12 font-clash">
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
              className="w-full border p-3 rounded-lg border-pencil/20"
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
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/2 aspect-video"
                  >
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
