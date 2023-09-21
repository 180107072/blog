"use client";

import { CustomTile } from "@/components/grid/CustomTile";
import { Grid } from "@/components/grid/Grid";

export default function Home() {
  return (
    <Grid>
      <CustomTile position={{ row: "15 / span 5", column: "20 / 14" }}>
        <video className="object-cover  absolute w-full h-full" loop autoPlay>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CustomTile>
    </Grid>
  );
}
