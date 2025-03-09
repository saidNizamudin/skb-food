import localFont from "next/font/local";
import { Bebas_Neue, Montserrat } from "next/font/google";
import Content from "./content";

import "./globals.css";
import { TranslationProvider } from "./TranslationProvider";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const segoeUI = localFont({
  src: "./fonts/segoeUI.ttf",
  variable: "--font-segoe",
  weight: "100 900",
});

export const metadata = {
  title: "SKB Food",
  description: "SKB Food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} ${segoeUI.variable}antialiased`}
      >
        <TranslationProvider>
          <Content>{children}</Content>
        </TranslationProvider>
      </body>
    </html>
  );
}
