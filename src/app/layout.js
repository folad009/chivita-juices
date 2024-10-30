import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import MainFooter from "@/components/common/Footer";

const azoSans = localFont({
  src: "./fonts/AzoSansRegular.ttf",
  variable: "--font-azo-sans",
  weight: "100 900",
});
const azoSansBold = localFont({
  src: "./fonts/AzoSansBold.ttf",
  variable: "--font-azosans-bold",
  weight: "100 900",
});

export const metadata = {
  title: "Chivita Juices",
  description: "We provide quality fruit juices for healthy living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${azoSans.variable} ${azoSansBold.variable} antialiased`}
      >
        <Header />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
