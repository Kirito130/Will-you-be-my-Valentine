import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ValentinesStoreProvider } from "@/lib/valentines-store";
import { HeartTrail } from "@/components/HeartTrail";

/** Nunito – rounded, friendly, highly readable; works for headings and body (cute but clear) */
const nunito = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Are you my dinosaur?",
  description: "A Valentine's date invite for Sakina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="min-h-screen bg-valentine-page font-sans antialiased">
        <ValentinesStoreProvider>{children}</ValentinesStoreProvider>
        <HeartTrail />
      </body>
    </html>
  );
}
