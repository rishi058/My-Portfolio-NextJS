import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const FALLBACK_IMG = "/images/projects/fall_back.png";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const resolvedImg = imgUrl || FALLBACK_IMG;
  return (
    <div className="project-card w-full group flex flex-col relative z-10 hover:z-20">
      <div
        className="aspect-video w-full relative overflow-hidden"
        style={{ background: `url(${resolvedImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="project-card-overlay flex items-center justify-center absolute inset-0">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              className="project-card-action h-10 w-10 mr-3 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="h-5 w-5" />
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              className="project-card-action h-10 w-10 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
      <div className="project-card-body p-4 flex-grow flex flex-col">
        <h5 className="project-card-title mb-1">{title}</h5>
        <p className="project-card-desc">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
