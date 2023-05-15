import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import StyledButton from "../StyledButton/StyledButton";
import Image from "next/image";
import { useState } from "react";

const ProjectPictureForMobile = ({ src }: { src: string }) => {
  const [isClicked, setIsClicked] = useState(false);
  const initialWidth = "18%";
  const initialHeight = "12%";
  const initialBorder = "0%";
  const targetBorder = isClicked ? "10%" : "30%";
  const targetWidth = isClicked ? "100%" : "18%";
  const targetHeight = isClicked ? "80%" : "12%";
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      className={`flex justify-center items-center fixed ${
        !isClicked ? "bottom-[10%] left-[2%]" : "bottom-[5%] left-[2%]"
      } z-50`}
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
      <div className="flex flex-col justify-evenly py-10 h-full items-center w-screen">
        <FontAwesomeIcon
          icon={!isClicked ? faEye : faTimes}
          onClick={handleClick}
          className={`cursor-pointer text-white ${
            isClicked ? "border-2 w-5 h-5 p-2 border-zinc-200 rounded-full" : ""
          } z-50`}
          size="xl"
        />

        <span></span>
        <Image
          src={src ? src : ""}
          fill
          alt="Picture of the project"
          className={`object-contain ${
            isClicked ? "rounded-lg" : "rounded-lg"
          }`}
          onClick={handleClick}
        />
        {isClicked && (
          <StyledButton
            text="visit website"
            href="https://movies-district.vercel.app/"
            className="py-5"
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectPictureForMobile;
