"use client";
import { useEffect } from "react";
import PageWrapper from "../../page-wrapper";
const Home = ({ params }: { params: any }) => {
  useEffect(() => {
    console.log(params);
    console.log(window.innerWidth);
  }, [params]);
  return (
    <PageWrapper>
      <section className="flex min-h-screen flex-col items-center justify-between p-24 w-screen">
        <p className="text-white">PROJECTS</p>
      </section>
    </PageWrapper>
  );
};

export default Home;
