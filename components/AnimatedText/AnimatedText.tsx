"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedText = ({
  text,
  className,
  justify,
  staggerChildren,
  delay,
  showButtonAfter,
  end,
}: {
  text: string;
  className: string;
  justify?: string;
  staggerChildren: number;
  delay: number;
  showButtonAfter?: boolean;
  end?: (lastAnimation: boolean) => void;
}): JSX.Element => {
  const [word, setWord] = useState<React.ReactNode | null>(null);
  const words = text.split(" ");

  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
      },
    },
  };

  const wordVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setWord(
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variant}
          onAnimationComplete={() => {
            showButtonAfter && end && end(true);
          }}
          className={`flex flex-wrap ${
            justify ? `justify-${justify}` : "justify-evenly lg:justify-center"
          } [&>*]:mb-1`}
        >
          {words.map((word, key) => (
            <motion.span
              className={`mr-1 ${className} text-zinc-200`}
              key={key}
              variants={wordVariant}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      );
    }, delay * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return word ? <>{word}</> : <></>;
};

export default AnimatedText;
