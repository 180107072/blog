"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { PropsWithChildren, useMemo, useRef } from "react";
import Link from "next/link";

import css from "./DockApp.module.scss";
import { useDockHoverAnimation } from "@/hooks/use-dock-hover";
import { useDock } from "@/hooks/use-dock";

type DockAppProps = {
  link?: string;
} & PropsWithChildren;

export function DockApp({ link = "/", children }: DockAppProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, active } = useDock();

  const { size } = useDockHoverAnimation(mouseX, ref);

  return (
    <Link href={link} className={css.dockItemButton}>
      <motion.div
        ref={ref}
        className={clsx(active === link && css.active, css.dockItemContainer)}
        style={{
          width: size,
          height: size,
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
