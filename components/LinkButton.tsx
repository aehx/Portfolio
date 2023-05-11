"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type LinkButtonProps = {
  href: string;
  text: string;
  className?: string;
};

const LinkButton = ({ href, text, className }: LinkButtonProps) => {
  const style = `${className} ` ?? "";
  return (
    <Link href={href} className={style}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        {text}
      </motion.p>
    </Link>
  );
};

export default LinkButton;
