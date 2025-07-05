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
      projectName: "HHC Hiring Post – Supplier Head",
      client: {
        name: "HHC",
        location: "Pakistan",
      },
      businessType: "Social Media Hiring Post",
      year: 2025,
      description:
        "Designed a professional hiring campaign for HHC to recruit a Head of Supplier Department, highlighting key responsibilities and workplace culture.",
      features: ["Professional Branding", "Job Clarity & Engagement"],
      slug: "hhc-hiring-supplier-head",
      objectives: [
        "Attract qualified candidates for the Supplier Department Head role",
        "Visually communicate HHC's professionalism and company culture",
      ],
      challenges: [
        "Presenting job details concisely while keeping visuals engaging",
        "Maintaining HHC’s corporate visual identity",
      ],
      solutions: [
        "Created a clean and clear layout with job highlights",
        "Designed visual assets that resonate with mid to senior-level professionals",
      ],
      projectCover: "/hhc-works/hiring/hp-2.png",
      projectImages: [
        "/hhc-works/hiring/hp-2.png",
        "/hhc-works/hiring/hp-3.png",
        "/hhc-works/hiring/hp-4.png",
        "/hhc-works/hiring/hp-5.png",
        "/hhc-works/hiring/hp-6.png",
      ],

      projectTitle: "HHC Supplier Dept. Hiring Campaign",
    },
    {
      color: "green",
      projectName: "Visionary Leader Transformation Carousel",
      client: {
        name: "HHC Academy",
        location: "Pakistan",
      },
      businessType: "Carousel Design",
      year: 2025,
      description:
        "Multi-platform carousel post showcasing HHC Academy's unique approach to transforming students into visionary leaders.",
      features: ["High Engagement Format", "Cross-Platform Ready"],
      slug: "hhc-visionary-carousel",
      objectives: [
        "Communicate the academy’s leadership-building curriculum",
        "Educate and inspire potential students and parents",
      ],
      challenges: [
        "Conveying a complex transformation process in six slides",
        "Maintaining visual and narrative consistency across formats",
      ],
      solutions: [
        "Designed a clean, step-by-step visual flow",
        "Used consistent colors and iconography to reinforce the theme",
      ],
      projectCover: "/hhc-works/not-a-course/Slide.png",
      projectImages: [
        "/hhc-works/not-a-course/Slide.png",
        "/hhc-works/not-a-course/Slide-1.png",
        "/hhc-works/not-a-course/Slide-2.png",
        "/hhc-works/not-a-course/Slide-3.png",
        "/hhc-works/not-a-course/Slide-4.png",
        "/hhc-works/not-a-course/Slide-5.png",
      ],

      projectTitle: "Visionary Leader Transformation Carousel",
    },
    {
      color: "amber",
      projectName: "Students Join from All Over Pakistan",
      client: {
        name: "HHC Academy",
        location: "Pakistan",
      },
      businessType: "Social Media Post",
      year: 2025,
      description:
        "Social media post highlighting that students from across Pakistan choose HHC Academy to pursue their education.",
      features: ["National Reach Messaging", "Multiple Design Iterations"],
      slug: "hhc-nationwide-enrollment",
      objectives: [
        "Showcase nationwide trust and enrollment",
        "Visually represent geographic diversity",
      ],
      challenges: [
        "Designing an inclusive and appealing visual",
        "Presenting diverse student representation authentically",
      ],
      solutions: [
        "Created variations using maps and student icons",
        "Highlighted nationwide trust in HHC’s academic quality",
      ],
      projectCover: "/hhc-works/pakistan-posts/Pakistan post 1.png",
      projectImages: [
        "/hhc-works/pakistan-posts/Pakistan post 1.png",
        "/hhc-works/pakistan-posts/Pakistan post 2.png",
        "/hhc-works/pakistan-posts/Pakistan post 3.png",
      ],

      projectTitle: "HHC Nationwide Student Post",
    },
    {
      color: "cyan",
      projectName: "Funnel Building & Leadership Roadmap",
      client: {
        name: "HHC",
        location: "Pakistan",
      },
      businessType: "Educational Design Post",
      year: 2025,
      description:
        "Designed visually rich posts explaining how funnel building works and HHC's step-by-step roadmap to becoming a visionary leader.",
      features: ["Educational Content", "Infographic Style"],
      slug: "hhc-funnel-roadmap",
      objectives: [
        "Educate audience on marketing funnel strategies",
        "Show HHC’s structured leadership path",
      ],
      challenges: [
        "Explaining complex ideas in a digestible visual format",
        "Ensuring the design aligns with both topics’ intent",
      ],
      solutions: [
        "Used diagrammatic visuals and color cues to simplify concepts",
        "Created a dual-topic post with thematic consistency",
      ],
      projectCover: "/hhc-works/How Funnel Building Works.png",
      projectImages: [
        "/hhc-works/How Funnel Building Works.png",
        "/hhc-works/Roadmap to Visionary Leader.png",
      ],

      projectTitle: "Funnel & Visionary Leader Post",
    },
    {
      color: "gray",
      projectName: "HHC Hubs Closing Announcement",
      client: {
        name: "HHC",
        location: "Pakistan",
      },
      businessType: "Operations Update Design",
      year: 2025,
      description:
        "Designed an announcement post to inform suppliers and dropshippers about temporary hub closures during public holidays.",
      features: ["Clarity in Communication", "Crisp Layout"],
      slug: "hhc-hubs-closure",
      objectives: [
        "Communicate closure dates clearly and promptly",
        "Reinforce HHC’s professional tone even in operational updates",
      ],
      challenges: [
        "Balancing urgency with professionalism",
        "Ensuring key dates are visually prioritized",
      ],
      solutions: [
        "Used prominent typography and visual hierarchy for clarity",
        "Maintained brand colors while ensuring message visibility",
      ],
      projectCover: "/hhc-works/Hubs Closing Announcement.png",
      projectImages: ["/hhc-works/Hubs Closing Announcement.png"],
      projectTitle: "HHC Hubs Closing Announcement",
    },
    {
      color: "blue",
      projectName: "HHC Kids Academy Banners",
      projectCover: "/hhc-works/banners/FB_BANNER_1.png",
      client: {
        name: "HHC Academy",
        location: "Pakistan",
      },
      businessType: "Social Media Design",
      year: 2025,
      description:
        "Designed vibrant and playful banners for HHC's children's wing and created multi-platform social assets tailored for Facebook, LinkedIn, and YouTube.",
      features: ["Brand-Aligned Visuals", "Platform-Optimized Content"],
      slug: "hhc-kids-banners",
      objectives: [
        "Create engaging visuals for HHC's children's academy",
        "Ensure consistency across all social platforms",
      ],
      challenges: [
        "Balancing playful aesthetics with brand guidelines",
        "Designing for multiple platforms with varying dimensions",
      ],
      solutions: [
        "Used colorful, friendly design elements to appeal to parents and children",
        "Optimized banners for Facebook, YouTube, and LinkedIn layouts",
      ],
      projectImages: [
        "/hhc-works/banners/FB_BANNER_1.png",
        "/hhc-works/banners/FB_BANNER_2.png",
        "/hhc-works/banners/FB_BANNER_3.png",
        "/hhc-works/banners/FB_BANNER_5.png",
        "/hhc-works/banners/FB_BANNER_6.png",
        "/hhc-works/banners/FB_BANNER_7.png",
      ],
      projectTitle: "HHC Kids Academy Banner Design",
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
          <span className="text-cyan-600">{project.client.name}</span>
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
                    className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/30 rounded-full"
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
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
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
                      className="flex items-center gap-2 p-3 px-4 bg-cyan-600/10 rounded-sm border border-cyan-600/20 text-sm"
                    >
                      <Asterisk size={20} className="text-cyan-700" />
                      <span className="text-cyan-700 font-medium">
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
