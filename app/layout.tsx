import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediPay - Pharmaceutical Distribution Management Platform",
  description: "Reduce bad debt by 40% with intelligent PDC management, batch inventory control, and automated order-to-cash workflow. Built for pharmaceutical distributors.",
  keywords: ["pharmaceutical distribution", "inventory management", "PDC tracking", "batch control", "FIFO", "FEFO", "pharmaceutical software"],
  authors: [{ name: "MediPay" }],
  openGraph: {
    title: "MediPay - Eliminate Payment Chaos & Inventory Losses",
    description: "The all-in-one pharmaceutical distribution platform that reduces bad debt by 40% while cutting administrative overhead in half.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
