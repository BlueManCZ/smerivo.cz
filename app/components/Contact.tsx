"use client";

import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "../i18n/context";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ivosmerek",
  },
  {
    label: "GitHub",
    href: "https://www.github.com/BlueManCZ",
  },
  {
    label: "Telegram",
    href: "https://t.me/BlueManCZ",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ivo.smerek",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/ivo_smerek",
  },
];

export default function Contact() {
  const t = useTranslations();

  return (
    <section id="contact" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="border-t border-border pt-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {t.contact.number}
            </span>
            <h2
              className="mt-4 text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.contact.titleLine1}
              <br />
              <span className="italic text-accent">{t.contact.titleLine2}</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted lg:text-lg">
            {t.contact.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-14 flex flex-wrap gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-2 border border-border px-5 py-3 transition-colors hover:border-accent hover:bg-accent"
              >
                <span className="font-mono text-sm uppercase tracking-[0.15em] text-foreground transition-colors group-hover:text-background">
                  {social.label}
                </span>
                <svg
                  className="h-3 w-3 text-muted transition-colors group-hover:text-background"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 11L11 1M11 1H3M11 1v8" />
                </svg>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl border-t border-border pt-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <span className="font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()} {t.contact.footer}
          </span>
          <span className="font-mono text-xs text-muted">
            {t.contact.location}
          </span>
        </div>
      </div>
    </section>
  );
}
