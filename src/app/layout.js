import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "TornadoX - share your thoughts",
  description: "The best website to share your thoughts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
