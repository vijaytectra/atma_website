import { Marcellus } from "next/font/google";
import { Inter } from "next/font/google";
import AutoSlider from "./components/AutoSlider";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import "./globals.css";
import FloatingPhoneButton from "./components/FloatingPhoneButton";
import AnnouncementPopup from "./components/AnnouncementPopup";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "American Tamil Medical Association",
  description:
    "ATMA is an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${marcellus.variable} antialiased`}>
        <TopBar />
        <Header />
        {children}
        <AutoSlider />
        <FloatingPhoneButton phoneNumber="+1 213-545-4695" />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
