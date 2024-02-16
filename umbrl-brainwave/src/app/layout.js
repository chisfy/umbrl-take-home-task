import { DM_Sans, Rubik } from "next/font/google";
import "./globals.css";

//import DMsans font
const DMSansFont = DM_Sans({ subsets: ["latin", "latin-ext"] });

//import Rubik font
const RubikFont = Rubik({ subsets: ["latin", "latin-ext"] });

export const metadata = {
  title: "Brainwave Landing Page",
  description: "Made with React & NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${DMSansFont.className} ${RubikFont.className}`}>{children}</body>
    </html>
  );
}
