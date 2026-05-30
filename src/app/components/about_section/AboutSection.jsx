"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { useRive } from "@rive-app/react-canvas";
import { motion, AnimatePresence } from "framer-motion";
import BorderGlow from "../border_glow/BorderGlow";

const SKILLS = [
  "C / C++",
  "Flutter / Dart",
  "HTML / CSS",
  "Javascript",
  "React JS", "Next JS", "Node JS", "Vue",
  "Firebase", "Mongo DB", "PostgreSQL", "MySQL",
  "Golang",
  "Python",
];

const EDUCATION = [
  { title: "B.Tech in CSE", subtitle: "IIIT Bhagalpur", date: "2021-2025" },
  { title: "Class XII (CBSE)", subtitle: "Adarsh Vikas Vidyalaya (89%)", date: "2018-2020" },
  { title: "Class X (CBSE)", subtitle: "JMV Residential School (89.8%)", date: "2020" },
];

const EXPERIENCE = [
  { title: "Software Engineer", subtitle: "INFOSYS", date: "2025-present" },
  { title: "Data Analyst Intern", subtitle: "SanDisk", date: "Jan 2025 - June 2025" },
  { title: "Flutter Developer Intern", subtitle: "Startup", date: "2023 (3 months)" },
  { title: "Lead @ App Dev Club", subtitle: "IIT Bhagalpur", date: "2023-2024" },
];

const Stepper = ({ items }) => {
  return (
    <div className="relative ml-3 mt-4">
      {/* Vertical line with shimmer animation */}
      <div className="stepper-line absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div
          className="stepper-shimmer absolute left-0 right-0 h-1/3"
          animate={{ top: ["133%", "-33%"] }} 
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="mb-8 ml-6 relative"
        >
          {/* Timeline Dot — centered on the line: ml-6=1.5rem, dot w-3=0.75rem → offset=1.5-0.375=1.125rem */}
          <span className="stepper-dot absolute w-3 h-3 -left-[1.800rem] top-1"></span>

          <h3 className="stepper-title flex items-center mb-1">{item.title}</h3>
          <time className="stepper-date block mb-2">{item.date}</time>
          <p className="stepper-subtitle">{item.subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap gap-3 mt-4"
      >
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="skill-chip px-4 py-2"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: <Stepper items={EDUCATION} />,
  },
  {
    title: "Professional Experience",
    id: "profession",
    content: <Stepper items={EXPERIENCE} />,
  },
];

const ABOUT_ME = "Engineer focused on building scalable and reliable systems across backend, frontend, mobile apps, and agentic AI workflows. Interested in system design, performance optimization, automation, and creating intuitive developer and user experiences. Experienced in redesigning architectures, troubleshooting complex issues, and turning ideas into efficient, production-ready solutions. 🚀";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const { RiveComponent } = useRive({
    src: "/rive/15624-29463-littleboy.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-8 h-full w-full flex items-center" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch max-w-7xl mx-auto w-full">

        {/* Left Side: Avatar & Intro */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <BorderGlow
            className="about-avatar-glow w-72 h-72 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px]"
            borderRadius={9999}
            animated
            backgroundColor="transparent"
            fillOpacity={0}
            colors={['#14b8a6', '#0ea5e9', '#3b82f6']}
          >
            <div className="w-full h-full rounded-full overflow-hidden relative flex items-center justify-center">
              {RiveComponent ? <RiveComponent className="w-full h-full object-contain" /> : <div className="w-full h-full animate-pulse" style={{ backgroundColor: 'var(--outline-variant)' }} />}
            </div>
          </BorderGlow>
          <div className="mt-8 text-center space-y-2">
            <h3 className="about-intro-heading">
              Get to know me..
            </h3>
          </div>
        </div>

        {/* Right Side: About & Tabs */}
        <div className="lg:col-span-7 text-left flex flex-col h-full justify-start mt-8 lg:mt-0">
          <h2 className="section-heading mb-6 flex items-center gap-3">
            <span className="section-heading-icon material-symbols-outlined text-4xl">person</span> 
            About Me
          </h2>
          <p className="about-description">
            {ABOUT_ME}
          </p>

          <div className="flex flex-row justify-start mt-10 gap-6 overflow-x-auto no-scrollbar">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <span className="tab-label">Skills</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              <span className="tab-label">Education</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("profession")}
              active={tab === "profession"}
            >
              <span className="tab-label">Experience</span>
            </TabButton>
          </div>

          <div className="tab-content mt-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
