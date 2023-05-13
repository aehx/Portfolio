"use client";
import StyledButton from "@/components/StyledButton/StyledButton";
import PageWrapper from "../../page-wrapper";
// import Planet from "@/components/Planet/Planet";

const Contact = () => {
  return (
    <PageWrapper>
      <section className="flex min-h-screen flex-col items-center justify-between p-24 w-screen">
        <p className="text-white">Home</p>
        <StyledButton
          href="/home"
          text="RETURN TO HOME"
          className="cursor-pointer w-full pb-2 pt-6 pr-16 pl-3 text-[10px] font-semibold"
        />
      </section>
    </PageWrapper>
  );
};

export default Contact;
