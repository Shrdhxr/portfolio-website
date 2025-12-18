"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, ScaleOnHover, StaggerContainer, StaggerItem } from "@/components/motion";
import { skills } from "@/lib/data";
import {
  Code2, Globe, FileCode, Palette, Sparkles,
  Server, Terminal, Database, Webhook, Share2,
  Brain, Cpu, Bot, Link, Smile,
  GitBranch, Cloud, Triangle, Code, Box
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Globe, FileCode, Palette, Sparkles,
  Server, Terminal, Database, Webhook, Share2,
  Brain, Cpu, Bot, Link, Smile,
  GitBranch, Cloud, Triangle, Code, Container: Box,
};

interface SkillCardProps {
  title: string;
  items: { name: string; icon: string }[];
  delay?: number;
}

function SkillCard({ title, items, delay = 0 }: SkillCardProps) {
  return (
    <FadeIn delay={delay}>
      <ScaleOnHover>
        <Card className="bg-[#001d3d] border-[#003566] h-full">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-[#f5cc00] mb-6">{title}</h3>
            <div className="space-y-4">
              {items.map((skill) => {
                const IconComponent = iconMap[skill.icon] || Code2;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-[#000814] rounded-lg border border-[#003566]/50 hover:border-[#f5cc00]/50 transition-colors"
                  >
                    <IconComponent className="w-5 h-5 text-[#cca000]" />
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </ScaleOnHover>
    </FadeIn>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#000814]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-[#f5cc00]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5cc00] mx-auto mb-12" />
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <StaggerItem>
            <SkillCard title="Frontend" items={skills.frontend} />
          </StaggerItem>
          <StaggerItem>
            <SkillCard title="Backend" items={skills.backend} delay={0.1} />
          </StaggerItem>
          <StaggerItem>
            <SkillCard title="AI / ML" items={skills.aiml} delay={0.2} />
          </StaggerItem>
          <StaggerItem>
            <SkillCard title="Tools" items={skills.tools} delay={0.3} />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
