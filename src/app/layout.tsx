import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suraj Mehra | Application Owner | Digital Banking Expert",
  description: "Suraj Mehra's interactive resume featuring 3D elements. Application Owner for RBI-Led digital currency (Digital Rupee) mobile app at ICICI Bank.",
  keywords: ["Suraj Mehra", "Application Owner", "Digital Banking", "ICICI Bank", "Product Management", "Resume", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-800 bg-white`}>
        {children}
      </body>
    </html>
  );
}
