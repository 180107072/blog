import { DockContext } from "@/components/dock/DockProvider";
import { useContext } from "react";

export const useDock = () => {
  const context = useContext(DockContext);

  if (!context) throw Error("Need Dock wrapper");

  return context;
};
