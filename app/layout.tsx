import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramya's Kitchen — Authentic Homemade Chilli Powder",
  description: "Stone-pounded chilli powder from a home kitchen. Made fresh weekly. No preservatives. Order via WhatsApp.",
  keywords: "chilli powder, homemade, andhra, organic spices, ramya kitchen",
  icons: {
  icon: "/ramyas_kitchen_favicon.svg",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}