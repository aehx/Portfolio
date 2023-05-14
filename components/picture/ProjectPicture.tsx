"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectPicture = ({ src }: { src: string }) => {
  const [picture, setPicture] = useState<null | any>(null);
  const boxVariant = {
    start: { width: 1, height: 1 },
    end: { width: 150, height: 150 },
  };
  useEffect(() => {
    const x = <Image src={src} alt="project picture" fill />;
    if (x) {
      setPicture(x);
    }
    console.log(x);
  }, []);
  return (
    <motion.div
      className="relative w-24 h-24"
      initial="start"
      animate="end"
      variants={boxVariant}
      transition={{ duration: 0.5 }}
    >
      {picture ? picture : <div className="bg-red-500">coming...</div>}
      <div
        className="absolute bottom-0 -left-2 h-full bg-red-50"
        style={{
          borderRightWidth: "1px",
          borderColor: "#d4d4d8",
          borderImage:
            "linear-gradient(to bottom, #181818, #d4d4d8, #181818) 1 100%",
        }}
      />
      <div
        className="absolute bottom-0 -right-1 h-full bg-red-50"
        style={{
          borderRightWidth: "1px",
          borderColor: "#d4d4d8",
          borderImage:
            "linear-gradient(to bottom, #181818, #d4d4d8, #181818) 1 100%",
        }}
      />
    </motion.div>
  );
};

export default ProjectPicture;
