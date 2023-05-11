import { motion } from "framer-motion";

const SimpleStyledBar = ({
  size,
  className,
  delay,
}: {
  size: string;
  className: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ width: 0, height: 5, backgroundColor: "black" }}
      animate={{ width: `${size}`, height: 5, backgroundColor: "black" }}
      transition={{ delay: delay, duration: 0.7 }}
      className={className}
    />
  );
};

export default SimpleStyledBar;
