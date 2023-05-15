import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const ArrowUp = ({
  scrollTo,
  className,
}: {
  className?: string;
  scrollTo: string;
}) => {
  return (
    <motion.a
      className={`flex justify-center items-center w-12 h-10 rounded-full border-x-2 border-zinc-300 cursor-pointer absolute ${
        className ? className : "bottom-[5%] lg:bottom-[2%] right-[5%]"
      }`}
      whileHover={{ y: -5, transition: { duration: 2 } }}
      onClick={(e) => {
        let target = document.getElementById(scrollTo);
        e.preventDefault();
        target && target.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} style={{ color: "#ffffff" }} />
    </motion.a>
  );
};

export default ArrowUp;
