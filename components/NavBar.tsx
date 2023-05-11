import LinkButton from "@/components/LinkButton";
const NavBar = () => {
  return (
    <div className="absolute top-0 w-full h-16 flex items-center [&>*]:mx-4 [&>*]:cursor-pointer z-40">
      <LinkButton href="/" text="Welcome" />
      <LinkButton href="/home/projects" text="Projects" />
      <LinkButton href="/home/hom" text="Home" />
    </div>
  );
};

export default NavBar;
