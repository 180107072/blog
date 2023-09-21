"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

import css from "./MDXComponents.module.scss";

const components = {
  Image,
};

interface MdxProps {
  code: string;

  navigation?: boolean;
}

export function Mdx({ code, navigation = false }: MdxProps) {
  const Component = useMDXComponent(code);

  const ref = useRef<HTMLDivElement>(null);

  const [headings, setHeadings] = useState<number[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const h3s = [];

    for (let i = 0; i < ref.current.children.length; i++) {
      const element = ref.current.children[i];
      if (element.localName === "h2") {
        h3s.push(i);
      }
    }

    setHeadings(h3s);
  }, []);

  return (
    <div>
      <div className={css.navigation}>
        {navigation
          ? headings.map((h3) => {
              if (!ref.current) return;
              const element = ref.current.children[h3] as HTMLHeadingElement;

              return (
                <p
                  key={h3}
                  onClick={() => {
                    if (!ref.current) return;

                    ref.current.children[h3].scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {element.innerText}
                </p>
              );
            })
          : null}
      </div>
      <div className="flex flex-col gap-5" ref={ref}>
        <Component components={components} />
      </div>
    </div>
  );
}
