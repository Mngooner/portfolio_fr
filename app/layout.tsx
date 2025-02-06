import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unen Tsogtbaatar - Portfolio",
  description: "Unen Tsogtbaatar - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro">
      <body className="font-mono">{children}</body>
    </html>
  );
}
