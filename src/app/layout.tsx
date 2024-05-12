import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Calendar of Wisdom",
  description: "Daily dose of wisdom curated by Tolstoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">   
      <body>
        <h1 className="mainTitle">Calendar of Wisdom</h1>
        {children}
      </body>
    </html>
  );
}
