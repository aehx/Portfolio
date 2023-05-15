import "./globals.css";

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center [&>*]:mb-7 [&>*]:text-2xl">
        <h2>Not Found</h2>
        <p>This page don&apos;t exist</p>
      </div>
    </div>
  );
}
