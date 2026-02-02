"use client";

import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "../i18n/context";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative grid gap-12 md:grid-cols-12">
          {/* Section label */}
          <div className="md:col-span-4 lg:col-span-3">
            <AnimatedSection>
              <div className="sticky top-28">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {t.about.number}
                </span>
                <h2
                  className="mt-2 text-4xl tracking-tight lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.about.title}
                </h2>
                <div className="mt-4 h-px w-16 bg-accent" />
              </div>
            </AnimatedSection>
          </div>

          {/* Content */}
          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
            <AnimatedSection delay={0.1}>
              <p className="text-xl leading-relaxed text-muted lg:text-2xl lg:leading-relaxed">
                {t.about.intro}
                <span className="text-foreground">
                  {t.about.introHighlight}
                </span>
                {t.about.introEnd}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-muted lg:text-lg">
                {t.about.education}
                <span className="text-foreground">
                  {t.about.educationHighlight}
                </span>
                {t.about.educationEnd}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                {t.about.current}
                <span className="text-foreground">
                  {t.about.currentHighlight}
                </span>
                {t.about.currentEnd}
              </p>
            </AnimatedSection>

            {/* Stats row */}
            <AnimatedSection delay={0.4}>
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
                <div>
                  <span
                    className="text-4xl text-accent lg:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    10+
                  </span>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                    {t.about.statsYears}
                  </p>
                </div>
                <div>
                  <span
                    className="text-4xl text-accent lg:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.about.statsDegreeValue}
                  </span>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                    {t.about.statsDegree}
                  </p>
                </div>
                <div>
                  <span
                    className="text-4xl text-accent lg:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    CZ
                  </span>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                    {t.about.statsLocation}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
