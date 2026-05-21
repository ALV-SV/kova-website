import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "KOVA | Protect the Form",
  description: "Performance gear engineered around injury prevention science. KOVA — Protect. Science. Perform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="kova">
      <body className={`${dmSans.variable} ${dmSerif.variable} min-h-full antialiased bg-[#04342C] text-[#F5F4F0]`}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}