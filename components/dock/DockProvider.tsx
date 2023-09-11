import { MotionValue, useMotionValue } from "framer-motion";
import { FC, PropsWithChildren, createContext, useContext } from "react";

const Context = createContext<MotionValue<number | null> | null>(null);

export const DockProvider: FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useMotionValue<number | null>(null);

  return <Context.Provider value={mouseX}>{children}</Context.Provider>;
};

export const useDock = () => {
  const context = useContext(Context);

  if (!context) throw Error("Need Dock wrapper");

  return context;
};
