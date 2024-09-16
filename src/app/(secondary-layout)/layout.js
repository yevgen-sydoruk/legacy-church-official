import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legacy Church Official",
  description: "Legacy Church in Chicopee Official Web Page"
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    // <body className={inter.className}>
    <div className="">
      <Header isHome={false} />
      {children}
      <Footer />
    </div>
    // </body>
    // </html>
  );
}
