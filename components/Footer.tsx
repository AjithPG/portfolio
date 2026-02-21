"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="border-t py-12 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <p className="text-sm text-muted-foreground text-center">
                        © {new Date().getFullYear()} Built with ❤️ by Ajith.
                    </p>

                    {/* <Button
                        variant="ghost"
                        size="sm"
                        onClick={scrollToTop}
                        className="rounded-full gap-2"
                    >
                        Back to Top <ChevronUp className="h-4 w-4" />
                    </Button> */}
                </div>
            </div>
        </footer>
    )
}
