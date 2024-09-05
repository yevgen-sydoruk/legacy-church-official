import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legacy Church Official",
  description: "Legacy Church in Chicopee Official Web Page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
