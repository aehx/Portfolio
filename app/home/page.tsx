"use client";
import React from "react";
import PageWrapper from "../page-wrapper";
import StyledButton from "@/components/StyledButton/StyledButton";
import StyledCard from "@/components/StyledCard/StyledCard";
import SeparationBar from "@/components/StyledBar/SeparationBar";
import Paragraph from "@/components/TextComponent/Paragraphe";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex h-screen flex-col items-end justify-between w-screen overflow-scroll">
        <div className="flex flex-col item-center w-screen lg:w-1/2 pt-[20%] lg:pt-[20%] z-10 [&>*]:mb-3">
          <StyledCard firstWord="ABOUT" secondWord="ME" thirdWord="👤" />
          <SeparationBar />
          <Paragraph
            title="title"
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
            title="title"
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
            title="title"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
  delectus, fugit voluptas explicabo suscipit, voluptatum nobis
  repellendus accusamus inventore porro dolorem praesentium
  temporibus cum impedit error dolores, quibusdam illum nostrum odit
  aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
  unde assumenda laborum recusandae. Tempora rem molestias possimus
  aperiam pariatur."
          />

          <StyledButton
            href="/home/projects"
            text="RETURN TO HOME"
            className="cursor-pointer pb-2 pt-6 pr-16 pl-3 text-[10px] font-semibold"
          />
        </div>
      </main>
    </PageWrapper>
  );
}
