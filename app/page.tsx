"use client";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import StyledButton from "@/components/StyledButton/StyledButton";
import { motion } from "framer-motion";
import { useState } from "react";
import PageWrapper from "./page-wrapper";
import Planet from "@/components/Planet/Planet";

export default function Welcome() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  return (
    <PageWrapper>
      <div className="flex flex-col items-center w-screen max-h-screen relative">
        <Planet isInactive={isInactive} />
        <motion.div className="flex flex-col justify-center items-center w-[85vw] sm:w-[50vw] lg:max-w-[27vw] absolute top-[10%] lg:top-[25%] overflow-hidden [&>*]:mb-3 pt-[20%]">
          <AnimatedText
            text="Kevin's website"
            staggerChildren={0.9}
            delay={1}
            className="text-2xl"
          />
          <div className="[&>*]:mb-5">
            <AnimatedText
              text="Welcome to my website. Here, you can explore my portfolio, discover my skills, and learn more about me. If you find my projects interesting or would like to get in touch, please visit the dedicated contact section."
              staggerChildren={0.1}
              delay={2.8}
              showButtonAfter={true}
              className="text-sm font-serif"
            />
            <AnimatedText
              text="Thank you for visiting, and enjoy your browsing experience."
              staggerChildren={0.1}
              delay={6.5}
              showButtonAfter={true}
              className="text-sm font-serif"
              justify="center"
              end={(event) => {
                setIsAnimationComplete(event);
              }}
            />
          </div>
          {isAnimationComplete && (
            <div onClick={() => setIsInactive(true)}>
              <StyledButton
                href="/home"
                text="ENTER SITE"
                className="cursor-pointer w-full pb-2 pt-6 pr-16 pl-3 text-[10px] font-semibold"
              />
            </div>
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
