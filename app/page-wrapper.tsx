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
          initial={{ opacity: 0, background: "#000" }}
          animate={{
            opacity: 1,
            background: "#eee",
            transition: { duration: 3 },
          }}
          exit={{
            opacity: 0,
            background: "#555",
          }}
          transition={{ duration: 5, type: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
