import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.8,
      transition: { duration: 0.2 }
    },
    hover: { 
      scale: 1.1,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  const arrowVariants = {
    initial: { y: 0 },
    hover: {
      y: -3,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.6
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 0, opacity: 0.8 },
    animate: {
      scale: 1.5,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Pulsing background effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-red-500"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          />
          
          <motion.button
            onClick={scrollToTop}
            className="relative bg-red-600 text-white p-3 rounded-full shadow-lg"
            aria-label="Back to top"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              variants={arrowVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
            >
              <FaArrowUp size={20} />
            </motion.div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}