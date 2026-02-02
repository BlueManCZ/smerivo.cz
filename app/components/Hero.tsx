"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "../i18n/context";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 lg:px-12">
      {/* Grid pattern background */}
      <div className="grid-pattern absolute inset-0" />

      {/* Diagonal accent lines */}
      <div className="diagonal-line" style={{ left: "15%", top: "-20%" }} />
      <div className="diagonal-line" style={{ left: "85%", top: "-40%" }} />

      {/* Large background letter */}
      <div
        className="pointer-events-none absolute right-[-5%] top-[10%] select-none text-[clamp(20rem,45vw,50rem)] leading-[0.75] text-surface-elevated"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        Š
      </div>

      {/* Profile photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="profile-photo pointer-events-none absolute right-[8%] top-[18%] z-1 hidden aspect-square w-[clamp(14rem,22vw,22rem)] lg:block"
      >
        <div className="relative h-full w-full overflow-hidden border border-border">
          <Image
            src="/profile.jpg"
            alt="Ivo Šmerek"
            fill
            className="object-cover grayscale contrast-125 brightness-90"
            sizes="(min-width: 1024px) 22vw, 0px"
            priority
          />
          {/* Accent overlay */}
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
        </div>
        {/* Corner accents */}
        <div className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-accent" />
        <div className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-accent" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Top line - monospace label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {t.hero.subtitle}
          </span>
        </motion.div>

        {/* Name - massive display type */}
        <div className="overflow-hidden mb-5">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ivo
          </motion.h1>
        </div>
        <div style={{ clipPath: "inset(-2em 0 0 0)" }}>
          <motion.h1
            initial={{ y: "130%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.72,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="-mt-2 text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-tight lg:-mt-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="italic text-accent">Šmerek</span>
          </motion.h1>
        </div>

        {/* Bottom row - description + scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-start justify-between gap-8 md:mt-16 md:flex-row md:items-end"
        >
          <p className="max-w-lg text-base leading-relaxed text-muted lg:text-lg">
            {t.hero.description}
            <br />
            {t.hero.descriptionLine2}
          </p>

          <div className="flex items-center gap-3 text-muted">
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              {t.hero.scroll}
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="text-accent"
            >
              &darr;
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
