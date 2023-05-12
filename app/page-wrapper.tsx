"use client";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, backgroundColor: "#FFF" }}
          animate={{
            opacity: 1,
            backgroundColor: "transparent",
          }}
          exit={{
            opacity: 0.5,
            backgroundColor: "#FFF",
          }}
          transition={{ duration: 2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
