import "@/scss/main.scss";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { Dock } from "@/components/dock/Dock";
import { DockApp } from "@/components/dock/DockApp";
import { DockProvider } from "@/components/dock/DockProvider";
import { HomeIcon } from "@/components/svg/home";
import { PortfolioIcon } from "@/components/svg/portfolio";
import { LightBulb } from "@/components/svg/light-bulb";
import { GithubIcon } from "@/components/svg/github";
import { MailIcon } from "@/components/svg/mail";
import { Photos } from "@/components/svg/photos";

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
            <DockApp link="/works">
              <PortfolioIcon />
            </DockApp>
            <DockApp link="/photos">
              <Photos />
            </DockApp>
            <DockApp link="/posts">
              <LightBulb />
            </DockApp>
            <DockApp
              link="https://github.com/180107072"
              behavior="a"
              target="_blank"
            >
              <GithubIcon />
            </DockApp>
            <DockApp link="mailto:iokyufokyu@gmail.com" behavior="a">
              <MailIcon />
            </DockApp>
          </Dock>
        </DockProvider>
      </body>
    </html>
  );
}
