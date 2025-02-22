import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Asterisk,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ImageCarousel } from "../ImageCarousel";
import { useNavbar } from "@/context/Navbar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CaseStudy = () => {
  const [project, setProject] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { isActive, pageChanged, setPageChanged } = useNavbar();

  const projects = [
    {
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
      features: [
        "Brand Recognition: +40%",
        "Social Engagement: +35%",
      ],
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
      projectName: "Gearish Ecom. Logo",
      projectCover: "/new/gearish.jpg",
      client: {
        name: "Gearish Ecom.",
        location: "-",
      },
      businessType: "Branding",
      year: 2024,
      description:
        "Logo design for GearishPk, an e-commerce brand, reflecting their modern and tech-driven identity.",
      features: [
        "Brand Recognition: +40%",
        "Social Engagement: +35%",
      ],
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
      features: [
        "Load Time: -50%",
        "Conversion: +25%",
      ],
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
        "Donations: +75%",
        "User Base: 2.1K",
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
      features: [
        "Bookings: +60%",
        "Revenue: +45%",
      ],
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
  ];

  useEffect(() => {
    setPageChanged(false);
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, [setPageChanged]);

  useEffect(() => {
    const querySlug = router?.query?.slug;
    const filteredProject = projects.find(
      (project) => project.slug === querySlug
    );
    setProject(filteredProject);
  }, [router?.query?.slug]);

  if (!project) return null;

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 max-md:gap-8 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 max-sm:py-8 ${
          isActive ? "slide-out-top" : "slide-in-bottom"
        } ${pageChanged ? "hidden" : ""}`}
      >
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-24"
        >
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-pencil hover:text-white-100 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              All Works
            </Link>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-emerald-600">{project.client.name}</span>
          </nav>

          <motion.div {...fadeIn} className="mt-4 max-w-5xl">
            <div className="flex flex-wrap gap-3 mb-4">
              {project.platform?.frontend?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-pencil-darker bg-pencil/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.platform?.backend?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-pencil-darker bg-pencil/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="text-xl font-semibold mb-4">
              {project.projectTitle}
            </h1>

            <p className="text-base text-pencil leading-relaxed mb-6">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mt-10 rounded-md overflow-hidden"
          >
            <Image
              src={project.projectCover}
              alt={project.projectTitle}
              width={1920}
              height={1080}
              className="w-full aspect-video max-h-96 object-cover"
            />
          </motion.div>
        </motion.header>

        {/* Content Sections */}
        <div className="py-12 mb-4">
          <div className="relative grid grid-cols-2 max-md:grid-cols-1 gap-8">
            <div>
              {/* Objectives */}
              <motion.section {...fadeIn} className="mb-12">
                <div>
                  <h2 className="text-lg font-semibold mt-2 mb-4">
                    Objectives
                  </h2>
                  <ul className="space-y-4">
                    {project.objectives?.map((objective, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-0.5 rounded-full bg-pencil mt-2.5 shrink-0" />
                        <span className="text-pencil">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
              {/* Challenges */}
              <motion.section {...fadeIn} className="mb-12">
                <div>
                  <h2 className="text-lg font-semibold mt-2 mb-4">
                    Challenges
                  </h2>
                  <ul className="space-y-4">
                    {project.challenges?.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-pencil"
                      >
                        <span className="w-1.5 h-0.5 rounded-full bg-pencil mt-2.5 shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
              {/* Solutions */}
              <motion.section {...fadeIn} className="mb-12">
                <div>
                  <h2 className="text-lg font-semibold mt-2 mb-4">Solutions</h2>
                  <ul className="space-y-4">
                    {project.solutions?.map((solution, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-pencil"
                      >
                        <span className="w-1.5 h-0.5 rounded-full bg-pencil mt-2.5 shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            </div>

            {/* Project Gallery */}
            {project.projectImages?.length > 1 && (
              <motion.section {...fadeIn} className="mb-20 ">
                <h2 className="text-lg font-semibold mb-6">Project Gallery</h2>
                <ImageCarousel images={project.projectImages} />
              </motion.section>
            )}
          </div>

          {/* Features */}
          {project.features && (
            <motion.section {...fadeIn} className="mb-20">
              <h2 className="text-lg font-semibold mb-6">Key Features</h2>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 px-4 bg-emerald-600/10 rounded-sm border border-emerald-600/10 text-sm"
                  >
                    <Asterisk
                      strokeWidth={1.5}
                      size={20}
                      className="text-emerald-800"
                    />
                    <span className="text-emerald-800 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.div {...fadeIn} className="flex justify-center">
            <Link
              href={"/"}
              className="bg-amber-500/60 text-pencil flex gap-2 font-yellow-tail items-center font-medium text-lg transition-all hover:bg-amber-500/50 -rotate-2 px-4 py-1"
            >
              <ArrowUpLeft size={18} /> Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;