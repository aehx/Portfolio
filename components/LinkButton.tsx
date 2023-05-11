"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type LinkButtonProps = {
  href: string;
  text: string;
  className?: string;
};
export const buttonBorderBottomMotion = {
  initial: { width: 0, height: "3px", backgroundColor: "#a1a1aa" },
  hover: {
    width: "100%",
    height: "2px",
    transition: { duration: 0.3, type: "easeOut", delay: 0.1 },
  },
};

const LinkButton = ({ href, text, className }: LinkButtonProps) => {
  const style = `relative ${className} ` ?? "relative";
  return (
    <Link href={href} className={style}>
      <motion.div initial="hidden" whileHover="hover" animate="end">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          {text}
        </motion.p>
        <motion.div
          className="absolute bottom-0 right-0 bg-black h-[2px]"
          variants={buttonBorderBottomMotion}
        />
      </motion.div>
    </Link>
  );
};

export default LinkButton;
