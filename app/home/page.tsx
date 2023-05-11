"use client";
import React from "react";
import PageWrapper from "../page-wrapper";
import StyledButton from "@/components/StyledButton/StyledButton";
import Planet from "@/components/Planet/Planet";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 w-screen">
        <p className="">HOME</p>
        <Planet />
        <StyledButton
          href="/home/projects"
          text="RETURN TO HOME"
          className="cursor-pointer w-full pb-2 pt-6 pr-16 pl-3 text-[10px] font-semibold"
        />
      </main>
    </PageWrapper>
  );
}
