import type { Metadata } from "next";
import { Averia_Serif_Libre, Caudex, Roboto_Slab, Fraunces, Spectral, PT_Serif } from "next/font/google";
import "./globals.css";

// Font Options - Change activeFont to switch

// Option 1: Caudex (Classic, Elegant Serif)
const caudex = Caudex({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Option 2: Roboto Slab (Modern, Tech-friendly Serif)
const robotoSlab = Roboto_Slab({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Option 3: Spectral (Elegant, Refined Serif)
const spectral = Spectral({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Option 4: PT Serif (Classic, Transitional Serif)
const ptSerif = PT_Serif({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// CHANGE THIS to switch fonts: averiaSerif, caudex, robotoSlab, fraunces, spectral, ptSerif
const activeFont = ptSerif;

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer & AI Engineer",
  description: "Full Stack Developer & AI Engineer specializing in building modern web applications and intelligent systems. Explore my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "AI Engineer", "React", "Next.js", "Shreedhar Modi", "TypeScript", "Machine Learning"],
  authors: [{ name: "Shreedhar" }],
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
      <body className={`${activeFont.variable} font-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
