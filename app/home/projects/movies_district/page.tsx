"use client";
import MoviesDistrict from "@/components/projects/MoviesDistrict";
import checkDevice from "@/utils/checkDevice";

const MoviesDistrictPage = () => {
  const device = checkDevice();
  return (
    <section className="flex h-screen flex-col items-end justify-between w-screen overflow-scroll">
      {device && <MoviesDistrict device={device} />}
    </section>
  );
};

export default MoviesDistrictPage;
