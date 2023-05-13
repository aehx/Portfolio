import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowUp from "../ArrowUp";
import SeparationBar from "../StyledBar/SeparationBar";
import Paragraph from "../TextComponent/Paragraphe";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../StyledButton/StyledButton";
import StyledCard from "../StyledCard/StyledCard";
import ProjectPictureForPc from "./projectFrameForPc";

const MoviesDistrict = ({ device }: { device: string }) => {
  const [isClicked, setIsClicked] = useState(false);
  const initialWidth = "30px";
  const initialHeight = "30px";
  const targetWidth = isClicked ? "50%" : "30px";
  const targetHeight = isClicked ? "50%" : "30px";
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      {device !== "pc" && (
        <motion.div
          className="flex justify-center items-center fixed bottom-0 left-0 bg-white rounded-full z-50"
          initial={{ width: initialWidth, height: initialHeight }}
          animate={{ width: targetWidth, height: targetHeight }}
          transition={{ duration: 2 }}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faEye} />
        </motion.div>
      )}
      {device === "pc" && <ProjectPictureForPc src="/movies_district.png" />}
      <div
        className="flex flex-col item-center w-screen lg:w-1/2 pt-[20%] lg:pt-[20%] z-10 [&>*]:mb-3 relative pb-20"
        id="containerTop"
        style={{ scrollBehavior: "smooth" }}
      >
        <span className="absolute top-0"></span>
        <StyledCard firstWord="Movies" secondWord="District" thirdWord="🍿🎬" />
        <SeparationBar />
        <Paragraph
          title="Le projet"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
delectus, fugit voluptas explicabo suscipit, voluptatum nobis
repellendus accusamus inventore porro dolorem praesentium
temporibus cum impedit error dolores, quibusdam illum nostrum odit
aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
unde assumenda laborum recusandae. Tempora rem molestias possimus
aperiam pariatur."
        />
        <SeparationBar />
        <Paragraph
          title="Techno utilisées"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
delectus, fugit voluptas explicabo suscipit, voluptatum nobis
repellendus accusamus inventore porro dolorem praesentium
temporibus cum impedit error dolores, quibusdam illum nostrum odit
aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
unde assumenda laborum recusandae. Tempora rem molestias possimus
aperiam pariatur."
        />
        <ArrowUp scrollTo="containerTop" />
      </div>
    </>
  );
};

export default MoviesDistrict;
