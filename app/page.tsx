import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { Achievements } from "../components/Achievements";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { portfolioData } from "../data/portfolio";


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.name,
    "jobTitle": portfolioData.role,
    "url": "https://ajith-portfolio.vercel.app",
    "sameAs": [],
  };

  return (
    <div className="flex flex-col items-center bg-transparent min-h-screen text-gray-900 font-sans selection:bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full max-w-5xl px-6 py-12 md:py-20 flex flex-col gap-14 md:gap-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </div>

  );
}

