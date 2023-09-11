"use client";

import { CustomTile } from "@/components/grid/CustomTile";
import { Grid } from "@/components/grid/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <Grid>
      <CustomTile position={{ row: "15 / span 5", column: "20 / 14" }}>
        <Image
          src="https://picsum.photos/1000/1000"
          fill
          alt="Picture of the author"
        />
      </CustomTile>
    </Grid>
  );
}
