"use client";

import Image from "next/image";
import {
  ArrowDownToDot,
  ArrowUpFromDot,
  PackageCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Works");

  const categories = [
    // Gearish
    {
      type: "Logo Design",
      color: "purple",
      image: "/new/gearish.jpg",
      client: "Gearish Ecommerce Logo",
      time: "1 Week",
      desc: "Logo design for GearishPk, an e-commerce brand, reflecting their modern and tech-driven identity.",
      slug: "gearish-branding",
      stats: [
        { label: "Brand Recognition", value: "+40%" },
        { label: "Social Engagement", value: "+35%" },
      ],
    },
    // MS Luxury Motors
    {
      type: "Website Design",
      color: "blue",
      image: "/new/ms_lm.jpg",
      client: "MS Luxury Motors LLC",
      time: "1.5 Month",
      desc: "Designed a sleek and intuitive limousine booking platform for a premium travel experience in Dubai.",
      slug: "mslm-booking",
      stats: [
        { label: "Bookings", value: "+60%" },
        { label: "Revenue", value: "+45%" },
      ],
    },
    // Silent Echoes
    {
      type: "Book Cover",
      color: "red",
      image: "/new/silent_echoes.jpg",
      client: "Silent Echoes Book Cover",
      time: "2 Weeks",
      desc: "Created a minimalist yet haunting book cover design, emphasizing the eerie and psychological elements of the novel.",
      slug: "silent-echoes-cover",
      stats: [
        { label: "Reader Interest", value: "+50%" },
        { label: "Sales Boost", value: "+35%" },
      ],
    },
    // Hiring Post
    {
      type: "Social Media Design",
      color: "blue",
      image: "/hhc-works/hiring/hp-2.png",
      client: "Hiring Post Deisgn for HHC",
      time: "3 Days",
      desc: "A hiring announcement post for the Head of Supplier Department, tailored for HHC's professional brand tone.",
      slug: "hhc-hiring-supplier-head",
      stats: [
        { label: "Reach", value: "+5K" },
        { label: "Applications", value: "+300" },
      ],
    },
    // Idan
    {
      type: "Logo Design",
      color: "red",
      image: "/new/idan.jpg",
      client: "Igal S. BJJ Logo",
      time: "1 Week",
      desc: "Personal brand logo for a young BJJ athlete, capturing their identity & spirit.",
      slug: "igal-s-branding",
      stats: [
        { label: "Brand Recognition", value: "+40%" },
        { label: "Social Engagement", value: "+35%" },
      ],
    },
    // MS Real Estate
    {
      type: "Website Design",
      color: "blue",
      image: "/new/ms_re.jpg",
      client: "MS Real Estate LLC",
      time: "1 Month",
      desc: "Redesigned a cleaner UI and migrated from WordPress to a full-stack solution for better UX and performance.",
      slug: "ms-real-estate",
      stats: [
        { label: "Load Time", value: "-50%" },
        { label: "Conversion", value: "+25%" },
      ],
    },
    // Glass Alibi v2
    {
      type: "Book Cover",
      color: "amber",
      image: "/new/glass_alibi_1.jpg",
      client: "The Glass Alibi Cover v2",
      time: "2 Weeks",
      desc: "An alternative version of 'The Glass Alibi' cover, incorporating a more cinematic and dramatic composition.",
      slug: "glass-alibi-cover-v2",
      stats: [
        { label: "Reader Interest", value: "+40%" },
        { label: "Sales Boost", value: "+25%" },
      ],
    },
    // Banner Design
    {
      type: "Banner Design",
      color: "blue",
      image: "/hhc-works/banners/FB_BANNER_1.png",
      client: "HHC Academy Banners",
      time: "1 Week",
      desc: "A series of playful and engaging banners for HHC's Children Company across platforms like YouTube, Facebook, and LinkedIn.",
      slug: "hhc-kids-banners",
      stats: [
        { label: "Brand Engagement", value: "+35%" },
        { label: "Visual Consistency", value: "100%" },
      ],
    },
    // Students Across Pak
    {
      type: "Social Media Design",
      color: "blue",
      image: "/hhc-works/pakistan-posts/Pakistan post 1.png",
      client: "Academy Marketing Post Design",
      time: "2 Days",
      desc: "A social media post celebrating that students join HHC Academy from all across Pakistan, highlighting diversity.",
      slug: "hhc-pakistan-students",
      stats: [
        { label: "Shares", value: "+80%" },
        { label: "Reach", value: "7K+" },
      ],
    },
    // Ohghad
    {
      type: "Website Design",
      color: "green",
      image: "/new/ohghad.jpg",
      client: "Ohghad Fundraiser Site",
      time: "1 Month",
      desc: "Designed and developed a secure fundraising platform to support humanitarian efforts in Ghana.",
      slug: "ohghad-platform",
      stats: [
        { label: "Donations", value: "+75%" },
        { label: "User Base", value: "2.1K" },
      ],
    },
    // Noblesoft
    // {
    //   type: "Website Design",
    //   color: "purple",
    //   image: "/new/noblesoft.jpg",
    //   client: "Noblesoft Agency Landing Page",
    //   time: "3 Weeks",
    //   desc: "Designed and developed a modern agency landing page that effectively showcases services and client success stories.",
    //   slug: "noblesoft-landing-page",
    //   stats: [
    //     { label: "Engagement Rate", value: "+55%" },
    //     { label: "Lead Generation", value: "+30%" },
    //   ],
    // },
    // Glass Alibi
    {
      type: "Book Cover",
      color: "cyan",
      image: "/new/glass_alibi.jpg",
      client: "The Glass Alibi Cover Design",
      time: "2 Weeks",
      desc: "Designed a suspenseful book cover featuring noir-inspired elements, reflecting the mystery and intrigue of the story.",
      slug: "glass-alibi-cover",
      stats: [
        { label: "Reader Interest", value: "+45%" },
        { label: "Sales Boost", value: "+30%" },
      ],
    },
    // Academy Carousel
    {
      type: "Social Media Design",
      color: "blue",
      image: "/hhc-works/not-a-course/Slide.png",
      client: "Conversion Focused Carousel",
      time: "1 Day",
      desc: "A 6-slide carousel post designed for multi-platform use to explain how HHC transforms students into visionary leaders.",
      slug: "hhc-visionary-leaders",
      stats: [
        { label: "Engagement Rate", value: "+60%" },
        { label: "Shares", value: "+120%" },
      ],
    },
    // CRM
    {
      type: "Website Design",
      color: "green",
      image: "/new/crm.jpg",
      client: "Lead Management CRM",
      time: "1.5 Month",
      desc: "Developed a secure and customizable CRM for teams to track leads, manage tasks, and optimize their sales pipeline.",
      slug: "custom-crm-solution",
      stats: [
        { label: "Lead Conversion", value: "+50%" },
        { label: "Team Efficiency", value: "+40%" },
      ],
    }, // Funnel Building
    {
      type: "Social Media Design",
      color: "blue",
      image: "/hhc-works/How Funnel Building Works.png",
      client: "Funnel Diagram Post Design",
      time: "3 Days",
      desc: "An informative post breaking down funnel-building strategy and the roadmap to becoming a visionary leader.",
      slug: "funnel-to-leader",
      stats: [
        { label: "Saves", value: "+200" },
        { label: "Reach", value: "9.2K" },
      ],
    },
    // Hubs Closing Announcement
    {
      type: "Social Media Design",
      color: "blue",
      image: "/hhc-works/Hubs Closing Announcement.png",
      client: "Announcement Post for HHC",
      time: "1 Day",
      desc: "A public holiday notice informing all suppliers and dropshippers about temporary closure of hubs.",
      slug: "hhc-hubs-closed",
      stats: [
        { label: "Awareness", value: "100%" },
        { label: "Delivery Queries Reduced", value: "-40%" },
      ],
    },
  ];

  const colorClasses = {
    blue: "bg-sky-600/80",
    green: "bg-green-500/80",
    purple: "bg-purple-500/80",
    red: "bg-red-500/80",
    amber: "bg-amber-500/80",
    cyan: "bg-cyan-500/80",
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMore = () => {
    if (visibleCount < categories.length) {
      setVisibleCount(visibleCount + 3);
    } else {
      setVisibleCount(3);
    }
  };

  const uniqueCategories = [
    "All Works",
    ...new Set(categories.map((item) => item.type)),
  ];

  const filteredCategories = categories.filter((category) =>
    selectedFilter === "All Works" ? true : category.type === selectedFilter
  );

  return (
    <div
      id="works"
      className="works-section px-[5%] py-12 pb-24 bg-background relative z-0"
    >
      <div className="h-full w-full absolute top-0 left-0 opacity-20 contrast-150 brightness-95">
        <Image
          src="/paper.avif"
          height={1000}
          width={1000}
          alt="background texture"
          className="h-full w-full object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between gap-4 max-sm:flex-col"
      >
        <div>
          <h2 className="flex items-center gap-2 max-lg:gap-2 text-2xl font-medium mb-2 font-yellow-tail relative z-10">
            <PackageCheck className="size-8 max-md:size-6" strokeWidth={1.8} />
            Case Studies
          </h2>
          <p className="text-pencil/80 mb-8">
            Here are some of my recent commissions and side projects.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-background-brighter/80 border border-pencil/15 px-4 py-2 rounded-lg hover:border-pencil/30 transition-colors">
            <span className="text-sm font-medium">{selectedFilter}</span>
            <ChevronDown className="size-4 text-pencil/60 group-hover:text-pencil transition-colors" />
          </button>
          <div className="absolute right-0 mt-2 py-2 w-48 bg-background-brighter border border-pencil/15 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedFilter(category)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-pencil/5 transition-colors ${
                  selectedFilter === category
                    ? "text-emerald-700"
                    : "text-pencil/90"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-8 max-md:gap-x-8 gap-y-16 max-sm:gap-y-12 mt-14">
        {filteredCategories.slice(0, visibleCount).map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={`/case-study/${category.slug}`}
              className="group rounded-lg"
            >
              <div className="group relative bg-background-brighter/80 p-4 border border-pencil/15 shadow-sm hover:shadow-lg rounded-lg hover:border-pencil/20 transition-all">
                <div
                  className={`absolute -top-7 pb-8 -z-10 left-5 text-background-brighter ${
                    colorClasses[category.color]
                  } px-3 py-1 text-sm font-medium`}
                >
                  {category.type}
                </div>
                <div className="aspect-[16/10] mb-4 overflow-hidden rounded-md">
                  <Image
                    src={category.image}
                    height={1000}
                    width={1000}
                    alt={category.client || category.type}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base line-clamp-1 font-semibold">
                      {category.client || category.type}
                    </h3>
                    <span className="text-sm text-pencil/60">
                      {category.time}
                    </span>
                  </div>

                  <p className="text-pencil/80 line-clamp-2 text-sm">
                    {category.desc}
                  </p>

                  {/* <div className="grid grid-cols-2 gap-4 pt-2">
                    {category.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-background/50 p-2 rounded-lg text-center"
                      >
                        <div className="text-lg font-semibold">
                          {stat.value}
                        </div>
                        <div className="text-xs text-pencil/60">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div> */}

                  <div className="flex items-center justify-end pt-2 text-pencil/60 group-hover:text-pencil transition-colors">
                    <span className="text-sm">View Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredCategories.length > 3 && (
        <motion.div
          className="flex items-center justify-center mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            className="font-yellow-tail flex items-center gap-2 -rotate-2 bg-emerald-500/60 hover:bg-emerald-500/40 px-4 py-1 text-lg transition-all"
            onClick={handleShowMore}
          >
            {visibleCount < categories.length ? (
              <>
                Show More
                <ArrowDownToDot
                  className="size-5 text-pencil/90"
                  strokeWidth={2.2}
                />
              </>
            ) : (
              <>
                Show Less
                <ArrowUpFromDot
                  className="size-5 text-pencil/90"
                  strokeWidth={2.2}
                />
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
