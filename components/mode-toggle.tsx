"use client";

import { useTheme } from "@/hooks/use-theme";
import {
  createPseudoElement,
  darkTransition,
  lightTransition,
} from "@/utils/view-api-theme-transition";
import { MouseEvent } from "react";

const isAppearanceTransition = () => {
  // @ts-expect-error: Transition API
  return document.startViewTransition;
};

export function ModeToggle() {
  const [theme, setTheme] = useTheme();

  const isDark = theme === "dark";

  const startTransition = (event: MouseEvent) => {
    document.body.classList.add("notransition");
    if (!isAppearanceTransition()) {
      setTheme(isDark ? "light" : "dark");

      return setTimeout(() => {
        document.body.classList.remove("notransition");
      }, 0);
    }
    createPseudoElement(theme, isDark ? darkTransition : lightTransition);
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement
        .animate(
          {
            clipPath: isDark ? clipPath : [...clipPath].reverse(),
          },
          {
            duration: 500,
            easing: "ease-in",
            pseudoElement: isDark
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
          }
        )
        .finished.then(() => {
          document.body.classList.remove("notransition");
        });
    });
  };

  return (
    <button
      onClick={startTransition}
      className="border rounded-md items-center justify-center fixed right-0 top-0 p-2 m-5 z-50 bg-slate-100 border-black"
    >
      {theme !== "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </button>
  );
}
