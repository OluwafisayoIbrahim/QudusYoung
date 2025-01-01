// src/app/layout.js

import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from './components/Sidebar'; // Sidebar component

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Define the weights you want to use
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Define the weights you want to use
});

export const metadata = {
  title: "Omotunde-Young Qudus",
  description: "Hello! My name is Omotunde-Young Qudus, I am a Digital Strategist, Social Media Strategist and a Performance Marketer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        <div className="flex">
          {/* Sidebar and main content layout */}
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
