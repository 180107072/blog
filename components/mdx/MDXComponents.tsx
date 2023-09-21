"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useCallback, useRef } from "react";

import css from "./MDXComponents.module.scss";
import { useMDXHeadings } from "@/hooks/use-mdx-headings";

const components = {
  Image,
};

interface MdxProps {
  code: string;
  navigation?: boolean;
}

export function Mdx({ code, navigation = false }: MdxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const Component = useMDXComponent(code);
  const headings = useMDXHeadings(ref, ["h2"]);

  const handleNavigation = useCallback((h3: number) => {
    if (!ref.current) return;

    ref.current.children[h3].scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const createNavigationArray = () =>
    headings.map((h3) => {
      if (!ref.current) return;
      const element = ref.current.children[h3] as HTMLHeadingElement;

      return (
        <p key={h3} onClick={() => handleNavigation(h3)}>
          {element.innerText}
        </p>
      );
    });

  return (
    <div>
      {navigation ? (
        <div className={css.navigation}>{createNavigationArray()}</div>
      ) : null}
      <div className={css.mdxContainer} ref={ref}>
        <Component components={components} />
      </div>
    </div>
  );
}
