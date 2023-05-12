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
      initial={{ width: 0, height: 4, backgroundColor: "#e0e0e7" }}
      animate={{ width: `${size}`, height: 4, backgroundColor: "#e0e0e7" }}
      transition={{ delay: delay, duration: 0.7 }}
      className={className}
    />
  );
};

export default SimpleStyledBar;
