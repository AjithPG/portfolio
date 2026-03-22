"use client"

import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"
import Image from "next/image"
import { Download, Mail, Briefcase } from "lucide-react"



export function Hero() {
  return (
    <section className="relative">
      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden border-t-4 border-t-primary p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500">
        <div className="flex items-center gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-card shadow-md bg-secondary shrink-0 transition-colors">
            <Image
              src={"/photo.jpg"}
              alt={portfolioData.name}
              fill
              className="object-cover scale-150 transform translate-y-2"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-foreground transition-colors">{portfolioData.name}</h1>
            <p className="text-muted-foreground font-medium text-sm mt-0.5 transition-colors">{portfolioData.role}</p>
            {portfolioData.company && (
              <p className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider transition-colors">
                {portfolioData.company}
              </p>
            )}
            <div className="flex items-center gap-1.5 mt-2 text-muted-foreground transition-all duration-500 justify-center md:justify-start">
              <Briefcase className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">5+ Years Experience</span>
            </div>

          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-fit">
          <Button asChild className="bg-foreground hover:bg-foreground/90 text-background rounded-lg px-6 py-3 h-auto flex items-center gap-2 transition-all font-semibold shadow-md active:scale-95 cursor-pointer">
            <a href={portfolioData.resumeUrl || "#"} target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-lg px-6 py-3 h-auto flex items-center gap-2 transition-all font-semibold border-primary bg-card text-foreground hover:bg-secondary shadow-sm active:scale-95 cursor-pointer">
            <a href="#contact">
              <Mail className="h-5 w-5" />
              Contact Me
            </a>
          </Button>
        </div>

      </div>
    </section>


  )
}


