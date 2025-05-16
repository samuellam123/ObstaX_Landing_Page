import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

// SEO Metadata
export const metadata: Metadata = {
  title: "ObstaX",
  description: "Assistive Navigation Device for the Blind and Visually Impaired in Singapore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}