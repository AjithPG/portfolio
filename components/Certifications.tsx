"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { SectionHeader } from "./SectionHeader"

export function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <SectionHeader title="Certifications" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-primary">
                                            {cert.icon.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{cert.name}</h3>
                                            <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                                        </div>
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
