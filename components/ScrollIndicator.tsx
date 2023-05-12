import { motion } from "framer-motion";

const ScrollIndicator = ({ className }: { className: string }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="w-[2px] h-[20px] bg-zinc-200 opacity-50" />
        <motion.div
          initial={{
            opacity: 0,
            width: "100%",
            height: 0,
            backgroundColor: "rgb(255,255,255)",
          }}
          animate={{
            backgroundColor: "rgb(255,255,255)",
            width: "100%",
            opacity: 1,
            height: 20,
          }}
          exit={{
            opacity: 0,
            width: "100%",
            height: 0,
            backgroundColor: "rgb(255,255,255)",
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 z-10 absolute top-0"
        />
        <p className="absolute bottom-0 left-2 text-xs text-zinc-200">SCROLL</p>
      </div>
    </>
  );
};

export default ScrollIndicator;
