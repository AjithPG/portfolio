import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"
import { ListCard } from "./common/ListCard"

export function Certifications() {
    return (
        <Section title="Certification" id="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.certifications.map((cert, index) => (
                    <ListCard
                        key={index}
                        title={cert.name}
                        description={cert.issuer}
                        icon={cert.icon}
                        linkText="View Certificate"
                        url={cert.certificateUrl}
                        color="blue"
                    />
                ))}
            </div>
        </Section>
    )
}


