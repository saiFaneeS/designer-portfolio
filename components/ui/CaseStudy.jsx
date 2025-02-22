import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpLeft, Asterisk, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ImageCarousel } from "../ImageCarousel";
import { useNavbar } from "@/context/Navbar";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CaseStudy = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params) {
      const { slug } = params;
      const filteredProject = projects.find((project) => project.slug === slug);
      setProject(filteredProject);
    }
  }, [params]);

  const projects = [
    {
      color: "purple",
      projectName: "Gearish Ecommerce Logo",
      projectCover: "/new/gearish.jpg",
      client: {
        name: "GearishPk",
        location: "-",
      },
      businessType: "Branding",
      year: 2024,
      description:
        "Logo design for GearishPk, an e-commerce brand, reflecting their modern and tech-driven identity.",
      features: ["Increased Brand Recognition", "Enhanced Brand Image"],
      slug: "gearish-branding",
      objectives: [
        "Reflect the modern and tech-driven identity of the brand",
        "Create a logo that stands out in the e-commerce space",
      ],
      challenges: [
        "Designing a logo that captures the brand's modern identity",
        "Ensuring the logo is memorable and recognizable",
      ],
      solutions: [
        "Developed a modern and tech-driven logo",
        "Ensured the logo is distinctive and memorable",
      ],
      projectImages: ["/new/gearish.jpg"],
      projectTitle: "Gearish Ecom. Logo",
    },
    {
      color: "blue",
      projectName: "MS Luxury Motors Website",
      projectCover: "/new/ms_lm.jpg",
      client: {
        name: "MS Luxury Motors LLC",
        location: "UAE",
      },
      businessType: "Website Design",
      year: 2024,
      description:
        "Designed a sleek and intuitive limousine booking platform for a premium travel experience in Dubai.",
      features: ["Intuitive User Interface", "Instant Booking & Messaging"],
      slug: "mslm-booking",
      objectives: [
        "Provide a seamless booking experience",
        "Establish an online presence",
      ],
      challenges: [
        "Creating a modern and functional website for a luxury service",
        "Ensuring ease of use for booking and customer inquiries",
      ],
      solutions: [
        "Developed a website using the latest technologies to meet the client's requirements for design, functionality, and ease of management",
        "Implemented a user-friendly booking interface and messaging system",
      ],
      projectImages: ["/new/ms_lm.jpg"],
      projectTitle: "MS Luxury Motors Website",
    },
    {
      color: "red",
      projectName: "Silent Echoes Book Cover",
      projectCover: "/new/silent_echoes.jpg",
      client: {
        name: "Silent Echoes",
        location: "-",
      },
      businessType: "Book Cover",
      year: 2024,
      description:
        "Created a minimalist yet haunting book cover design, emphasizing the eerie and psychological elements of the novel.",
      // features: ["Increased Brand Recognition", "Enhanced Brand Image],
      slug: "silent-echoes-cover",
      objectives: [
        "Capture the eerie and psychological essence of the novel",
        "Create a minimalist yet impactful cover",
      ],
      challenges: [
        "Ensuring the design conveys the right mood",
        "Balancing minimalism with storytelling elements",
      ],
      solutions: [
        "Developed a cover with strong visual symbolism",
        "Used a carefully selected color palette to enhance the eerie tone",
      ],
      projectImages: ["/new/silent_echoes.jpg"],
      projectTitle: "Silent Echoes Book Cover",
    },
    {
      color: "red",
      projectName: "Igal S. BJJ Branding",
      projectCover: "/new/idan.jpg",
      client: {
        name: "Igal S. BJJ",
        location: "-",
      },
      businessType: "Branding",
      year: 2024,
      description:
        "Personal brand logo for a young BJJ athlete, capturing their identity & spirit.",
      features: ["Increased Brand Recognition", "Brand Image Versatility"],
      slug: "igal-s-branding",
      objectives: [
        "Capture the athlete's identity and spirit",
        "Create a recognizable brand logo",
      ],
      challenges: [
        "Creating a logo that captures the essence of the athlete",
        "Ensuring the logo is versatile for various uses",
      ],
      solutions: [
        "Developed a logo that reflects the athlete's identity",
        "Ensured the logo is versatile for different applications",
      ],
      projectImages: ["/new/idan.jpg"],
      projectTitle: "Igal S. BJJ Branding",
    },
    {
      color: "green",
      projectName: "MS Real Estate Website Redesign",
      projectCover: "/new/ms_re.jpg",
      client: {
        name: "MS Real Estate LLC",
        location: "UAE",
      },
      businessType: "Website Design",
      year: 2024,
      description:
        "Redesigned a cleaner UI and migrated from WordPress to a full-stack solution for better UX and performance.",
      features: ["Load Time: -80%", "User Engagement: +50%, SEO: +30%"],
      slug: "ms-real-estate",
      objectives: [
        "Enhance visual appeal and usability",
        "Improve website performance and user experience",
      ],
      challenges: [
        "Overhauling an outdated design to meet contemporary aesthetics and functionality",
        "Ensuring seamless integration with existing property listing systems",
      ],
      solutions: [
        "Complete redesign with a focus on modern aesthetics and improved usability",
        "Integrated advanced search filters and property listings",
      ],
      projectImages: ["/new/ms_re.jpg"],
      projectTitle: "MS Real Estate Website Redesign",
    },
    {
      color: "amber",
      projectName: "The Glass Alibi Cover v2",
      projectCover: "/new/glass_alibi_1.jpg",
      client: {
        name: "The Glass Alibi",
        location: "-",
      },
      businessType: "Book Cover",
      year: 2024,
      description:
        "An alternative version of 'The Glass Alibi' cover, incorporating a more cinematic and dramatic composition.",
      // features: ["Reader Interest: +40%", "Sales Boost: +25%"],
      slug: "glass-alibi-cover-v2",
      objectives: [
        "Enhance the noir-inspired aesthetic of the book",
        "Create a striking and cinematic book cover",
      ],
      challenges: [
        "Capturing the novel’s themes in a visually engaging way",
        "Differentiating from the original cover while keeping the essence",
      ],
      solutions: [
        "Used bold typography and dramatic lighting",
        "Created a high-contrast design to draw attention",
      ],
      projectImages: ["/new/glass_alibi_1.jpg"],
      projectTitle: "The Glass Alibi Cover v2",
    },
    {
      color: "cyan",
      projectName: "The Glass Alibi Cover",
      projectCover: "/new/glass_alibi.jpg",
      client: {
        name: "The Glass Alibi",
        location: "-",
      },
      businessType: "Book Cover",
      year: 2024,
      description:
        "An alternative version of 'The Glass Alibi' cover, incorporating a more cinematic and dramatic composition.",
      // features: ["Reader Interest: +40%", "Sales Boost: +25%"],
      slug: "glass-alibi-cover",
      objectives: [
        "Enhance the noir-inspired aesthetic of the book",
        "Create a striking and cinematic book cover",
      ],
      challenges: [
        "Capturing the novel’s themes in a visually engaging way",
        "Differentiating from the original cover while keeping the essence",
      ],
      solutions: [
        "Used bold typography and dramatic lighting",
        "Created a high-contrast design to draw attention",
      ],
      projectImages: ["/new/glass_alibi_1.jpg"],
      projectTitle: "The Glass Alibi Cover v2",
    },
    {
      color: "green",
      projectName: "Ohghad Fundraiser Site",
      projectCover: "/new/ohghad.jpg",
      client: {
        name: "Ohghad Fundraiser Site",
        location: "Ghana",
      },
      businessType: "Website Design",
      year: 2024,
      description:
        "Designed and developed a secure fundraising platform to support humanitarian efforts in Ghana.",
      features: [
        "User Engagement: +45%",
        "Security: 100%",
        "User-Friendly Interface",
      ],
      slug: "ohghad-platform",
      objectives: [
        "Support humanitarian efforts through a secure platform",
        "Increase user engagement and donations",
      ],
      challenges: [
        "Creating a secure and user-friendly platform",
        "Ensuring the platform supports various fundraising activities",
      ],
      solutions: [
        "Developed a secure and user-friendly fundraising platform",
        "Integrated features to support various fundraising activities",
      ],
      projectImages: ["/new/ohghad.jpg"],
      projectTitle: "Ohghad Fundraiser Site",
    },
    {
      color: "purple",
      projectName: "Noblesoft Agency Landing Page",
      projectCover: "/new/noblesoft.jpg",
      client: {
        name: "Noblesoft",
        location: "-",
      },
      businessType: "Website Design",
      year: 2024,
      description:
        "Designed and developed a modern agency landing page that effectively showcases services and client success stories.",
      features: [
        "Engagement Rate: +55%",
        "SEO: +30%",
        "User Retention: +20%",
        "Brand Image: +50%",
      ],
      slug: "noblesoft-landing-page",
      objectives: [
        "Establish an online presence for the agency",
        "Showcase services and client success stories effectively",
      ],
      challenges: [
        "Creating a visually appealing yet functional website",
        "Ensuring strong conversion optimization",
      ],
      solutions: [
        "Developed a sleek and professional landing page",
        "Optimized layout for engagement and lead generation",
      ],
      projectImages: ["/new/noblesoft.jpg"],
      projectTitle: "Noblesoft Agency Landing Page",
    },
    {
      color: "green",
      projectName: "Custom CRM Solution",
      projectCover: "/new/crm.jpg",
      client: {
        name: "CRM Platform",
        location: "-",
      },
      businessType: "Software Development",
      year: 2024,
      description:
        "Developed a powerful, fully customizable CRM with advanced features for efficient lead and task management.",
      features: [
        "Drag-and-Drop Custom Lead Pipelines",
        "Leads, Team & Tasks Management",
        "User Roles & Permissions",
        "Advanced Analytics & Reporting",
      ],
      slug: "custom-crm-solution",
      objectives: [
        "Streamline business operations with an all-in-one CRM",
        "Provide teams with an intuitive and scalable workflow",
        "Improve efficiency through automation and analytics",
      ],
      challenges: [
        "Designing a system that is both powerful and user-friendly",
        "Ensuring scalability for teams of all sizes",
        "Implementing seamless drag-and-drop pipeline customization",
      ],
      solutions: [
        "Built a modular CRM with fully customizable workflows",
        "Integrated automation for lead tracking and task assignments",
        "Developed advanced analytics dashboards for better decision-making",
      ],
      projectImages: ["/new/crm.jpg"],
      projectTitle: "Custom CRM Solution",
    },
  ];

  const colorClasses = {
    blue: "border-blue-500/80",
    green: "border-green-500/80",
    purple: "border-violet-500/80",
    red: "border-red-500/80",
    amber: "border-amber-500/80",
    cyan: "border-cyan-500/80",
  };

  const handleAllWorksClick = (e) => {
    e.preventDefault();
    if (router.pathname !== "/") {
      router.push("/?scrollTo=works-section")?.then(() => {
        scroller.scrollTo("works-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -50,
        });
      });
    } else {
      scroller.scrollTo("works-section", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  };

  if (!project) return null;

  return (
    <div className={`min-h-screen relative`}>
      {/* Background Pattern */}
      <div className="absolute -z-10 pointer-events-none inset-0 bg-[linear-gradient(to_right,#555_1px,transparent_1px),linear-gradient(to_bottom,#555_1px,transparent_1px)] bg-[size:34px_44px] opacity-10" />
      <div className="h-full w-full absolute top-0 left-0 opacity-20 -z-10 contrast-150 brightness-95">
        <Image
          src="/paper.avif"
          height={1000}
          width={1000}
          alt="background texture"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-[5%] py-24">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm mb-8"
        >
          <Link
            href="/"
            onClick={handleAllWorksClick}
            className="flex items-center gap-2 text-pencil/80 hover:text-pencil transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            All Works
          </Link>
          <ChevronRight size={14} className="text-pencil/80" />
          <span className="text-emerald-600">{project.client.name}</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          {...fadeIn}
          className="mb-8 grid grid-cols-2 gap-6 max-md:grid-cols-1"
        >
          <div className="bg-pencil-darker text-background border rounded-lg p-8 relative overflow-hidden">
            <div
              className={`h-60 aspect-square rounded-full border-[24px] ${
                colorClasses[project.color]
              } absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2`}
            ></div>{" "}
            {project.platform && (
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  ...(project.platform.frontend || []),
                  ...(project.platform.backend || []),
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-emerald-200 bg-emerald-900/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-xl font-semibold mb-4">
              {project.projectTitle}
            </h1>
            <p className=" leading-relaxed">{project.description}</p>
            {/* Objectives */}
            <motion.section {...fadeIn} className="z-10 relative">
              <h2 className="text-xl mt-6 mb-4 font-yellow-tail">Objectives</h2>
              <ul className="space-y-4">
                {project.objectives?.map((objective, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span className="">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Main Image or Carousel */}
          <div className="rounded-lg overflow-hidden">
            {project.projectImages?.length > 1 ? (
              <ImageCarousel images={project.projectImages} />
            ) : (
              <Image
                src={project.projectCover}
                alt={project.projectTitle}
                className="w-full h-full aspect-video object-cover"
              />
            )}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8 max-md:flex flex-col bg-background/50 text-pencil border-2 border-dashed border-background-darker rounded-lg p-8">
          {/* Challenges */}
          <motion.section {...fadeIn}>
            <h2 className="text-xl mb-4 font-yellow-tail">Challenges</h2>
            <ul className="space-y-4">
              {project.challenges?.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span className="">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Solutions */}
          <motion.section {...fadeIn}>
            <h2 className="text-xl mb-4 font-yellow-tail">Solutions</h2>
            <ul className="space-y-4">
              {project.solutions?.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span className="">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <div className="col-span-2">
            {/* Features */}
            {project.features && (
              <motion.section {...fadeIn}>
                <h2 className="text-xl mb-4 font-yellow-tail">Key Points</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 px-4 bg-emerald-600/10 rounded-sm border border-emerald-600/20 text-sm"
                    >
                      <Asterisk size={20} className="text-emerald-700" />
                      <span className="text-emerald-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>

        {/* Return Home Button */}
        <motion.div {...fadeIn} className="flex justify-center mt-16">
          <Link
            href="/"
            onClick={handleAllWorksClick}
            className="bg-amber-500/60 font-yellow-tail text-pencil flex gap-2 items-center font-medium text-lg transition-all hover:bg-amber-500/50 -rotate-2 px-6 py-1"
          >
            <ArrowUpLeft size={18} /> Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
