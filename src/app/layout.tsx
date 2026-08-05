import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcase. Inspire. Get Hired.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
