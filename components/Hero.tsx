"use client"

import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"
import Image from "next/image"
import { Download } from "lucide-react"

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
              <p className="mt-1 text-xs text-muted-foreground/60 font-medium uppercase tracking-wider transition-colors">
                {portfolioData.company}
              </p>
            )}
          </div>
        </div>
        <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 py-4 h-auto flex items-center gap-2 transition-all font-semibold shadow-md active:scale-95">
          <Download className="h-5 w-5" />
          Download CV
        </Button>
      </div>
    </section>


  )
}


