"use client";

import useRaf from "@rooks/use-raf";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import clsx from "clsx";
import { PropsWithChildren, RefObject, useMemo, useRef } from "react";
import Link from "next/link";
import { useDock } from "./DockProvider";

import css from "./DockApp.module.scss";

type DockAppProps = {
  link?: string;
} & PropsWithChildren;

export function DockApp({ link = "/", children }: DockAppProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, active } = useDock();

  const hasCursor = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer:fine)").matches;
  }, []);

  const { size } = useDockHoverAnimation(mouseX, ref);

  return (
    <Link href={link} className={css.dockItemButton}>
      <motion.div
        ref={ref}
        className={clsx(active === link && css.active, css.dockItemContainer)}
        style={
          hasCursor
            ? {
                width: size,
                height: size,
              }
            : {
                width: "2.9rem",
                height: "2.9rem",
              }
        }
      >
        {children}
      </motion.div>
    </Link>
  );
}

const baseWidth = 57.6;
const distanceLimit = baseWidth * 6;
const beyondTheDistanceLimit = distanceLimit + 1;
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
];
const widthOutput = [
  baseWidth,
  baseWidth * 1.1,
  baseWidth * 1.414,
  baseWidth * 2,
  baseWidth * 1.414,
  baseWidth * 1.1,
  baseWidth,
];

const useDockHoverAnimation = (
  mouseX: MotionValue<number | null>,
  ref: RefObject<HTMLDivElement>
) => {
  const distance = useMotionValue(beyondTheDistanceLimit);

  const sizePX: MotionValue<number> = useSpring(
    useTransform(distance, distanceInput, widthOutput),
    {
      stiffness: 1300,
      damping: 82,
    }
  );

  const size = useTransform(sizePX, (size) => `${size / 20}rem`);

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();

      const elCenterX = rect.left + rect.width / 2;

      const distanceDelta = mouseXVal - elCenterX;
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return { size };
};
