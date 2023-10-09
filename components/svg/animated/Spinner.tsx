import { SVGProps } from "react";
import css from "./Spinner.module.scss";

export const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg className={css.spinner} viewBox="0 0 50 50">
    <circle
      className={css.path}
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke-width="5"
    ></circle>
  </svg>
);
