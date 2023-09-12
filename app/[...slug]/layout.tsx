import { FC, PropsWithChildren } from "react";
import css from "./layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={css.layout}>{children}</div>;
};

export default Layout;
