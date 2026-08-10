import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Shyamashree Das | Full-Stack Software Engineer",
  description: "Shyamashree Das — Full-Stack Software Engineer specializing in Next.js, ASP.NET Core, and scalable enterprise applications.",
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
