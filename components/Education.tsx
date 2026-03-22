import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"
import { ExperienceCard } from "./common/ExperienceCard"

export function Education() {
    return (
        <Section title="Education" id="education">
            <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                    <ExperienceCard
                        key={index}
                        role={edu.degree}
                        company={edu.university}
                        period={edu.period}
                        location="Kerala, India"
                        description=""
                        tech={edu.tech || []}
                        icon={edu.icon}
                        color={edu.color}
                    />
                ))}
            </div>
        </Section>
    )
}

