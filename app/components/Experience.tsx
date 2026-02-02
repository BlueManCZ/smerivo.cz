"use client";

import { useTranslations } from "../i18n/context";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const t = useTranslations();

  return (
    <section id="experience" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Section label */}
          <div className="md:col-span-4 lg:col-span-3">
            <AnimatedSection>
              <div className="sticky top-28">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {t.experience.number}
                </span>
                <h2
                  className="mt-2 text-4xl tracking-tight lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.experience.title}
                </h2>
                <div className="mt-4 h-px w-16 bg-accent" />
              </div>
            </AnimatedSection>
          </div>

          {/* Timeline */}
          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
            <div className="relative border-l border-border">
              {t.experience.items.map((item, idx) => {
                const isPresent = !item.period.includes("–");
                const dateLabel = isPresent
                  ? `${item.period} – ${t.experience.present}`
                  : item.period;
                const isLast = idx === t.experience.items.length - 1;

                return (
                  <AnimatedSection key={item.company} delay={idx * 0.1}>
                    <div
                      className={`group relative pl-8 ${isLast ? "" : "pb-12"}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background transition-colors group-hover:bg-accent" />

                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3
                          className="text-2xl tracking-tight text-accent"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.company}
                        </h3>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                          {dateLabel}
                        </span>
                      </div>

                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                        {item.role}
                      </p>

                      <p className="mt-3 leading-relaxed text-secondary">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-border px-3 py-1 font-mono text-xs text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
