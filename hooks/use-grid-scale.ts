import { useEffect, useState } from "react";

const average = (a: number, b: number) => (a + b) / 2;

export const useGridScale = ({ width = 0, height = 0 }) => {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScale(
        average(
          window.screen.width / width,
          window.screen.height / height
        )
      );
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
};
