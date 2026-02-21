

interface SectionHeaderProps {
    title: string;
    className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
    return (
        <div className={`w-full text-center ${className}`}>
            <h2 className="text-base font-semibold mb-6 py-4 px-5 rounded-xl w-fit mx-auto border border-dotted bg-white dark:bg-zinc-900 text-primary-background hover:bg-white/50 dark:hover:bg-zinc-900/50">
                {title}
            </h2>
        </div>
    );
}
