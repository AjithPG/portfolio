import { Layout, Pencil, Box, LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
    Layout: Layout,
    Pencil: Pencil,
    Box: Box,
}

const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    violet: "bg-violet-500",
    emerald: "bg-emerald-500",
}


interface SkillCardProps {

    category: string;
    icon: string;
    color: string;
    items: string[];
}

export function SkillCard({ category, icon, color, items }: SkillCardProps) {
    const Icon = iconMap[icon] || Box
    const iconColorClass = colorMap[color] || "bg-muted-foreground"

    return (

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 h-full">
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-2 rounded-lg ${iconColorClass} text-white shadow-md transition-colors`}>
                    <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight transition-colors">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                    <span
                        key={idx}
                        className={`px-3 py-1 text-[12px] font-normal rounded-lg border transition-all duration-500 bg-gray-100 text-secondary-500`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

