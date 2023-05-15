"use client";

import PageWrapper from "../../page-wrapper";
import LinkButton from "@/components/LinkButton";
import ProjectPicture from "@/components/ProjectPicture/ProjectPicture";
const Projects = () => {
  return (
    <PageWrapper>
      <section className="flex flex-col h-screen items-start pt-[30%] lg:pt-0 justify-evenly w-screen overflow-scroll">
        <div className="flex flex-col justify-center items-center w-screen z-50 lg:w-1/2 lg:h-1/2 lg:absolute lg:bottom-[15%] lg:left-0 lg:mb-0">
          <LinkButton
            href="/home/projects/movies_district"
            text="voir ce projet"
            displayBottomBorder={true}
            className="pb-3"
          />
          <ProjectPicture src="/Movies_D_logo.png" />
          <p className="text-center text-white z-10 w-[85vw] sm:max-w-[50vw] lg:max-w-[20vw] xl:max-w-[20vw] 2xl:max-w-[17vw] font-serif mt-10 mb-5">
            Site de référencement de films
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-screen h-[70vh] lg:w-1/2 lg:h-1/2 lg:absolute lg:bottom-[15%] lg:right-0">
          <LinkButton
            href="/home/projects/urban_parking"
            text="voir ce projet"
            displayBottomBorder={true}
            className="pb-3"
          />
          <ProjectPicture src="/Urban_P_picture.png" />
          <p className="text-white z-10 w-[85vw] sm:max-w-[50vw] lg:max-w-[20vw] xl:max-w-[20vw] 2xl:max-w-[17vw] font-serif text-center mb-5 mt-10">
            Application de recherche de parking
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
