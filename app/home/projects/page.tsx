"use client";

import PageWrapper from "../../page-wrapper";
import checkDevice from "@/utils/checkDevice";
import MoviesDistrict from "@/components/projects/MoviesDistrict";
import UrbanParking from "@/components/projects/UrbanParkings";
import { useState } from "react";
const Projects = () => {
  const [whichProject, setWhichProject] = useState<boolean>(false);
  const device = checkDevice();
  return (
    <PageWrapper>
      <section className="flex h-screen flex-col items-end justify-between w-screen overflow-scroll">
        {whichProject ? (
          <MoviesDistrict device={device} />
        ) : (
          <UrbanParking device={device} />
        )}
      </section>
    </PageWrapper>
  );
};

export default Projects;
