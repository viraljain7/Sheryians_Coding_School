// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import MyContext from "./Helper/Context";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning className={inter.className}>
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}