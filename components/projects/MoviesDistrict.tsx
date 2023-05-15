import ArrowUp from "../ArrowUp";
import SeparationBar from "../StyledBar/SeparationBar";
import Paragraph from "../TextComponent/Paragraphe";
import StyledCard from "../StyledCard/StyledCard";
import ProjectPictureForPc from "./ProjectFrameForPc";
import ProjectPictureForMobile from "./ProjectPictureForMobile";

const MoviesDistrict = ({ device }: { device: string }) => {
  const picture =
    device !== "pc" ? (
      <ProjectPictureForMobile src="/Movies_D_logo.png" />
    ) : null;
  const video =
    typeof window !== "undefined" && device === "pc" ? (
      <ProjectPictureForPc src="/movies_district.png" />
    ) : null;
  return (
    <div
      className="flex flex-col item-center w-screen lg:w-1/2 pb-20 pt-[20%] lg:pt-[20%] z-10 [&>*]:mb-3 relative lg:pb-20"
      id="containerTop"
      style={{ scrollBehavior: "smooth" }}
    >
      {picture}
      {video}
      <StyledCard firstWord="Movies" secondWord="District" thirdWord="🍿🎬" />
      <SeparationBar />
      <Paragraph
        title="The projet"
        text="Movies District is a movie website that I thoroughly enjoyed developing. If you're in need of inspiration, this site might help you find your weekend movie !"
      />
      <SeparationBar />
      <Paragraph
        title="development and technologies"
        text="I developed this website using React, Next.js, and Tailwind CSS on the frontend, and Node.js with Express and MongoDB on the backend. This project allowed me to deepen my knowledge in these languages and become familiar with various concepts."
      />
      <ArrowUp scrollTo="containerTop" />
    </div>
  );
};

export default MoviesDistrict;
