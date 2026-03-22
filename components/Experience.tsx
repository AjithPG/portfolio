import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"
import { ExperienceCard } from "./ExperienceCard"

export function Experience() {
    return (
        <Section title="Work Experience" id="experience">
            <div className="space-y-6">
                {portfolioData.experience.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        {...exp}
                    />
                ))}
            </div>
        </Section>
    )
}


