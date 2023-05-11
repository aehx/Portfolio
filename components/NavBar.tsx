"use client";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
const NavBar = () => {
  return (
    <div className="absolute top-0 w-full h-16 flex justify-between items-end [&>*]:mx-4 [&>*]:cursor-pointer z-40">
      <div className="relative flex justify-start items-end">
        <Image
          src="/logo.png"
          alt="kevin portfolio's logo"
          width="40"
          height="40"
          className="mr-2"
        />
        <LinkButton href="/home" text="Kevin's portfolio" />
        <LinkButton href="/home" text="Home" className="ml-5" />
      </div>
      <div className="relative flex justify-start items-end">
        <LinkButton href="/home/projects" text="Projects" />
        <LinkButton href="/home/About" text="About me" className="ml-5" />
      </div>
    </div>
  );
};

export default NavBar;
