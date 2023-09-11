import { useEffect, useState } from "react";

function average(a: number, b: number) {
  return (a * 1 + b * 1) / 2;
}

export const useGridScale = ({ width = 0, height = 0 }) => {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScale(
        average(
          window.screen.availWidth / width,
          window.screen.availHeight / height
        )
      );
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
};
