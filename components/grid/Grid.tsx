import { FC, PropsWithChildren } from "react";
import { GridTile } from "@/components/grid/Tile";
import { useGridScale } from "@/hooks/use-grid-scale";

import css from "./Grid.module.scss";

const GRID_SIZE = { width: 2400, height: 3000 };
const GRID_TILES = [...Array(810).keys()];

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  const scale = useGridScale(GRID_SIZE);

  return (
    <div className={css.gridLayout}>
      <div
        className={css.gridContainer}
        style={{
          transform: `translate(-50%, -50%) skewX(-50deg) skewY(15deg) scaleX(2) scale(${scale}) translateZ(0)`,
        }}
      >
        {children}
        {GRID_TILES.map((tile) => (
          <GridTile key={tile} />
        ))}
      </div>
    </div>
  );
};
