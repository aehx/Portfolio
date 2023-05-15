import ArrowUp from "../ArrowUp";
import SeparationBar from "../StyledBar/SeparationBar";
import Paragraph from "../TextComponent/Paragraphe";
import StyledCard from "../StyledCard/StyledCard";
import ProjectVideoForPc from "./ProjectVideoForPc";
import ProjectVideoForMobile from "./ProjectVideoForMobile";
const UrbanParking = ({ device }: { device: string }) => {
  return (
    <>
      {device !== "pc" && (
        <ProjectVideoForMobile src="/urban_parking_video.mp4" />
      )}
      {device === "pc" && <ProjectVideoForPc src="/urban_parking_video.mp4" />}
      <div
        className="flex flex-col item-center w-screen lg:w-1/2 pt-[20%] lg:pt-[20%] z-10 [&>*]:mb-3 relative pb-20 mb-10"
        id="containerTop"
        style={{ scrollBehavior: "smooth" }}
      >
        <StyledCard
          firstWord="Urban"
          secondWord="Parkings"
          thirdWord="🚙 🛣️ 🚏"
        />
        <SeparationBar />
        <Paragraph
          title="The projet"
          text="Urban Parking is a mobile application that will allow you to find available parking spaces around you. You can add your favorite parking spots to your favorites list and navigate to them using the suggested route!"
        />
        <SeparationBar />
        <Paragraph
          title="development and technologies"
          text="I developed this project using React Native for the frontend and Express with MongoDB for the backend. This experience allowed me to refine my skills in React Native, particularly in designing and utilizing navigation stacks based on token authentication."
        />
        <ArrowUp scrollTo="containerTop" />
      </div>
    </>
  );
};

export default UrbanParking;
