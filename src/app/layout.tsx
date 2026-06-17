import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MightyLuck",
  description:
    "Play the Best Crypto Casino Games Online at Mighty Luck — Fast, Fair and Secure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body>{children}</body>
    </html>
  );
}
