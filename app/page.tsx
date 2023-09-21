"use client";

import Image from "next/image";
import { CustomTile } from "@/components/grid/CustomTile";
import { Grid } from "@/components/grid/Grid";

export default function Home() {
  return (
    <Grid>
      <CustomTile position={{ row: "15 / span 5", column: "8 / 14" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          className="object-cover"
          alt=""
        />
      </CustomTile>

      <CustomTile position={{ row: "10 / span 2", column: "8 / 14" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          alt=""
          className="object-cover"
        />
      </CustomTile>

      <CustomTile position={{ row: "10 / span 3", column: "18 / 22" }}>
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
