import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"
import { ListCard } from "./ListCard"

export function Achievements() {
    return (
        <Section title="Achievements" id="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.achievements.map((item, index) => (
                    <ListCard
                        key={index}
                        title={item.name}
                        description={item.year}
                        icon={item.icon}
                        linkText="View Award"
                        url={item.awardUrl}
                        color="orange"
                    />
                ))}
            </div>
        </Section>
    )
}

