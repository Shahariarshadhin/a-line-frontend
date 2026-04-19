import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import FloatingButtons from "@/components/Shared/FloatingButtons";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "A-Line Brands | Creative Branding & Marketing Agency",
    template: "%s | A-Line Brands",
  },
  description:
    "A-Line is a Dhaka-based creative branding and digital marketing agency trusted by 48+ clients including Bata, Robi, Grameenphone, British Council, and Standard Chartered.",
  openGraph: {
    type: "website",
    url: "https://www.a-linebrands.com",
    siteName: "A-Line Brands",
    title: "A-Line Brands | Creative Branding & Marketing Agency",
    description:
      "Dhaka-based creative agency trusted by Bata, Robi, Standard Chartered & 45+ more.",
    images: [
      {
        url: "https://www.a-linebrands.com/assets/logo/logo-black.PNG",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.a-linebrands.com" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} antialiased`}>
        <Navbar />
        <FloatingButtons>{children}</FloatingButtons>
      </body>
    </html>
  );
}
