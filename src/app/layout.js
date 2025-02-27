import { Lato } from "next/font/google";
import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import "../../pe-icon-7-stroke/css/pe-icon-7-stroke.css";
import "../../pe-icon-7-stroke/css/helper.css";
import { Analytics } from "@vercel/analytics/next";
import { AppWrapper } from "@/context"; // Import VideosProvider

const lato_init = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato"
});

export const metadata = {
  title: "Legacy Church Official",
  description: "Legacy Church in Chicopee Official Web Page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${lato_init.variable}`}>
      <body>
        <AppWrapper>
          {children}
          <Analytics />
        </AppWrapper>
      </body>
    </html>
  );
}
