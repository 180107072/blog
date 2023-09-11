import css from "./Tile.module.scss";

export const GridTile = () => {
  return (
    <div className={css.tileContainer}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={css.tile} />
      ))}
    </div>
  );
};
