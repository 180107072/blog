import { GRID_SIZE, GRID_TILES, NUM_OF_TILES } from '@/config/grid';
import { useGridScale } from '@/hooks/use-grid-scale';
import React, { FC, PropsWithChildren, useRef, useState, useEffect, startTransition } from 'react';
import { GridTile } from './Tile';
import { getGridTranslation } from '@/utils/get-grid-translation';

import css from './Grid.module.scss'

const limit = 15;

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  const chunk = useRef(1);
  const [tiles, setTiles] = useState<JSX.Element[]>([]);
  const grid = useRef([...GRID_TILES]);

  const scale = useGridScale(GRID_SIZE);
  const to = chunk.current * limit;

  const load = () => {
    if (tiles.length >= NUM_OF_TILES || grid.current.length === 0) return;

    const slicedTiles = grid.current.splice(0, to);
    const mappedTiles = slicedTiles.map((tile) => <GridTile key={tile} />);

    setTiles((prev) => prev.concat(mappedTiles));
    chunk.current += 1;
  };

  useEffect(() => {
    startTransition(load);
  }, [tiles]);

  return (
    <div className={css.gridLayout}>
      <div className={css.gridContainer} style={{ transform: getGridTranslation(scale) }}>
        {children}
        {tiles}
      </div>
    </div>
  );
};
