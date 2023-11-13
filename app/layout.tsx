import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/common/Footer";
import { Toaster } from "react-hot-toast";
import { ReactQueryProvider } from "./ReactQueryProvider";
import AuthContextProvider from "@/context/AuthContext";
import HandleNav from "@/common/NavBarComponents/HandleNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AuthContextProvider>
            <Toaster />
            <HandleNav />
            {children}
            <Footer />
          </AuthContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
