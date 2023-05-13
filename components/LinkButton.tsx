"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkButtonProps = {
  href: string;
  text: string;
  className?: string;
  displayBottomBorder?: boolean;
  blank?: string;
};
export const buttonBorderBottomMotion = {
  initial: { width: 0, height: "3px", backgroundColor: "#a1a1aa" },
  hover: {
    width: "100%",
    height: "2px",
    transition: { duration: 0.3, type: "easeOut", delay: 0.1 },
  },
};

const LinkButton = ({
  href,
  text,
  className,
  displayBottomBorder,
  blank,
}: LinkButtonProps) => {
  const path = usePathname();
  const style = `relative ${className} ` ?? "relative";
  return (
    <Link
      rel="preload"
      href={href}
      className={style}
      target={`${blank ? "_blank" : ""}`}
    >
      <motion.div initial="hidden" whileHover="hover" animate="end">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          className={`${path === "/" ? "text-zinc-800" : "text-white"} text-sm`}
        >
          {text}
        </motion.p>
        {displayBottomBorder && (
          <motion.div
            className="absolute bottom-0 right-0 bg-white h-[2px]"
            variants={buttonBorderBottomMotion}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default LinkButton;
