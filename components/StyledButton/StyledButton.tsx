"use client";
import { motion } from "framer-motion";
import LinkButton from "../LinkButton";
import { useState } from "react";
import {
  buttonBorderTopMotion,
  buttonBorderRightMotion,
  buttonBorderBottomMotion,
  buttonBorderLeftMotion,
  littleBorderMotion,
} from "./ButtonMotions";

type LinkButtonProps = {
  href: string;
  text: string;
  className?: string;
  blank?: string;
};

const StyledButton = ({ href, text, className, blank }: LinkButtonProps) => {
  const [delay, setDelay] = useState(0.84);
  return (
    <motion.div
      className="flex justify-center items-center relative w-[190px]"
      whileHover="hover"
      initial="initial"
      animate="end"
      onAnimationComplete={() => {
        setDelay(0);
      }}
    >
      <motion.div
        className="absolute top-0 left-0 bg-black"
        transition={{ duration: 0.21, ease: "easeOut", delay: 0.21 }}
        variants={buttonBorderTopMotion}
      />
      <motion.div
        className="absolute top-0 right-0 bg-black"
        transition={{ duration: 0.21, ease: "easeOut", delay: 0.42 }}
        variants={buttonBorderRightMotion}
      />
      <motion.div
        className="absolute right-0 bottom-0 bg-black"
        transition={{
          duration: 0.21,
          ease: "easeOut",
          delay: delay === 0 ? delay : 0.63,
        }}
        variants={buttonBorderBottomMotion}
      />
      <motion.div
        className="absolute left-0 bottom-0 bg-black"
        transition={{
          duration: 0.21,
          ease: "easeOut",
          delay: delay === 0 ? delay : 0.84,
        }}
        variants={buttonBorderLeftMotion}
      />
      <motion.div
        className="absolute bottom-0 -left-[1%]"
        transition={{ duration: 0.21, ease: "easeOut", delay: delay }}
        variants={littleBorderMotion}
      />
      <LinkButton
        href={href}
        text={text}
        className={`${className}`}
        blank={blank}
        displayBottomBorder={false}
      />
    </motion.div>
  );
};

export default StyledButton;
