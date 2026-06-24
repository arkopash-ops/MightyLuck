import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "../components/ReduxProvider";

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
    <html lang="en" className="h-full antialiased">
      <body>
        <ReduxProvider>
          {children}
          {modal}
        </ReduxProvider>
      </body>
    </html>
  );
}
