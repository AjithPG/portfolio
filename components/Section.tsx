import { ReactNode } from "react"

interface SectionProps {
    title: string;
    children: ReactNode;
    id?: string;
    className?: string;
}

export function Section({ title, children, id, className = "" }: SectionProps) {
    return (
        <section id={id} className={`flex flex-col gap-6 ${className}`}>
            <h2 className="text-xl font-bold text-foreground tracking-tight leading-none h-fit transition-colors duration-500">
                {title}
            </h2>


            <div className="flex flex-col gap-6">
                {children}
            </div>
        </section>
    )
}
