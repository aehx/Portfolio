import ArrowUp from "../ArrowUp";
import SeparationBar from "../StyledBar/SeparationBar";
import Paragraph from "../TextComponent/Paragraphe";
import StyledCard from "../StyledCard/StyledCard";
import ProjectPictureForPc from "./projectFrameForPc";
import ProjectPictureForMobile from "./projectPictureForMobile";

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
    <>
      {picture}
      {video}

      <div
        className="flex flex-col item-center w-screen lg:w-1/2 pt-[20%] lg:pt-[20%] z-10 [&>*]:mb-3 relative pb-20"
        id="containerTop"
        style={{ scrollBehavior: "smooth" }}
      >
        <StyledCard firstWord="Movies" secondWord="District" thirdWord="🍿🎬" />
        <SeparationBar />
        <Paragraph
          title="Le projet"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
delectus, fugit voluptas explicabo suscipit, voluptatum nobis
repellendus accusamus inventore porro dolorem praesentium
temporibus cum impedit error dolores, quibusdam illum nostrum odit
aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
unde assumenda laborum recusandae. Tempora rem molestias possimus
aperiam pariatur."
        />
        <SeparationBar />
        <Paragraph
          title="Techno utilisées"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
delectus, fugit voluptas explicabo suscipit, voluptatum nobis
repellendus accusamus inventore porro dolorem praesentium
temporibus cum impedit error dolores, quibusdam illum nostrum odit
aut. Ducimus cupiditate nostrum molestiae iusto natus quas fugiat,
unde assumenda laborum recusandae. Tempora rem molestias possimus
aperiam pariatur."
        />
        <ArrowUp scrollTo="containerTop" />
      </div>
    </>
  );
};

export default MoviesDistrict;
