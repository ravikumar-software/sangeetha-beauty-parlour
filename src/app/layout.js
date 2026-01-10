import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialSticky from "./components/SocialSticky";
import "./globals.css";

import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Sangeetha Beauty Parlour – Vazhga Valamudan",
    template: "%s | Sangeetha Beauty Parlour",
  },
  description:
    "Premium beauty, bridal, skincare and wellness services for women in Perambur, Chennai.",
  keywords: [
    "Beauty Parlour Chennai",
    "Women Beauty Services",
    "Bridal Makeup",
    "Hair Care",
    "Skin Care",
    "Sangeetha Beauty Parlour",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${playfair.variable} 
          ${inter.variable}
          font-inter
          bg-gradient-to-b from-purple-50 via-white to-pink-50
          text-gray-800
          scroll-smooth
        `}
      >
        <Navbar />

        <main className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 py-10">
          {children}
        </main>

        <Footer />
        <SocialSticky />
      </body>
    </html>
  );
}
