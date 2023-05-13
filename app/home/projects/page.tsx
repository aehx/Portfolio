"use client";

import PageWrapper from "../../page-wrapper";
import checkDevice from "@/utils/checkDevice";
import StyledCard from "@/components/StyledCard/StyledCard";
import LinkButton from "@/components/LinkButton";
const Projects = () => {
  const device = checkDevice();
  return (
    <PageWrapper>
      <section className="flex flex-col h-screen items-end pt-[30%] lg:pt-0 justify-between w-screen overflow-scroll pb-10">
        <div className="flex flex-col justify-center items-center w-screen lg:w-1/2 lg:h-1/2 lg:absolute lg:bottom-[15%] lg:left-0 mb-10">
          <StyledCard
            firstWord="Movies"
            secondWord="District"
            thirdWord="🍿🎬"
            showScrollIndicator={device === "pc" ? false : true}
          />
          <p className="text-white z-10 w-[85vw] sm:max-w-[50vw] lg:max-w-[20vw] xl:max-w-[20vw] 2xl:max-w-[17vw] font-serif text-justify mt-10 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            soluta autem amet dolorum. Similique, aliquam.
          </p>
          <LinkButton
            href="/home/projects/movies_district"
            text="voir ce projet"
            displayBottomBorder={true}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-screen lg:w-1/2 lg:h-1/2 lg:absolute lg:bottom-[15%] lg:right-0">
          <StyledCard
            firstWord="Urban"
            secondWord="Parkings"
            thirdWord="🚙 🛣️ 🚏"
            showScrollIndicator={false}
          />
          <p className="text-white z-10 w-[85vw] sm:max-w-[50vw] lg:max-w-[20vw] xl:max-w-[20vw] 2xl:max-w-[17vw] font-serif text-justify mb-5 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            soluta autem amet dolorum. Similique, aliquam.
          </p>
          <LinkButton
            href="/home/projects/urban_parking"
            text="voir ce projet"
            displayBottomBorder={true}
          />
        </div>
        {/* {device && <MoviesDistrict device={device} />} */}
        {/* <UrbanParking device={device} /> */}
      </section>
    </PageWrapper>
  );
};

export default Projects;
