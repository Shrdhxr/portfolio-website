"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { experience, education } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#000814]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Experience & <span className="text-[#f5cc00]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5cc00] mx-auto mb-12" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#003566] rounded-lg">
                  <Briefcase className="w-6 h-6 text-[#f5cc00]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-6">
              {experience.map((item, index) => (
                <StaggerItem key={item.title}>
                  <Card className="bg-[#001d3d] border-[#003566] relative">
                    {index !== experience.length - 1 && (
                      <div className="absolute left-8 top-full w-0.5 h-6 bg-[#003566]" />
                    )}
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <span className="text-[#f5cc00] text-sm font-mono">{item.period}</span>
                      </div>
                      <p className="text-[#cca000] text-sm mb-3">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Education */}
          <div>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#003566] rounded-lg">
                  <GraduationCap className="w-6 h-6 text-[#f5cc00]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-6">
              {education.map((item, index) => (
                <StaggerItem key={item.degree}>
                  <Card className="bg-[#001d3d] border-[#003566] relative">
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
      </div>
    </section>
  );
}
