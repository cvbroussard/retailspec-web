import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AuthProvider } from "@/components/providers/session-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | RetailSpec",
    default: "RetailSpec — Retail Operations Infrastructure",
  },
  description:
    "Retail operations infrastructure for serious retailers. Inventory, commerce, and operations unified across every location and channel.",
  openGraph: {
    siteName: "RetailSpec",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased font-sans`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
