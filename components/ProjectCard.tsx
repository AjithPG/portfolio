import { portfolioData } from "@/data/portfolio"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    tech: string[];
}

export function ProjectCard({ title, description, image, liveUrl, tech }: ProjectCardProps) {
    return (
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 group cursor-default">
            <div className="flex flex-col md:flex-row items-stretch">
                {/* Left side: Image container with mockup-like presentation */}
                <div className="w-full md:w-64 relative bg-secondary flex items-center justify-center p-6 border-r border-border text-muted-foreground transition-colors duration-500">
                    <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden border-4 border-card shadow-2xl skew-y-1 transform group-hover:skew-y-0 group-hover:scale-[1.05] transition-transform duration-700">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                {/* Right side: Project details */}
                <div className="flex-1 p-8 flex flex-col justify-center transition-colors duration-500">
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4 transition-colors">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-8 transition-colors">
                            {description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8 invisible md:visible">
                        {tech.map((t) => (
                           <span key={t} className="px-3 py-1 bg-secondary text-muted-foreground text-[10px] uppercase font-bold rounded-lg border border-border transition-colors">
                              {t}
                           </span>
                        ))}
                    </div>
                    <div>
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-foreground/90 transition-all duration-300"
                        >
                            Live URL <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


