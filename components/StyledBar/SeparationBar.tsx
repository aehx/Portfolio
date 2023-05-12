const SeparationBar = () => {
  return (
    <div
      className="w-1 h-10 mx-auto"
      style={{
        borderRightWidth: "1px",
        height: "200px",
        borderColor: "#d4d4d8",
        borderImage:
          "linear-gradient(to bottom, #181818, #d4d4d8, #181818) 1 100%",
      }}
    />
  );
};

export default SeparationBar;
