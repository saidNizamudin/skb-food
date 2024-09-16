import localFont from "next/font/local";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { Navbar, Footer, Main } from "@/components";

import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} ${segoeUI.variable}antialiased`}
      >
        <div>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
