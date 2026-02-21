// src/lib/projects.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
    slug: string;
    title: string;
    description: string;
    tech: string[];
}

export function getProjects(): Project[] {
    const dir = path.join(process.cwd(), "content/projects");

    return fs.readdirSync(dir).map((file) => {
        const content = fs.readFileSync(path.join(dir, file), "utf-8");
        const { data } = matter(content); // extracts frontmatter

        return {
            slug: file.replace(".mdx", ""), // unique identifier
            ...data, // spread title, tech, description
        } as Project;
    });
}
