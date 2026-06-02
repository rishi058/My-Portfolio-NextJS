import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`project-tag ${isSelected ? 'project-tag--selected' : ''} px-5 py-2`}
      onClick={() => onClick(name)}
    >
      <span className="project-tag-text">{name}</span>
    </button>
  );
};

export default ProjectTag;
