import { motion } from "framer-motion";
import Image from "next/image";
import StyledButton from "../StyledButton/StyledButton";

const ProjectPictureForPc = ({ src }: { src: string }) => {
  return (
    <>
      <motion.div
        className={`flex justify-center items-center absolute bottom-1/4 left-10 bg-white w-[60vw] max-h-screen aspect-video border-3 bg-transparent`}
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        whileHover={{ scale: 1.03, transition: { duration: 1 } }}
        transition={{ duration: 3 }}
      >
        <Image
          src={src}
          fill
          alt="Picture of the project"
          className="object-cover"
        />
        <div className="absolute -bottom-20">
          <StyledButton
            href="https://movies-district.vercel.app/"
            text="Visit Movies District"
            className="flex justify-center items-center py-5"
            blank="_blank"
          />
        </div>
      </motion.div>
    </>
  );
};
export default ProjectPictureForPc;
