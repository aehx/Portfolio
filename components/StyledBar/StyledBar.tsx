import { motion } from "framer-motion";

const StyledBar = ({
  direction,
  className,
  delay,
  duration,
  secondBarDelay,
  secondBarDuration,
}: {
  direction: string;
  className: string;
  delay: number;
  duration: number;
  secondBarDelay: number;
  secondBarDuration: number;
}) => {
  return (
    <motion.div
      initial={{ width: 0, height: 2, backgroundColor: "#d4d4d8" }}
      animate={{ width: "80%", height: 2, backgroundColor: "#d4d4d8" }}
      transition={{ delay, duration, type: "easeIn" }}
      className={className}
    >
      <span className="relative block w-full">
        <motion.div
          className={`absolute top-0 right-0 ${
            direction === "left" ? "left-0" : "right-0"
          }`}
          initial={{ width: 0, height: 6, backgroundColor: "#d4d4d8" }}
          animate={{ width: "60px", height: 6, backgroundColor: "#d4d4d8" }}
          transition={{
            delay: secondBarDelay,
            duration: secondBarDuration,
            type: "easeOut",
          }}
        />
      </span>
    </motion.div>
  );
};

export default StyledBar;