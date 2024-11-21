import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 ms-auto  md:grid-cols-2 lg:grid-cols-3 py-10 px-20", className)}>
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-100 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className={item?.className} img={item?.img}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};


export const Card = ({ className, img, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white-50 shadow-lg border border-transparent relative",
        "font-['Inter'] flex flex-col",
        className
      )}
    >
      {img && (
        <div className="absolute top-4 right-4 z-10">
          <img
            src={img}
            alt="Card visual"
            className="w-24 h-24 object-cover rounded-lg sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>
      )}
      <div className="relative z-50 flex-grow">
        <div className="p-4">{children}</div>
      </div>
      {console.log(className)}
      <CardFooter className={className} />
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-2xl font-bold text-zinc-900",
        "tracking-tight",
        "mb-3 pb-2",
        "border-b border-zinc-200",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-base text-zinc-600",
        "font-['Inter']",
        "tracking-wide leading-relaxed",
        "font-normal",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardFooter = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        "border-t border-zinc-200",
        className
      )}
    >
      <button
        className={cn(
          "px-4 py-2 bg-blue-500 text-white mt-3",
          "rounded-lg hover:bg-blue-600",
          "transition-colors duration-300",
          "text-sm font-semibold"
        )}
      >
        Get Started
      </button>
    </div>
  );
};