import { useIsomorphicLayoutEffect } from "framer-motion";
import { RefObject, useState } from "react";

export const useMDXHeadings = (ref: RefObject<HTMLElement>, tags: string[]) => {
  const [headings, setHeadings] = useState<number[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const h3s = [];

    for (let i = 0; i < ref.current.children.length; i++) {
      const element = ref.current.children[i];
      if (tags.includes(element.localName)) {
        h3s.push(i);
      }
    }

    setHeadings(h3s);
  }, []);

  return headings;
};
