"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#000814]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001d3d]/50 via-transparent to-[#003566]/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f5cc00]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#003566]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <FadeIn delay={0.1}>
          <p className="text-[#f5cc00] font-mono text-sm md:text-base mb-4 tracking-wider">
            Hello, I&apos;m
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {personalInfo.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#cca000] font-medium mb-6">
            {personalInfo.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
            {personalInfo.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-[#f5cc00] text-[#000814] hover:bg-[#cca000] font-semibold px-8"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#003566] text-white hover:bg-[#003566]/50 px-8"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex gap-6 justify-center">
            <Link
              href={personalInfo.github}
              target="_blank"
              className="text-gray-400 hover:text-[#f5cc00] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              className="text-gray-400 hover:text-[#f5cc00] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-[#f5cc00] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-[#f5cc00]" />
      </div>
    </section>
  );
}
