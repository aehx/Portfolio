"use client";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import StyledButton from "@/components/StyledButton/StyledButton";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import PageWrapper from "./page-wrapper";
import Planet from "@/components/Planet/Planet";

export default function Welcome() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <PageWrapper>
      <div className="flex flex-col items-center w-screen min-h-screen relative ">
        <Planet />
        <motion.div className="flex flex-col justify-center items-center w-[85vw] sm:w-[50vw] lg:max-w-[27vw] absolute top-[10%] lg:top-[25%] overflow-hidden [&>*]:mb-3">
          <AnimatedText
            text="Kevin's website"
            staggerChildren={0.9}
            delay={1}
            className="text-2xl"
          />
          <div className="[&>*]:mb-5">
            <AnimatedText
              text="Bienvenue sur mon portfolio, vous y trouverez mes réalisations et projets. Passionné par la création et l'innovation, j'ai à cœur de développer des solutions digitales de qualité répondant aux besoins de mes clients."
              staggerChildren={0.1}
              delay={2.8}
              showButtonAfter={true}
              className="text-sm font-serif"
            />
            <AnimatedText
              text="N'hésitez pas à parcourir mon portfolio pour en savoir plus sur mes compétences et mon parcours professionnel."
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
            <StyledButton
              href="/home"
              text="ENTER SITE"
              className="cursor-pointer w-full pb-2 pt-6 pr-16 pl-3 text-[10px] font-semibold"
            />
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
