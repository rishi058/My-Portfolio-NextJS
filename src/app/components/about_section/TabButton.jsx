import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "tab-button--active" : "tab-button";

  return (
    <button onClick={selectTab} className="group relative">
      <p className={`${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tab-underline h-[2px] absolute bottom-0 left-0"
      ></motion.div>
    </button>
  );
};

export default TabButton;
