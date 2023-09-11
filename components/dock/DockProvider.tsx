import { MotionValue, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, createContext, useContext } from "react";

type DockContextState = {
  mouseX: MotionValue<number | null>;
  active: string;
};

const Context = createContext<DockContextState | null>(null);

export const DockProvider: FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useMotionValue<number | null>(null);
  const active = usePathname();

  return (
    <Context.Provider value={{ mouseX, active }}>{children}</Context.Provider>
  );
};

export const useDock = () => {
  const context = useContext(Context);

  if (!context) throw Error("Need Dock wrapper");

  return context;
};
