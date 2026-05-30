"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [tag, setTag] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjectsData(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentPage(1); // Reset to first page on tag change
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  const tagsSet = new Set(projectsData.flatMap((project) => project.tag));
  tagsSet.delete("Featured");
  const uniqueTags = ["Featured", ...Array.from(tagsSet)];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8 h-full w-full flex flex-col justify-center">
      <h2 className="text-headline-lg font-headline-lg text-on-surface flex items-center justify-center gap-3 mb-6 text-primary-500">
        <span className="material-symbols-outlined text-primary-500 text-3xl ">code</span>
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-3 mb-8 flex-wrap">
        {uniqueTags.map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {currentProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-outline text-on-surface hover:bg-surface-variant hover:text-primary-500 disabled:opacity-50 disabled:hover:bg-transparent transition-all"
            aria-label="Previous Page"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <span className="text-on-surface-variant text-body-md font-medium">
            {currentPage} <span className="opacity-50">/ {totalPages}</span>
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-outline text-on-surface hover:bg-surface-variant hover:text-primary-500 disabled:opacity-50 disabled:hover:bg-transparent transition-all"
            aria-label="Next Page"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
