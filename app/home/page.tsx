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
            <span className="absolute top-0"></span>
            <StyledCard firstWord="ABOUT" secondWord="ME" thirdWord="👤" />
            <SeparationBar />
            <Paragraph
              title="Qu'est ce que je faisais ?"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
  delectus, fugit voluptas explicabo suscipit, voluptatum nobis
  repellendus accusamus inventore porro dolorem praesentium
  temporibus cum impedit error dolores, quibusdam illum nostrum odit
  aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
  unde assumenda laborum recusandae. Tempora rem molestias possimus
  aperiam pariatur."
            />
            <SeparationBar />
            <Paragraph
              title="qu'est qui m'as amené à changer ?"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
  delectus, fugit voluptas explicabo suscipit, voluptatum nobis
  repellendus accusamus inventore porro dolorem praesentium
  temporibus cum impedit error dolores, quibusdam illum nostrum odit
  aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
  unde assumenda laborum recusandae. Tempora rem molestias possimus
  aperiam pariatur."
            />
            <SeparationBar />
            <Paragraph
              title="le changement"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
  delectus, fugit voluptas explicabo suscipit, voluptatum nobis
  repellendus accusamus inventore porro dolorem praesentium
  temporibus cum impedit error dolores, quibusdam illum nostrum odit
  aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
  unde assumenda laborum recusandae. Tempora rem molestias possimus
  aperiam pariatur."
            />
            <SeparationBar />
            <Paragraph
              title="qu'est ce que je veux faire ?"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
  delectus, fugit voluptas explicabo suscipit, voluptatum nobis
  repellendus accusamus inventore porro dolorem praesentium
  temporibus cum impedit error dolores, quibusdam illum nostrum odit
  aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
  unde assumenda laborum recusandae. Tempora rem molestias possimus
  aperiam pariatur."
            />
            <ArrowUp scrollTo="containerTop" />
          </div>
        </main>
      </PageWrapper>
    </>
  );
}
