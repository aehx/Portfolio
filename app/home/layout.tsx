"use client";
import React, { useEffect } from "react";
import PageWrapper from "../page-wrapper";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log(window);
  }, []);
  const pathname = usePathname();
  return (
    <>
      <NavBar pathname={pathname} />
      <div className="w-screen h-screen bg-[url('/handBackground.jpg')] bg-cover absolute top-0" />
      <PageWrapper>
        <section className="flex flex-col items-center justify-between">
          {children}
        </section>
      </PageWrapper>
    </>
  );
}
