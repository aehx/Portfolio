"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ProjectVideoForPc = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const handleClick = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <motion.video
      ref={videoRef}
      src={src}
      controls
      className="h-[500px] absolute bottom-1/4 left-[15%] rounded-lg "
      id="video"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 3, type: "easeIn" }}
    />
  );
};

export default ProjectVideoForPc;
