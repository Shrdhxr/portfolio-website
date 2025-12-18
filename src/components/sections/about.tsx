"use client";

import { FadeIn } from "@/components/motion";
import { aboutText } from "@/lib/data";
import { Code2, Brain, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#001d3d]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-[#f5cc00]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5cc00] mx-auto mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <FadeIn direction="left">
            <div className="space-y-6">
              {aboutText.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-[#000814] rounded-lg border border-[#003566]">
                <div className="p-3 bg-[#003566] rounded-lg">
                  <Code2 className="w-6 h-6 text-[#f5cc00]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Full Stack Development</h3>
                  <p className="text-gray-400 text-sm">
                    Building end-to-end solutions with modern frameworks and best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#000814] rounded-lg border border-[#003566]">
                <div className="p-3 bg-[#003566] rounded-lg">
                  <Brain className="w-6 h-6 text-[#f5cc00]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-400 text-sm">
                    Implementing intelligent features that add real value to applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#000814] rounded-lg border border-[#003566]">
                <div className="p-3 bg-[#003566] rounded-lg">
                  <Rocket className="w-6 h-6 text-[#f5cc00]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Problem Solving</h3>
                  <p className="text-gray-400 text-sm">
                    Tackling complex challenges with creative and efficient solutions.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
