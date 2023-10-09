"use client";

import { MotionValue, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, createContext, useEffect } from "react";

type DockContextState = {
  mouseX: MotionValue<number | null>;
  active: string;
};

export const DockContext = createContext<DockContextState | null>(null);

export const DockProvider: FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useMotionValue<number | null>(null);
  const path = usePathname();

  const active = `/${path.split("/")[1]}`;

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <DockContext.Provider value={{ mouseX, active }}>
      {children}
    </DockContext.Provider>
  );
};
