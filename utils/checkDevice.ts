import { useState, useEffect } from "react";

const CheckDevice = () => {
  if (typeof window !== "undefined") {
    const device = () => {
      switch (true) {
        case window.innerWidth > 600 && window.innerWidth < 1024:
          return "tablette";
        case window.innerWidth > 1024:
          return "pc";
        default:
          return "phone";
      }
    };
    const [windowWidth, setWindowWidth] = useState<string>(device());

    useEffect(() => {
      const handleResize = () => {
        switch (true) {
          case window.innerWidth > 600 && window.innerWidth < 1024:
            return setWindowWidth("tablette");
          case window.innerWidth > 1024:
            return setWindowWidth("pc");
          default:
            setWindowWidth("phone");
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return windowWidth;
  }
};

export default CheckDevice;
