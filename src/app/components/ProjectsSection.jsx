"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Js Portfolio Website",
    description: "A responsive portfolio featuring dynamic animations to showcase a diverse range of projects.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Radio Player App",
    description: "Listen to Radio from all over world. It features Neumorphic UI & Hero animations",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rishi058/Radio_Payer_Global_Groove",
    previewUrl: "https://play.google.com/store/apps/details?id=com.devwizards.global_groove",
  },
  {
    id: 3,
    title: "Notes Box",
    description: "A Notes taking App with visually appealing UI, with dark & vibrant color scheme & staggered grid view layout",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rishi058/Notes-Box",
    previewUrl: "https://github.com/rishi058/Notes-Box",
  },
  {
    id: 4,
    title: "Doctor Appointment App",
    description: "Implemented real-time appointment scheduling, automated notifications, and email updates, ensuring seamless communication between patients and healthcare providers.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rishi058/Doctor-Appointment-Booking-App",
    previewUrl: "https://play.google.com/store/apps/details?id=com.devwizards.clinic",
  },
  {
    id: 5,
    title: "E-Commerce App",
    description: "Features Multiuser-roles, Google-O-Auth, Product Listing, Wishlist & Order product flow",
    image: "/images/projects/5.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rishi058/E-Commerce",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Discussify Chat App",
    description: "Features Real time communication using Web Socket, User Authentication, Animated Dark Mode & Responsive UI",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rishi058/Discussify-Chat-App-TypeScript",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Notes App(Vite & React)",
    description: "Features CRUD functionality with MongoDB, JWT Based Authentication, Glassmorphic & Responsive UI with Particles.js background",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rishi058/-Vite-React-Notes-App",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Recursion Visualizer",
    description: "A powerful tool designed to help developers easily visualize and debug the recursion stack, enhancing understanding and efficiency in solving complex Recursive and Dynamic programming problems.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rishi058/Recursion_Visualizer",
    previewUrl: "https://recursion-visualizer-nu.vercel.app",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
