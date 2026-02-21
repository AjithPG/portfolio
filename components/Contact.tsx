"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

export function Contact() {
    return (
        <section id="contact" className="py-24 text-center">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-4">Can't find your answer?</h2>
                    <p className="text-muted-foreground mb-12">I'm always open to new opportunities and interesting projects.</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                            <a href={`mailto:${portfolioData.contact.email}`}>
                                <Mail className="h-4 w-4" /> Email Me
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" asChild>
                            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-4 w-4" /> LinkedIn
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" asChild>
                            <a href={`https://wa.me/${portfolioData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="h-4 w-4" /> WhatsApp
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
