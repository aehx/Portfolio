"use client";
import UrbanParking from "@/components/projects/UrbanParkings";
import checkDevice from "@/utils/checkDevice";

const UrbanParkingPage = () => {
  const device = checkDevice();
  return (
    <section className="flex h-screen flex-col items-end justify-between w-screen overflow-scroll">
      {device && <UrbanParking device={device} />}
    </section>
  );
};

export default UrbanParkingPage;
