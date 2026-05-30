import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const FALLBACK_IMG = "/images/projects/fall_back.png";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const resolvedImg = imgUrl || FALLBACK_IMG;
  return (
    <div className="w-full bg-surface border border-outline rounded-md overflow-hidden group hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:scale-[1.02] transition-all duration-300 shadow-md flex flex-col relative z-10 hover:z-20">
      <div
        className="h-40 md:h-44 w-full relative overflow-hidden"
        style={{ background: `url(${resolvedImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center absolute inset-0 transition-opacity duration-300">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              className="h-10 w-10 mr-3 border border-outline rounded-md bg-surface text-on-surface-variant hover:text-primary-500 hover:border-primary-500/50 flex items-center justify-center transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="h-5 w-5" />
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              className="h-10 w-10 border border-outline rounded-md bg-surface text-on-surface-variant hover:text-primary-500 hover:border-primary-500/50 flex items-center justify-center transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
      <div className="bg-surface p-4 flex-grow flex flex-col border-t border-outline/30">
        <h5 className="text-base font-bold text-on-surface mb-1 line-clamp-1">{title}</h5>
        <p className="text-on-surface-variant text-body-sm font-body-sm leading-relaxed line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
