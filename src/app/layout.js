"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import MainFooter from "@/components/common/Footer";
import { usePathname } from "next/navigation";
import ContactFooter from "@/components/common/ContactFooter";

const azoSans = localFont({
  src: "/fonts/AzoSansRegular.ttf",
  variable: "--font-azo-sans",
  weight: "100 900",
});
const azoSansBold = localFont({
  src: "/fonts/AzoSansBold.ttf",
  variable: "--font-azosans-bold",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${azoSans.variable} ${azoSansBold.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        {isContactPage ? <ContactFooter/> : <MainFooter />}
      </body>
    </html>
  );
}
