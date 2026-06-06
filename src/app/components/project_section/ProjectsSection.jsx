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
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Adapt items per page to screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(4);        // mobile: 1-col grid
      else if (w < 1024) setItemsPerPage(6);  // tablet: 2-col grid
      else setItemsPerPage(8);                // desktop: 4-col grid
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

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
    <section id="projects" className="sm:py-4 h-full w-full flex flex-col justify-start md:justify-center">
      {/* Inner wrapper — centers the whole block vertically on md+ */}
      <div className="flex flex-col w-full">
        <h2 className="section-heading flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-6">
          <span className="section-heading-icon material-symbols-outlined text-3xl">code</span>
          My Projects
        </h2>
        <div className="flex flex-row justify-center items-center gap-3 sm:gap-3 mb-8 sm:mb-6 flex-wrap">
          {uniqueTags.map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </div>

        <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-6 w-full">
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

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10 sm:mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-btn p-2"
              aria-label="Previous Page"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <span className="pagination-text">
              {currentPage} <span className="pagination-text-dim">/ {totalPages}</span>
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="pagination-btn p-2"
              aria-label="Next Page"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
