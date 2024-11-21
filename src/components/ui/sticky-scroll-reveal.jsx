import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
   
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
       
      }}
      className="h-[45rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 no-visible-scrollbar"
      ref={ref}>
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div 
              key={item.title + index} 
              className="my-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : 20,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h2
                className="text-4xl font-bold  mb-6"> 
                {item.title}
              </motion.h2>
              <motion.p
                className="text-lg text-/80 max-w-sm"> 
                {item.description}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-100" />
        </div>
      </div>
      <motion.div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-[25rem] w-[30rem] rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.3 }
        }}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};