"use client";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const ProjectVideoForMobile = ({ src }: { src: string }) => {
  const [isClicked, setIsClicked] = useState(false);
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
    <div
      className={`flex flex-col justify-center items-center fixed bottom-[10%] left-[2%] w-[20vw] h-[10vh] z-50`}
    >
      <div className="flex flex-col items-center">
        {!isClicked && (
          <>
            <FontAwesomeIcon
              icon={faPlay}
              size="2xl"
              className={`text-zinc-300 cursor-pointer absolute top-[40%] -z-10`}
              onClick={enterFullscreen}
            />
          </>
        )}
      </div>
      <video
        ref={videoRef}
        src={src}
        className="h-[20vh] w-full rounded-lg"
        id="video"
        preload="auto"
        onClick={enterFullscreen}
      />
    </div>
  );
};

export default ProjectVideoForMobile;
