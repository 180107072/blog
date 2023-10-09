import {
  FC,
  PropsWithChildren,
  startTransition,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { GridTile } from "@/components/grid/Tile";
import { useGridScale } from "@/hooks/use-grid-scale";

import { GRID_SIZE, GRID_TILES, NUM_OF_TILES } from "@/config/grid";

import css from "./Grid.module.scss";
import { getGridTranslation } from "@/utils/get-grid-translation";

const limit = 10;

const Renderer: FC<{
  chunks: JSX.Element[];
  onRendered: (id: string) => void;
}> = ({ chunks, onRendered }) => {
  const scope = useId();
  useEffect(() => onRendered(scope), [onRendered, scope]);
  return <>{chunks}</>;
};

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  const chunk = useRef(1);
  const grid = useRef([...GRID_TILES]);

  const scale = useGridScale(GRID_SIZE);

  const [tiles, setTiles] = useState<JSX.Element[]>([]);

  const load = (id: string) => {
    const to = chunk.current * limit;

    if (tiles.length >= NUM_OF_TILES) return;

    const mapped = grid.current
      .splice(0, to)
      .map((tile) => <GridTile key={`${id}-${tile}-${to}`} />);

    setTiles((prev) => [...prev, ...mapped]);
    chunk.current += 1;
  };

  return (
    <div className={css.gridLayout}>
      <div
        className={css.gridContainer}
        style={{ transform: getGridTranslation(scale) }}
      >
        {children}
        <Renderer onRendered={load} chunks={tiles} />
        {tiles}
      </div>
    </div>
  );
};
