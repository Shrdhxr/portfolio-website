import { personalInfo } from "@/lib/data";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000814] border-t border-[#003566] py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <span>© {currentYear}</span>
          <span className="text-[#f5cc00]">{personalInfo.name}</span>
          <span className="flex items-center gap-1">
            • Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </span>
        </div>
      </div>
    </footer>
  );
}
