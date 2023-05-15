"use client";
import { faEye, faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
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
    if (videoRef.current && !isClicked) {
      videoRef.current.play();
    }
    if (videoRef.current && isClicked) {
      videoRef.current.pause();
    }
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
  const enterFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      className={`flex flex-col justify-center items-center fixed bottom-[5%] left-[2%] z-50`}
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
          <>
            <p className="font-serif mr-2 text-zinc-100">Project</p>
            <FontAwesomeIcon
              icon={faPlay}
              size="2xl"
              onClick={enterFullscreen}
              className={`text-zinc-300 cursor-pointer absolute top-[40%] z-50`}
            />
          </>
        )}
      </div>
      <motion.video
        ref={videoRef}
        src={src}
        controls
        className="h-full w-full rounded-lg"
        id="video"
        preload="auto"
      />
    </motion.div>
  );
};

export default ProjectVideoForMobile;
