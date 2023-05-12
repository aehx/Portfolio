export const globalDivVariant = {
  initial: {
    height: "100%",
    width: "0px",
    borderRightWidth: "0px",
    borderLeftWidth: "0px",
    borderColor: "#d4d4d8",
    transition: { delay: 5 },
  },
  end: {
    height: "100%",
    width: "100%",
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    borderColor: "#d4d4d8",
    borderImage: "linear-gradient(to bottom, #181818, #d4d4d8, #181818) 1 100%",
  },
};
export const textVariant = {
  initial: { opacity: 0 },
  end: { opacity: 1 },
};
