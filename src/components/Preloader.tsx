import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
    >
      <div className="flex space-x-3">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-6xl font-bold tracking-wider text-secondary"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
