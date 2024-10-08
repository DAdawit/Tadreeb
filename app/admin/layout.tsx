import "../globals.css";
import Navbar from "@/components/Admin/Nav/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
import AuthCheck from "./AuthCheck";

export const metadata: Metadata = {
  title: "Tadreeb Admin Panel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthCheck />
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
