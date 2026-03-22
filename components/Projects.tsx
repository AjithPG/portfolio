import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
    return (
        <Section title="Projects" id="projects">
            <div className="space-y-6">
                {portfolioData.projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </Section>
    )
}



