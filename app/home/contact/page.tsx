"use client";
import emailjs from "emailjs-com";
import PageWrapper from "../../page-wrapper";
import { useRef, useState } from "react";
const Contact = () => {
  const form = useRef<null | HTMLFormElement>(null);
  const [mailSentMsg, setMailSentMsg] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICEID as string,
          process.env.NEXT_PUBLIC_TEMPLATEID as string,
          form.current,
          process.env.NEXT_PUBLIC_API_KEY
        )
        .then((result) => {
          setMailSentMsg("Votre message à bien été envoyé");
          form.current?.reset();
        })
        .catch((error) => {
          setMailSentMsg("Une erreur est survenue, réessayez plus tard ?");
        });
    }
  };
  return (
    <PageWrapper>
      <section className="flex min-h-screen flex-col items-center justify-center xl:justify-start px-14 lg:p-24 w-screen">
        <div className="z-10 w-full sm:w-1/2 xl:w-1/4">
          <h1 className="text-zinc-100 flex justify-center mb-10">
            Contact me
          </h1>
          <form
            ref={form}
            className="flex flex-col [&>*]:outline-none [&>*]:font-serif [&>input]:mb-4 [&>label]:mb-1 [&>input]:text-sm [&>label]:text-zinc-100 [&>input]:py-1 [&>input]:pl-1 [&>input]:rounded-sm [&>textarea]:rounded-sm [&>textarea]:text-sm"
            onSubmit={onSubmit}
          >
            <label htmlFor="">
              Name<span className="text-red-500">*</span>
            </label>
            <input type="text" name="name" required />
            <label htmlFor="">Company</label>
            <input type="text" name="user_company" />
            <label htmlFor="">
              e-mail<span className="text-red-500">*</span>
            </label>
            <input type="text" name="email" required />
            <label htmlFor="">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea name="user_message" rows={4} required />
            <p className="text-zinc-200 text-center mt-3">{mailSentMsg}</p>
            <input
              type="submit"
              value="send"
              className="mt-10 text-center bg-zinc-300 hover:bg-zinc-100 transition-all duration-300 w-[140px] lg:w-[6vw] py-1 rounded-sm mx-auto"
            />
          </form>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
