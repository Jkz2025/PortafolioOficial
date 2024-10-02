"use client"

import { transitionVariantsPage } from "../utils/motion-transition";
import { motion, AnimatePresence} from 'framer-motion'

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full 
            w-creen z-30 bg-[#163934]"
          variants={transitionVariantsPage}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;
