import { FC, PropsWithChildren } from "react";
import { GridTile } from "@/components/grid/Tile";
import { useGridScale } from "@/hooks/use-grid-scale";

import { GRID_SIZE, GRID_TILES } from "@/config/grid";

import css from "./Grid.module.scss";
import { getGridTranslation } from "@/utils/get-grid-translation";

const tiles = GRID_TILES.map((tile) => <GridTile key={tile} />);

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  const scale = useGridScale(GRID_SIZE);

  return (
    <div className={css.gridLayout}>
      <div
        className={css.gridContainer}
        style={{ transform: getGridTranslation(scale) }}
      >
        {children}
        {tiles}
      </div>
    </div>
  );
};
