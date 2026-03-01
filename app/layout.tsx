import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AuthProvider } from "@/components/providers/session-provider";
import { ProfilingPrompt } from "@/components/profiling/profiling-prompt";
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
        <AuthProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ProfilingPrompt />
        </AuthProvider>
      </body>
    </html>
  );
}
