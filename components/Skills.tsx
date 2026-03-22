import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"
import { SkillCard } from "./common/SkillCard"

export function Skills() {
    return (
        <Section title="Skills" id="skills">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData.skills.map((skillGroup, index) => (
                    <SkillCard
                        key={index}
                        {...skillGroup}
                    />
                ))}
            </div>
        </Section>
    )
}


