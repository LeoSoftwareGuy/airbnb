import { Nunito } from "next/font/google";
import LoginModal from "./components/modal/LoginModel";
import RegisterModal from "./components/modal/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
