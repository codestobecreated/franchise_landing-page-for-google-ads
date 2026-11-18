import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relux Electric - EV Charging Franchise",
  description: "EV Charging Station Franchise Opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
