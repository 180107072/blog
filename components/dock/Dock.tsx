import { FC, PropsWithChildren } from "react";

import css from "./Dock.module.scss";
import { useDock } from "@/hooks/use-dock";

export const Dock: FC<PropsWithChildren> = ({ children }) => {
  const { mouseX } = useDock();

  return (
    <section className={css.dockContainer}>
      <div
        className={css.dockElement}
        onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {children}
      </div>
    </section>
  );
};
