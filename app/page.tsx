"use client";

import Image from "next/image";
import { CustomTile } from "@/components/grid/CustomTile";
import { Grid } from "@/components/grid/Grid";
import css from "./page.module.scss";

export default function Home() {
  return (
    <Grid>
      <CustomTile position={{ row: "15 / span 4", column: "12 / 9" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          className="object-cover"
          alt=""
        />
      </CustomTile>
      <CustomTile position={{ row: "20 / span 3", column: "14 / 18" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          className="object-cover"
          alt=""
        />
      </CustomTile>

      <CustomTile position={{ row: "10 / span 2", column: "10 / 14" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          alt=""
          className="object-cover"
        />
      </CustomTile>

      <CustomTile position={{ row: "11 / span 2", column: "18 / 22" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          alt=""
          className="object-cover"
        />
      </CustomTile>

      <CustomTile position={{ row: "14 / span 3", column: "14 / 17" }}>
        <div className={css.workInProgress}>
          <span className="text-center">Work in Progress</span>
        </div>
      </CustomTile>

      <CustomTile position={{ row: "15 / span 4", column: "20 / 24" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          alt=""
          className="object-cover"
        />
      </CustomTile>
    </Grid>
  );
}
