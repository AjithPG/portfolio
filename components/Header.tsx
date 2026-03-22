import { portfolioData } from "@/data/portfolio"
import { ModeToggle } from "./mode-toggle"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-500">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold tracking-tighter sm:text-base font-mono text-foreground">
                        {portfolioData.logo}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-secondary/50 rounded-lg p-0.5 border border-border shadow-sm">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

