import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextUI App",
  description: "NextUI app in next-jsx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <div className="navbar">
          <Header />
        </div>
        <div className="container">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
