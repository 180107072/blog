"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { AnchorHTMLAttributes, FC, PropsWithChildren, useRef } from "react";
import Link from "next/link";

import css from "./DockApp.module.scss";
import { useDockHoverAnimation } from "@/hooks/use-dock-hover";
import { useDock } from "@/hooks/use-dock";

type DockBehavior = "Link" | "a";

type DockAppProps = {
  link?: string;
  behavior?: DockBehavior;
} & PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor: FC<
  AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren
> = ({ children, ...props }) => <a {...props}>{children}</a>;

const components = {
  a: Anchor,
  Link: Link,
};

export function DockApp({
  link = "/",
  children,
  behavior = "Link",
  target,
  ...props
}: DockAppProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, active } = useDock();

  const { size } = useDockHoverAnimation(mouseX, ref);

  const Component = components[behavior];

  return (
    <Component
      href={link}
      className={css.dockItemButton}
      target={target}
      {...props}
    >
      <motion.div
        ref={ref}
        className={clsx(active === link && css.active, css.dockItemContainer)}
        style={{ width: size, height: size }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
