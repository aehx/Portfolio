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
  const targetHeight = isClicked ? "92%" : "12%";
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      className={`flex justify-center items-center fixed bottom-[10%] left-[2%] z-50`}
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
      <FontAwesomeIcon
        icon={!isClicked ? faEye : faTimes}
        onClick={handleClick}
        className={`text-white cursor-pointer ${
          isClicked ? "absolute top-[3%] right-[10%]" : ""
        } z-50`}
      />
      <Image
        src={src ? src : ""}
        fill
        alt="Picture of the project"
        className={`object-cover ${isClicked ? "rounded-lg" : "rounded-lg"}`}
      />
      {isClicked && (
        <StyledButton
          text="visit website"
          href="https://movies-district.vercel.app/"
          className="py-5"
        />
      )}
    </motion.div>
  );
};

export default ProjectPictureForMobile;
