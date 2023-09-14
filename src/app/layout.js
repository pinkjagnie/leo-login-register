import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import AuthContextProvider from "./AuthContextProvider";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "TornadoX - share your thoughts",
  description: "The best website to share your thoughts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  );
}
