import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer & AI Engineer",
  description: "Full Stack Developer & AI Engineer specializing in building modern web applications and intelligent systems. Explore my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "AI Engineer", "React", "Next.js", "TypeScript", "Machine Learning"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Portfolio | Full Stack Developer & AI Engineer",
    description: "Full Stack Developer & AI Engineer specializing in building modern web applications and intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
