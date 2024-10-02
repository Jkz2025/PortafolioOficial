'use client'

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion-transition";

interface MotionTransitionProps {
  children: React.ReactNode;
  position: "right" | "bottom";
  className?: string
}

const MotionTransition: React.FC<MotionTransitionProps> = ({ children, position, className }) => {
  return (
    <motion.div 
      className={className}
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;