import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "@/components/Hooks/SmoothScrollWrapper";
import Footer from "@/components/Footrex";



export const metadata = {
  title: "Entrepreneur Edge™",
  description: "VRT Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollWrapper>
          
          {children}
          <Footer/>
          </SmoothScrollWrapper>
      </body>
    </html>
  );
}
