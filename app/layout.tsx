import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/common/Footer";
import { Toaster } from "react-hot-toast";
import { ReactQueryProvider } from "./ReactQueryProvider";
import AuthContextProvider from "@/context/AuthContext";
import NavBar from "@/common/NavBarComponents/NavBar";
// import Home from "./page";

// import {
//   getCertificates,
//   getHeroSections,
//   getSocialMediaLinks,
//   getTrainigFormats,
//   getTrainingVenues,
//   getTrainings,
// } from "@/services/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const formats = await getTrainigFormats();
  // const venues = await getTrainingVenues();
  // const certificates = await getCertificates();
  // const categories = await getTrainings();
  // const links = await getSocialMediaLinks();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AuthContextProvider>
            <Toaster />
            <NavBar />
            {/* <Home /> */}
            {children}
            <Footer />
          </AuthContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
