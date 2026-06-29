import type { Metadata } from "next";
import { Jost, Manrope } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../components/ReduxProvider";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "MightyLuck",
  description:
    "Play the Best Crypto Casino Games Online at Mighty Luck — Fast, Fair and Secure",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${jost.variable} ${manrope.variable}`}>
      <body className="font-manrope">
        <ReduxProvider>
          {children}
          {modal}
        </ReduxProvider>
      </body>
    </html>
  );
}
