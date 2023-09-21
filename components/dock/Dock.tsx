import { FC, PropsWithChildren, useMemo } from "react";

import css from "./Dock.module.scss";
import { useDock } from "@/hooks/use-dock";

export const Dock: FC<PropsWithChildren> = ({ children }) => {
  const { mouseX } = useDock();

  const hasCursor = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer:fine)").matches;
  }, []);

  return (
    <section className={css.dockContainer}>
      <div
        className={css.dockElement}
        onMouseMove={(event) =>
          mouseX.set(hasCursor ? event.nativeEvent.x : null)
        }
        onMouseLeave={() => mouseX.set(null)}
      >
        {children}
      </div>
    </section>
  );
};
