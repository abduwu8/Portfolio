import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={inter.className}>
        <div className="container mx-auto">
          <div
            className="
              leading-relaxed 
              text-slate-200 
              antialiased 
              selection:bg-teal-300 
              selection:text-teal-900
            "
          >
            <div
              className="
                z-[-10] 
                fixed 
                inset-0 
                bg-[radial-gradient(circle at 50% 200px, #34a439, transparent)]"
            ></div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}