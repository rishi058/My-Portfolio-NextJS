import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-primary-500 font-semibold" : "text-on-surface-variant font-medium";

  return (
    <button onClick={selectTab} className="group relative transition-colors duration-200">
      <p className={`text-body-md hover:text-primary-500 ${buttonClasses} transition-colors duration-200`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-[2px] bg-primary-500 absolute bottom-0 left-0"
      ></motion.div>
    </button>
  );
};

export default TabButton;
