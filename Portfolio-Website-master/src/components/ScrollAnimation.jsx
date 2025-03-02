import React, { useEffect, useState } from "react"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ScrollAnimationFromLeft = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollAnimationFromRight = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollAnimationFromBottom = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollAnimationFromTop = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const BouncingAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        y: [0, -10, 0],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const AutoTypeText = ({ text, interval }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const typingInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex === text.length + 1) {
          isDeleting = true;
          currentIndex--;
        }
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex--;
        if (currentIndex === 0) {
          isDeleting = false;
          currentIndex++;
        }
      }
    }, interval);

    return () => clearInterval(typingInterval);
  }, [text, interval]);

  return <motion.span>{typedText}</motion.span>;
};

