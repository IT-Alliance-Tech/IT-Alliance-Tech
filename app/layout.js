import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcon from "@/components/FloatingIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Business Automation & Digital Transformation Company | IT Alliance Tech",
  description:
    "Boost your business growth with AI automation, CRM solutions, WhatsApp automation, and digital transformation services. IT Alliance Tech helps you scale faster with smart AI-driven solutions.",
  keywords: "AI Business Automation Services",
  alternates: {
    canonical: "https://www.italliancetech.com",
  },
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
