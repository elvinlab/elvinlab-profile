"use client";

import "./globals.css";
import { Sora } from "next/font/google";
import { usePathname } from "next/navigation";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Toggle from "./../components/Toggle";

import { motion } from "framer-motion";
import Transition from "@/components/Transition";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
          <motion.div key={pathname} className="h-full">
            <Transition />
            <TopLeftImg />
            <Nav />
            <Toggle />
            <Header />
            {children}
          </motion.div>
        </div>
      </body>
    </html>
  );
}
