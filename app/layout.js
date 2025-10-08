import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IT Alliance Tech - Empowering Your Business in the Digital Era",
  description:
    "Transform your business with cutting-edge technology solutions. We deliver innovative IT services, digital marketing strategies, and custom web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mt-8`}>
        <Navbar />{children}<Footer /></body>
    </html>
  );
}
