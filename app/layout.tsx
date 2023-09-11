"use client";

import "@/scss/main.scss";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { Dock } from "@/components/dock/Dock";
import { DockApp } from "@/components/dock/DockApp";
import { DockProvider } from "@/components/dock/DockProvider";
import { HomeIcon } from "@/components/svg/home";
import { PortfolioIcon } from "@/components/svg/portfolio";
import { ATSymbol } from "@/components/svg/at-symbol";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <ModeToggle />
        <main>{children}</main>
        <Analytics />
        <DockProvider>
          <Dock>
            <DockApp link="/">
              <HomeIcon />
            </DockApp>
            <DockApp link="/posts">
              <PortfolioIcon />
            </DockApp>
            <DockApp link="/about">
              <ATSymbol />
            </DockApp>
          </Dock>
        </DockProvider>
      </body>
    </html>
  );
}
