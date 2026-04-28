"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-[#001d3d]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-[#f5cc00]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5cc00] mx-auto mb-12" />
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#003566] rounded-lg">
                <GraduationCap className="w-6 h-6 text-[#f5cc00]" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Academic Background</h3>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {education.map((item, index) => (
              <StaggerItem key={item.degree}>
                <Card className="bg-[#000814] border-[#003566] relative">
                  {index !== education.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-[#003566]" />
                  )}
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-white">{item.degree}</h4>
                      <span className="text-[#f5cc00] text-sm font-mono">{item.period}</span>
                    </div>
                    <p className="text-[#cca000] text-sm mb-3">{item.school}</p>
                    <p className="text-gray-400 text-sm">{item.focus}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
