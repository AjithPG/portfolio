import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Ajith Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </Link>

            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border bg-muted">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="gap-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" /> View Source
                        </a>
                    </Button>
                </div>

                <div className="prose dark:prose-invert max-w-none pt-12 border-t">
                    <h2>Project Overview</h2>
                    <p>
                        This project was developed to solve [Specific Problem]. It leverages {project.tech.join(", ")} to provide a seamless and efficient user experience.
                    </p>
                    <h3>Key Features</h3>
                    <ul>
                        <li>Fully responsive and accessible design</li>
                        <li>Real-time data synchronization and state management</li>
                        <li>Optimized performance and SEO-friendly implementation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
