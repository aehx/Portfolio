"use client";

import PageWrapper from "../../page-wrapper";
import checkDevice from "@/utils/checkDevice";
import MoviesDistrict from "@/components/projects/MoviesDistrict";
import UrbanParking from "@/components/projects/UrbanParkings";
import { useEffect, useState } from "react";
import StyledCard from "@/components/StyledCard/StyledCard";
import Paragraph from "@/components/TextComponent/Paragraphe";
import LinkButton from "@/components/LinkButton";
const Projects = () => {
  return (
    <PageWrapper>
      <section className="flex h-screen flex-col items-end justify-between w-screen overflow-scroll">
        <div className="flex flex-col justify-center items-center w-1/2 h-1/2 absolute bottom-[15%] left-0">
          <LinkButton
            href="/home/projects/movies_district"
            text="voir ce projet"
            displayBottomBorder={true}
          />
          <StyledCard
            firstWord="Movies"
            secondWord="District"
            thirdWord="🍿🎬"
            showScrollIndicator={false}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 h-1/2 absolute bottom-[15%] right-0">
          <LinkButton
            href="/home/projects/urban_parking"
            text="voir ce projet"
            displayBottomBorder={true}
          />
          <StyledCard
            firstWord="Urban"
            secondWord="Parkings"
            thirdWord="🚙 🛣️ 🚏"
            showScrollIndicator={false}
          />
        </div>
        {/* {device && <MoviesDistrict device={device} />} */}
        {/* <UrbanParking device={device} /> */}
      </section>
    </PageWrapper>
  );
};

export default Projects;
