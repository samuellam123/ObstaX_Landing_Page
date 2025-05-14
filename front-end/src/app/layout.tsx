import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ObstaX",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>HI</h1>
      </body>
    </html>
  );
}
