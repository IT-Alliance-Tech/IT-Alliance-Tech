import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcon from "@/components/FloatingIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IT Alliance Tech - Empowering Your Business in the Digital Era",
  description:
    "Transform your business with cutting-edge technology solutions. We deliver innovative IT services, digital marketing strategies, and custom web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SHJJ8PCC6T"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SHJJ8PCC6T');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} mt-8`}>
        <Navbar />
        {children}
        <FloatingIcon />
        <Footer />
      </body>
    </html>
  );
}
