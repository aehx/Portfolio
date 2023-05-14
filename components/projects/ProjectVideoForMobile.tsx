"use client";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ProjectVideoForMobile = ({ src }: { src: string }) => {
  const [isClicked, setIsClicked] = useState(false);
  const initialWidth = "18%";
  const initialHeight = "12%";
  const initialBorder = "0%";
  const targetBorder = isClicked ? "10%" : "30%";
  const targetWidth = isClicked ? "100%" : "18%";
  const targetHeight = isClicked ? "92%" : "12%";
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
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
    <motion.div
      className={`flex flex-col justify-center items-center fixed bottom-[10%] left-[2%] z-50`}
      initial={{
        borderRadius: initialBorder,
        width: initialWidth,
        height: initialHeight,
        backgroundColor: "transparent",
      }}
      animate={{
        borderRadius: targetBorder,
        width: targetWidth,
        height: targetHeight,
        backgroundColor: "transparent",
      }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center">
        {!isClicked && (
          <p className="font-serif mr-2 text-zinc-300">See the demo</p>
        )}
        <FontAwesomeIcon
          icon={!isClicked ? faEye : faTimes}
          size="2xl"
          onClick={handleClick}
          className={`text-zinc-300 cursor-pointer ${
            isClicked ? "absolute top-[3%] right-[10%]" : "absolute top-[45%]"
          } z-50`}
        />
      </div>
      <motion.video
        ref={videoRef}
        src={src}
        controls
        className="h-full w-full rounded-lg"
        id="video"
      />
    </motion.div>
  );
};

export default ProjectVideoForMobile;
