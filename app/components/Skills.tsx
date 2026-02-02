"use client";

import { useTranslations } from "../i18n/context";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const t = useTranslations();

  const skillGroups = [
    {
      category: t.skills.languages,
      items: ["TypeScript", "JavaScript", "Python"],
    },
    {
      category: t.skills.frameworks,
      items: ["Next.js", "SvelteKit", "Django", "Flask"],
    },
    {
      category: t.skills.frontend,
      items: ["React", "shadcn/ui", "Tailwind CSS"],
    },
    {
      category: t.skills.tools,
      items: ["Git", "Docker", "Linux", "PostgreSQL"],
    },
  ];

  return (
    <section id="skills" className="relative px-6 py-32 lg:px-12">
      {/* Marquee divider */}
      <div className="mb-24 overflow-hidden border-y border-border py-5">
        <div className="marquee-track flex w-max gap-12">
          {Array.from({ length: 2 }).map((_, dupeIdx) =>
            skillGroups
              .flatMap((g) => g.items)
              .map((skill) => (
                <span
                  key={`${dupeIdx}-${skill}`}
                  className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-muted"
                >
                  {skill}
                  <span className="ml-12 text-accent">/</span>
                </span>
              )),
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Section label */}
          <div className="md:col-span-4 lg:col-span-3">
            <AnimatedSection>
              <div className="sticky top-28">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {t.skills.number}
                </span>
                <h2
                  className="mt-2 text-4xl tracking-tight lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.skills.title}
                </h2>
                <div className="mt-4 h-px w-16 bg-accent" />
              </div>
            </AnimatedSection>
          </div>

          {/* Skill groups */}
          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
            <div className="grid gap-10 sm:grid-cols-2">
              {skillGroups.map((group, gIdx) => (
                <AnimatedSection key={group.category} delay={gIdx * 0.1}>
                  <div>
                    <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="skill-tag relative z-10 cursor-default border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors"
                        >
                          <span className="relative z-10">{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
