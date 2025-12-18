import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000814] border-t border-[#003566] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear}</span>
            <span className="text-[#f5cc00]">{personalInfo.name}</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={personalInfo.github}
              target="_blank"
              className="text-gray-400 hover:text-[#f5cc00] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              className="text-gray-400 hover:text-[#f5cc00] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-[#f5cc00] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
