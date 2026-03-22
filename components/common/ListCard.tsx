import { CheckCircle, Star, LucideIcon, ArrowUpRight } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
    CheckCircle: CheckCircle,
    Star: Star,
}

const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
}

interface ListCardProps {
    title: string;
    description: string;
    icon: string;
    linkText: string;
    url: string;
    color: string;
}

export function ListCard({ title, description, icon, linkText, url, color }: ListCardProps) {
    const Icon = iconMap[icon] || CheckCircle
    const iconColorClass = colorMap[color] || "bg-muted-foreground"

    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 group cursor-default h-full">
            <div className="flex items-start gap-5">
                <div className={`p-3 rounded-full ${iconColorClass} text-white shadow-xl shrink-0 h-fit transition-all duration-500`}>
                    <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 flex flex-col justify-between min-h-[50px]">
                    <div>
                        <h3 className="text-[14px] font-bold text-foreground leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">{title}</h3>
                        <p className="text-[12px] text-muted-foreground mt-1 font-medium transition-colors">{description}</p>
                    </div>
                    <div className="mt-4">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
                        >
                            {linkText} <ArrowUpRight className="h-4 w-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



