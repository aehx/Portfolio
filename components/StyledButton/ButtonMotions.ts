export const buttonBorderTopMotion = {
  initial: { width: 0, height: "1px", backgroundColor: "#a1a1aa" },
  end: { width: "100%", height: "1px", backgroundColor: "#a1a1aa" },
};

export const buttonBorderRightMotion = {
  initial: { width: "1px", height: "0", backgroundColor: "#a1a1aa" },
  end: { width: "1px", height: "100%", backgroundColor: "#a1a1aa" },
};

export const buttonBorderBottomMotion = {
  initial: { width: 0, height: "1px", backgroundColor: "#a1a1aa" },
  hover: {
    width: "55%",
    height: "1px",
    transition: { duration: 0.4, type: "easeIn", delay: 0 },
  },
  end: { width: "100%", height: "1px", backgroundColor: "#a1a1aa" },
};

export const buttonBorderLeftMotion = {
  initial: {
    width: "1px",
    height: "0",
    backgroundColor: "#a1a1aa",
  },
  hover: {
    width: "1px",
    height: "0",
    transition: { duration: 0.4, type: "easeIn" },
  },
  end: { width: "1px", height: "100%", backgroundColor: "#a1a1aa" },
};

export const littleBorderMotion = {
  initial: {
    height: 0,
    width: "3px",
    backgroundColor: "#a1a1aa",
  },
  hover: {
    opacity: 0,
    height: "0px",
    width: "3px",
    backgroundColor: "#a1a1aa",
    transition: { duration: 0.5, type: "easeIn" },
  },
  end: { height: 20, width: "3px", backgroundColor: "#a1a1aa" },
};
