// src/app/layout.js

import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from './components/Sidebar';  // Import Sidebar

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Omotunde-Young Qudus",
  description: "Hello! My name is Omotunde-Young Qudus, I am a Digital Strategist, Social Media Strategist and a Performance Marketer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        {/* Sidebar should be part of the layout */}
        <div className="flex">
          <Sidebar /> {/* Place Sidebar here */}
          <main className="flex-1">{children}</main> {/* Page content */}
        </div>
      </body>
    </html>
  );
}
