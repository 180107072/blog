import { useRandomReveal } from "@/hooks/use-random-reveal";
import { Props } from "@/types";
import React, { PropsWithChildren } from "react";

type RandomRevealProps = {
  duration?: number;
  children: string;
};

export const RandomReveal = ({ duration = 0, children }: RandomRevealProps) => {
  const nextCharacters = useRandomReveal({
    duration,
    children,
  });

  return <>{nextCharacters}</>;
};
