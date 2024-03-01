import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swiftr | Automatización para Inmobiliarias",
  description:
    "Ayudamos a inmobiliarias a automatizar su proceso de ventas y gestión de leads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative antialiased", inter.className)}>
        <main className="relative flex flex-col w-full min-h-screen">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
