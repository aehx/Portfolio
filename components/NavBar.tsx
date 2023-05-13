"use client";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
const NavBar = ({ pathname }: { pathname: string }) => {
  return (
    <div className="fixed top-0 w-full py-4 flex justify-between items-end [&>*]:mx-4 [&>*]:cursor-pointer z-40 lg:px-5">
      <div className="relative flex justify-start items-end">
        <Image
          src="/logo.png"
          alt="kevin portfolio's logo"
          width="40"
          height="40"
          className="mr-2"
          priority={true}
        />
        <LinkButton
          href="/home"
          text="Kevin's portfolio"
          displayBottomBorder={true}
        />
        {pathname !== "/home" && (
          <LinkButton
            href="/home"
            text="Home"
            className="ml-5"
            displayBottomBorder={true}
          />
        )}
      </div>
      <div className="relative flex justify-start items-end">
        {pathname !== "/home/projects" && (
          <LinkButton
            href="/home/projects"
            text="Projects"
            displayBottomBorder={true}
          />
        )}
        <LinkButton
          href="/home/About"
          text="Contact"
          className="ml-5"
          displayBottomBorder={true}
        />
      </div>
    </div>
  );
};

export default NavBar;
