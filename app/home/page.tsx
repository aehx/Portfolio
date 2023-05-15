"use client";
import React from "react";
import PageWrapper from "../page-wrapper";
import StyledCard from "@/components/StyledCard/StyledCard";
import SeparationBar from "@/components/StyledBar/SeparationBar";
import Paragraph from "@/components/TextComponent/Paragraphe";
import ArrowUp from "@/components/ArrowUp";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <NavBar pathname={pathname} />
      <PageWrapper>
        <main className="flex h-screen flex-col items-end justify-between w-screen overflow-scroll">
          <div
            className="flex flex-col item-center w-screen lg:w-1/2 pt-[20%] lg:pt-[20%] z-10 [&>*]:mb-3 relative pb-20"
            id="containerTop"
            style={{ scrollBehavior: "smooth" }}
          >
            <StyledCard firstWord="ABOUT" secondWord="ME" thirdWord="👤" />
            <SeparationBar />
            <Paragraph
              title="Who i am ?"
              text="As a full-stack developer, I have completed an intensive training program at Capsule's bootcamp, where I gained the necessary skills to design mobile applications and websites. Passionate about the creation process, I have been fascinated by how a simple idea or concept can come to life and transform into something tangible and captivating. With an overflowing creativity, I am constantly seeking new ideas and projects.As a full-stack developer, I have completed an intensive training program at Capsule's bootcamp, where I gained the necessary skills to design mobile applications and websites. Passionate about the creation process, I have been fascinated by how a simple idea or concept can come to life and transform into something tangible and captivating. With an overflowing creativity, I am constantly seeking new ideas and projects."
            />
            <SeparationBar />
            <Paragraph
              title="Skills"
              text="I have gained some experience using the MERN stack during my training at La Capsule. On the front-end development side, I have learned React, React Native, Next.js, and Tailwind CSS. As for the back-end, my skills include Node.js, Express, and MongoDB. I am currently learning Fastify and Prisma to enhance my knowledge and skills."
            />
            <SeparationBar />
            <Paragraph
              title="Next step"
              text="With the aim of improving and deepening my knowledge, I wish to continue my studies in an alternating work-study program by joining the MSc Pro curriculum at Epitech Technology school. This program will allow me to leverage new technical skills for the benefit of a company during a 24-month alternating period, from September 2023 to July 2025."
            />
            {/* <SeparationBar /> */}
            {/* <Paragraph
              title="qu'est ce que je veux faire ?"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
  delectus, fugit voluptas explicabo suscipit, voluptatum nobis
  repellendus accusamus inventore porro dolorem praesentium
  temporibus cum impedit error dolores, quibusdam illum nostrum odit
  aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
  unde assumenda laborum recusandae. Tempora rem molestias possimus
  aperiam pariatur."
            /> */}
            <ArrowUp
              scrollTo="containerTop"
              className="bottom-[2%] right-[2%]"
            />
          </div>
        </main>
      </PageWrapper>
    </>
  );
}
