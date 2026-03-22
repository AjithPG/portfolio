import { LucideIcon, Briefcase, Laptop, Pencil, GraduationCap } from "lucide-react"


const iconMap: Record<string, LucideIcon> = {
    Briefcase: Briefcase,
    Laptop: Laptop,
    Pencil: Pencil,
    GraduationCap: GraduationCap,
}

const colorMap: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
    blue: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
    orange: "bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
    primary: "bg-primary-50 text-primary-600 border-primary-100 dark:bg-primary-500/10 dark:text-primary-400 dark:border-primary-500/20",
}

const iconColorMap: Record<string, string> = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    primary: "bg-primary-500",
}

interface ExperienceCardProps {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    highlights?: string[];
    tech: string[];
    icon: string;
    color: string;
    status?: string;
}

export function ExperienceCard({
    role,
    company,
    period,
    location,
    description,
    highlights,
    tech,
    icon,
    color,
    status
}: ExperienceCardProps) {
    const Icon = iconMap[icon] || Briefcase
    const colorClasses = colorMap[color] || colorMap.slate
    const iconBg = iconColorMap[color] || "bg-muted-foreground"

    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex gap-4">
                    <div className={`p-3 rounded-xl ${iconBg} text-white shadow-lg shrink-0 h-fit transition-all duration-500`}>
                        <Icon className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold text-foreground transition-colors uppercase tracking-tight">{role}</h3>
                            {status && (
                                <span className="bg-emerald-50 text-emerald-600 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-400 dark:border-emerald-400/20 transition-colors">
                                    {status}
                                </span>
                            )}
                        </div>
                        <p className="text-muted-foreground font-medium text-sm mt-0.5 transition-colors">{company}</p>
                        <p className="text-xs text-muted-foreground mt-1 transition-colors">{location}</p>
                    </div>
                </div>
                <div className="md:text-right shrink-0">
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest transition-colors">{period}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl transition-colors">
                    {description}
                </p>
                {highlights && highlights.length > 0 && (
                    <ul className="list-disc ml-5 mt-4 space-y-1.5">
                        {highlights.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm leading-relaxed max-w-2xl transition-all">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-6">
                    {tech.map((t) => (
                        <span key={t} className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold border transition-all duration-500 ${colorClasses}`}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

