"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { skills } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  aiml: "AI / ML",
  tools: "Tools & Technologies",
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#001d3d]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Technical <span className="text-[#f5cc00]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5cc00] mx-auto mb-12" />
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <FadeIn key={category} delay={index * 0.1}>
              <div className="bg-[#000814] border border-[#003566] rounded-lg p-6 hover:border-[#f5cc00]/30 transition-colors">
                <h3 className="text-xl font-semibold text-[#f5cc00] mb-4">
                  {categoryLabels[category] || category}
                </h3>
                <StaggerContainer>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill) => (
                      <StaggerItem key={skill}>
                        <Badge
                          variant="secondary"
                          className="bg-[#003566] text-gray-200 hover:bg-[#003566]/80 hover:text-[#f5cc00] transition-colors px-4 py-2 text-sm font-medium border border-[#003566] hover:border-[#f5cc00]/50"
                        >
                          {skill}
                        </Badge>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
