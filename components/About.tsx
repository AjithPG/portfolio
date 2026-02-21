"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"
import { SectionHeader } from "./SectionHeader"

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <SectionHeader title="About Me" />
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border-4 border-background">
                            <Image
                                src={portfolioData.about.avatar}
                                alt={portfolioData.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3"
                    >
                        <h2 className="text-3xl font-bold mb-6">{portfolioData.about.title}</h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                            {portfolioData.about.content.split("\n").map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                        <Button className="rounded-full px-6">
                            Download Resume
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
