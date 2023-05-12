const Paragraph = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="mx-auto w-[60%] flex flex-col items-center justify-center">
      <h2 className="mb-3 text-2xl paragraphe">{title}</h2>
      <p className="text-justify lg:text-center font-serif paragraphe">
        {text}
      </p>
    </div>
  );
};

export default Paragraph;
