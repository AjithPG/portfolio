"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "./SectionHeader"

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <SectionHeader title="Skills" />
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">My Stack</p>
                    <h2 className="text-4xl font-bold mb-4">The skills, tools and technologies I am really good at:</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {portfolioData.skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold border-b pb-2">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
