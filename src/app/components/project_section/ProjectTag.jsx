import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-primary-500 text-white border-primary-500 shadow-[0_0_15px_rgba(20,184,166,0.2)]"
    : "bg-surface text-on-surface-variant border-outline hover:text-on-surface hover:border-primary-500/50";
  return (
    <button
      className={`${buttonStyles} rounded-lg border px-5 py-2 text-label-sm font-label-sm cursor-pointer transition-all duration-200`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
