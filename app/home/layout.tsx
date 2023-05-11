import React from "react";
import PageWrapper from "../page-wrapper";
import NavBar from "@/components/NavBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <section className="flex flex-col items-center justify-between">
          {children}
        </section>
      </PageWrapper>
    </>
  );
}
