"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "./SectionHeader"

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <SectionHeader title="Experience" />
                <h2 className="text-3xl font-bold mb-4 text-center">Career Journey</h2>
                <p className="text-muted-foreground text-center mb-16">My professional evolution over the years.</p>

                <div className="max-w-4xl mx-auto space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-4 md:gap-12"
                        >
                            <div className="md:w-1/4">
                                <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
                            </div>
                            <div className="flex-1 border-l-2 border-muted pl-8 relative pb-8">
                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                <p className="text-primary font-medium mb-3">{exp.company}</p>
                                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <Badge key={t} variant="secondary">{t}</Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
