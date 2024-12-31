import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight:  ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Omotunde-Young Qudus",
  description: "Hello! My name is Omotunde-Young Qudus, I am a Digital Strategist, Social Media Strategist and a Performance Marketer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
