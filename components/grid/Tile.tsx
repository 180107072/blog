import { GRID_TILE_COUNT } from "@/config/grid";
import css from "./Tile.module.scss";

export const GridTile = () => {
  return (
    <div className={css.tileContainer}>
      {GRID_TILE_COUNT.map((i) => (
        <span key={i} className={css.tile} />
      ))}
    </div>
  );
};
