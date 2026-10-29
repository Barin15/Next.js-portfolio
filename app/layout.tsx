import type { Metadata } from "next";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Independent Designer & Developer",
    template: "%s — Alex Morgan",
  },
  description:
    "Independent designer and front-end developer creating thoughtful digital experiences for good people and ambitious ideas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
