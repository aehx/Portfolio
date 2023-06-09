import { motion } from "framer-motion";
import Image from "next/image";
import StyledButton from "../StyledButton/StyledButton";

const PictureOfMoviesForPc = ({ src }: { src: string }) => {
  return (
    <>
      <motion.div
        className={`flex justify-center items-center fixed bottom-[20%] left-[3%] bg-white w-[60vw] max-h-screen aspect-video bg-transparent`}
        initial={{ x: "-100%", backgroundColor: "transparent" }}
        animate={{ x: "0%", backgroundColor: "transparent" }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 1 },
          backgroundColor: "transparent",
        }}
        transition={{ duration: 3 }}
      >
        <Image
          src={src}
          fill
          alt="Picture of the project"
          className="object-cover"
          priority={true}
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
export default PictureOfMoviesForPc;
