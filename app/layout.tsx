import type { Metadata } from "next";
import { Assistant, Heebo, Rubik } from "next/font/google";
import "./globals.css";
import { NotistackProvider } from "./providers/NotistackProvider";
const geistSans = Assistant({
  variable: "--font-assistant",
  weight: ["200"],
  subsets: ["latin"],
});
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Call4You",
  description: "Generated and created by need a name group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}  antialiased`}>
        <NotistackProvider> {children}</NotistackProvider>
      </body>
    </html>
  );
}
