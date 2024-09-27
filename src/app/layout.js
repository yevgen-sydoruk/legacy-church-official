import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import "../../pe-icon-7-stroke/css/pe-icon-7-stroke.css";
import "../../pe-icon-7-stroke/css/helper.css";

export const metadata = {
  title: "Legacy Church Official",
  description: "Legacy Church in Chicopee Official Web Page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
