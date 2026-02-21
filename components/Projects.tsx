"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "./SectionHeader"

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <SectionHeader title="Work" />
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">My Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Digital Experiences</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden h-full flex flex-col group border-none shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="relative aspect-16/10 overflow-hidden bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardHeader className="space-y-1 mt-2">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tech.map((t) => (
                                            <Badge key={t} variant="secondary" className="text-[10px] font-normal uppercase tracking-wider">{t}</Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <Button variant="link" className="px-0 group/btn" asChild>
                                        <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                                            View Project <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="rounded-full px-8">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    )
}
