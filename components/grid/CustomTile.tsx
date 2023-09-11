import { FC, PropsWithChildren } from "react";
import css from "./CustomTile.module.scss";

type CustomTileProps = {
  position: {
    row: string;
    column: string;
  };
};

export const CustomTile: FC<PropsWithChildren & CustomTileProps> = ({
  children,
  position: { row, column },
}) => {
  return (
    <div
      className={css.customTileContainer}
      style={{
        gridColumn: column,
        gridRow: row,
      }}
    >
      {children}
    </div>
  );
};
