import type { Metadata } from "next";
import { Playfair_Display, Jost, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/constants";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const body = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | Bridal & Party Henna Artist`,
  description: `Book ${site.name} for bridal, party & festive henna designs. Elegant, intricate, made-for-you mehndi — call or WhatsApp to book your slot today.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
