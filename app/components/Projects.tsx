"use client";

import { useTranslations } from "../i18n/context";
import AnimatedSection from "./AnimatedSection";

const projectsMeta = [
  {
    tech: [
      { name: "Svelte", url: "https://svelte.dev/" },
      { name: "Tauri", url: "https://tauri.app/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ],
    year: "2025",
  },
  {
    url: "https://donace.cz/",
    tech: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Turborepo", url: "https://turbo.build/" },
    ],
    year: "2024",
  },
  {
    url: "https://www.oknodopraxe.upol.cz",
    tech: [
      { name: "Django", url: "https://www.djangoproject.com/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "SASS", url: "https://sass-lang.com/" },
    ],
    year: "2021",
  },
  {
    url: "https://www.moric-olomouc.cz",
    articleUrl:
      "https://www.zurnal.upol.cz/nc/en/news/clanek/studenti-prf-vytvorili-webove-stranky-kostela-svateho-morice-i-unikatnich-englerovych-varhan/",
    tech: [
      { name: "Django", url: "https://www.djangoproject.com/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "Leaflet", url: "https://leafletjs.com/" },
      { name: "SASS", url: "https://sass-lang.com/" },
    ],
    year: "2019",
  },
  {
    tech: [
      { name: "Caveman 2", url: "https://8arrow.org/caveman/" },
      { name: "Common Lisp", url: "https://lisp-lang.org/" },
      { name: "particles.js", url: "https://vincentgarreau.com/particles.js/" },
      {
        name: "code-prettify",
        url: "https://github.com/googlearchive/code-prettify",
      },
    ],
    year: "2019",
  },
  {
    articleUrl:
      "https://www.denik.cz/spolecnost/jedeme-v-tom-spolecne-3-aneb-po-vlastech-ceskoslovenskych-20180222.html",
    tech: [
      { name: "Flask", url: "https://flask.palletsprojects.com/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "SCSS", url: "https://sass-lang.com/" },
    ],
    year: "2018",
  },
];

export default function Projects() {
  const t = useTranslations();

  return (
    <section id="projects" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Section label */}
          <div className="md:col-span-4 lg:col-span-3">
            <AnimatedSection>
              <div className="sticky top-28">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {t.projects.number}
                </span>
                <h2
                  className="mt-2 text-4xl tracking-tight lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.projects.title}
                  <br />
                  {t.projects.titleLine2}
                </h2>
                <div className="mt-4 h-px w-16 bg-accent" />
              </div>
            </AnimatedSection>
          </div>

          {/* Project cards */}
          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
            <div className="flex flex-col gap-6">
              {t.projects.items.map((project, i) => (
                <AnimatedSection key={project.title} delay={i * 0.1}>
                  <article className="project-card group p-6 lg:p-8">
                    {/* Top row: year + title */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="text-2xl tracking-tight transition-colors group-hover:text-accent lg:text-3xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {projectsMeta[i].url ? (
                            <a
                              href={projectsMeta[i].url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        {"articleUrl" in projectsMeta[i] && (
                          <a
                            href={projectsMeta[i].articleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
                          >
                            <span>{t.projects.article}</span>
                            <span>↗</span>
                          </a>
                        )}
                        {projectsMeta[i].url && (
                          <a
                            href={projectsMeta[i].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent transition-colors hover:text-foreground"
                          >
                            <span>{t.projects.visit}</span>
                            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                              ↗
                            </span>
                          </a>
                        )}
                        <span className="font-mono text-xs text-muted">
                          {projectsMeta[i].year}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {projectsMeta[i].tech.map((tech, tIdx) => (
                        <span
                          key={tech.name}
                          className="font-mono text-[0.65rem] uppercase tracking-[0.15em]"
                        >
                          <a
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent transition-colors hover:text-foreground"
                          >
                            {tech.name}
                          </a>
                          {tIdx < projectsMeta[i].tech.length - 1 && (
                            <span className="ml-2 text-border">/</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
