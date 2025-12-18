"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, ScaleOnHover, StaggerContainer, StaggerItem } from "@/components/motion";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#001d3d]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-[#f5cc00]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5cc00] mx-auto mb-12" />
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <ScaleOnHover className="h-full">
                <Card className="bg-[#000814] border-[#003566] h-full flex flex-col hover:border-[#f5cc00]/50 transition-colors">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-400 mb-4 flex-1 min-h-[72px]">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#003566] text-[#f5cc00] hover:bg-[#003566]/80"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3 pt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#003566] text-white hover:bg-[#003566]/50"
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#f5cc00] text-[#000814] hover:bg-[#cca000]"
                    >
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
