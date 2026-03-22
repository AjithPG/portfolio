import { portfolioData } from "@/data/portfolio"
import { Section } from "./Section"
import { ContactCard } from "./common/ContactCard"

export function Contact() {
    return (
        <Section title="Contact" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.contact.map((item, index) => (
                    <ContactCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </Section>
    )
}


