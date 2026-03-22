import { Linkedin,Github, Mail, MessageCircle, MapPin, LucideIcon, ArrowUpRight } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
    Linkedin: Linkedin,
    Mail: Mail,
    MessageCircle: MessageCircle,
    Github: Github,
}

const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-emerald-500",
    slate: "bg-slate-500",
}

interface ContactCardProps {
    label: string;
    value: string;
    url: string;
    icon: string;
    color: string;
}

export function ContactCard({ label, value, url, icon, color }: ContactCardProps) {
    const Icon = iconMap[icon] || Mail
    const colorBg = colorMap[color] || "bg-gray-500"

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-card border border-border rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 group cursor-default h-full"
        >
            <div className={`p-4 rounded-2xl ${colorBg} text-white shadow-xl transform group-hover:scale-105 transition-all duration-300`}>
                <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest transition-colors">{label}</p>
                <div className="flex items-center gap-2 mt-1">
                    <h3 className="text-[14px] font-bold text-foreground group-hover:text-primary transition-colors truncate">{value}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all group-hover:text-primary" />
                </div>
            </div>
        </a>
    )
}


