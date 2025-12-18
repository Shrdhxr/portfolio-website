"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, ScaleOnHover } from "@/components/motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#001d3d]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-[#f5cc00]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5cc00] mx-auto mb-6" />
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <Card className="bg-[#000814] border-[#003566]">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <ScaleOnHover className="h-full">
                    <Link
                      href={`mailto:${personalInfo.email}`}
                      className="flex flex-col items-center justify-center p-6 bg-[#001d3d] rounded-lg border border-[#003566] hover:border-[#f5cc00]/50 transition-colors h-full min-h-[160px]"
                    >
                      <Mail className="w-8 h-8 text-[#f5cc00] mb-3" />
                      <span className="text-white font-medium mb-1">Email</span>
                      <span className="text-gray-400 text-sm text-center whitespace-nowrap">{personalInfo.email}</span>
                    </Link>
                  </ScaleOnHover>

                  <ScaleOnHover className="h-full">
                    <Link
                      href={personalInfo.github}
                      target="_blank"
                      className="flex flex-col items-center justify-center p-6 bg-[#001d3d] rounded-lg border border-[#003566] hover:border-[#f5cc00]/50 transition-colors h-full min-h-[160px]"
                    >
                      <Github className="w-8 h-8 text-[#f5cc00] mb-3" />
                      <span className="text-white font-medium mb-1">GitHub</span>
                      <span className="text-gray-400 text-sm">View Profile</span>
                    </Link>
                  </ScaleOnHover>

                  <ScaleOnHover className="h-full">
                    <Link
                      href={personalInfo.linkedin}
                      target="_blank"
                      className="flex flex-col items-center justify-center p-6 bg-[#001d3d] rounded-lg border border-[#003566] hover:border-[#f5cc00]/50 transition-colors h-full min-h-[160px]"
                    >
                      <Linkedin className="w-8 h-8 text-[#f5cc00] mb-3" />
                      <span className="text-white font-medium mb-1">LinkedIn</span>
                      <span className="text-gray-400 text-sm">Connect</span>
                    </Link>
                  </ScaleOnHover>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#f5cc00] text-[#000814] hover:bg-[#cca000] font-semibold px-8"
                  >
                    <Link href={`mailto:${personalInfo.email}`}>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
