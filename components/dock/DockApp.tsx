"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import {
  AnchorHTMLAttributes,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";

import css from "./DockApp.module.scss";
import { useDockHoverAnimation } from "@/hooks/use-dock-hover";
import { useDock } from "@/hooks/use-dock";
import { Spinner } from "@/components/svg/animated/Spinner";

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

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { mouseX, active } = useDock();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    setLoading(false);
  }, [active]);

  const { size } = useDockHoverAnimation(mouseX, ref);

  const Component = components[behavior];

  return (
    <Component
      href={link}
      className={css.dockItemButton}
      target={target}
      onClick={() => {
        if (active !== link) {
          timer.current = setTimeout(() => setLoading(true), 200);
        }
      }}
      {...props}
    >
      {loading ? (
        <motion.div
          ref={ref}
          whileTap={{
            scale: 0.8,
          }}
          className={clsx(active === link && css.active, css.dockItemContainer)}
          style={{ width: size, height: size }}
        >
          <Spinner />
        </motion.div>
      ) : (
        <motion.div
          ref={ref}
          whileTap={{
            scale: 0.8,
          }}
          className={clsx(active === link && css.active, css.dockItemContainer)}
          style={{ width: size, height: size }}
        >
          {children}
        </motion.div>
      )}
    </Component>
  );
}
