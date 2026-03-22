import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"

export function About() {
    return (
        <Section title="About" id="about">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl transition-colors duration-500">
                {portfolioData.about.content}
            </p>
        </Section>
    )
}

