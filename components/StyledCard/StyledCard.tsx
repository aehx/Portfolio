"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { globalDivVariant, textVariant } from "./CardMotion";
import StyledBar from "../StyledBar/StyledBar";
import SimpleStyledBar from "../StyledBar/SimpleStyledBar";

const StyledCard = () => {
  const [width, setWidth] = useState(1);

  return (
    <motion.section
      className="flex flex-col items-center justify-between p-10 lg:p-24 min-h-screen"
      initial="initial"
      animate="end"
      exit="exit"
      transition={{ delay: 5 }}
    >
      <div className="flex flex-col justify-center items-center w-[85vw] sm:max-w-[50vw] lg:max-w-[25vw] xl:max-w-[20vw] 2xl:max-w-[20vw] min-h-[70vh] lg:min-h-[50vh]  2xl:min-h-[40vh] relative p-10">
        <StyledBar
          direction="right"
          className="absolute top-[15%]"
          delay={0.7}
          duration={0.6}
          secondBarDelay={1}
          secondBarDuration={0.4}
        />
        <SimpleStyledBar
          size="40%"
          className="absolute right-[10%] top-[38%]"
          delay={2.7}
        />
        <SimpleStyledBar
          size="80%"
          className="absolute left-[10%] bottom-[38%]"
          delay={1.7}
        />
        <StyledBar
          direction="left"
          className="absolute bottom-[15%]"
          delay={1.2}
          duration={0.9}
          secondBarDelay={1.4}
          secondBarDuration={0.4}
        />
        <motion.div
          initial={{ height: "0px", width: width }}
          animate={{ height: "100%", width: width }}
          onAnimationComplete={() => {
            setWidth(0);
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`absolute bottom-0 ${width !== 0 ? "bg-zinc-200" : ""}`}
        />
        <motion.div
          className="absolute bottom-0"
          variants={globalDivVariant}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.p
          variants={textVariant}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="absolute top-[27%] left-[10%] text-3xl"
        >
          WELCOME
        </motion.p>
        <motion.p
          variants={textVariant}
          transition={{ delay: 2.5, duration: 2 }}
          className="absolute top-[46%] right-[10%] text-3xl"
        >
          IN MY
        </motion.p>
        <motion.p
          variants={textVariant}
          transition={{ delay: 3, duration: 2 }}
          className="absolute top-[66%] left-[10%] text-3xl"
        >
          PORTFOLIO
        </motion.p>
      </div>

      <p>L&apos;entrée est ici</p>
      <div></div>
    </motion.section>
  );
};

export default StyledCard;
