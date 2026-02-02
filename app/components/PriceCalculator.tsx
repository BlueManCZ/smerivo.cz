"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { useTranslations } from "../i18n/context";
import AnimatedSection from "./AnimatedSection";

type Tier = "landing" | "business" | "application" | "corporate";

const tierPrices: Record<Tier, number> = {
  landing: 15000,
  business: 35000,
  application: 70000,
  corporate: 150000,
};

const addonPrices: Record<string, number> = {
  contactForm: 3000,
  database: 20000,
  localization: 8000,
  seo: 5000,
  analytics: 3000,
  blog: 15000,
  ecommerce: 25000,
  auth: 12000,
  api: 10000,
};

const DESIGN_DISCOUNT = 0.15;
const NONPROFIT_DISCOUNT = 0.5;

function formatPrice(price: number): string {
  return price.toLocaleString("cs-CZ");
}

export default function PriceCalculator() {
  const t = useTranslations();
  const [selectedTier, setSelectedTier] = useState<Tier>("business");
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [hasDesign, setHasDesign] = useState(false);
  const [isNonprofit, setIsNonprofit] = useState(false);

  const tiers: { key: Tier; icon: string }[] = [
    { key: "landing", icon: "01" },
    { key: "business", icon: "02" },
    { key: "application", icon: "03" },
    { key: "corporate", icon: "04" },
  ];

  const addonKeys = Object.keys(addonPrices);

  const toggleAddon = (key: string) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const { designDiscount, nonprofitDiscount, total } = useMemo(() => {
    const base = tierPrices[selectedTier];
    const addons = Array.from(selectedAddons).reduce(
      (sum, key) => sum + (addonPrices[key] ?? 0),
      0,
    );
    const subtotal = base + addons;
    const designDiscount = hasDesign
      ? Math.round(subtotal * DESIGN_DISCOUNT)
      : 0;
    const afterDesign = subtotal - designDiscount;
    const nonprofitDiscount = isNonprofit
      ? Math.round(afterDesign * NONPROFIT_DISCOUNT)
      : 0;
    const total = afterDesign - nonprofitDiscount;
    return { subtotal, designDiscount, nonprofitDiscount, total };
  }, [selectedTier, selectedAddons, hasDesign, isNonprofit]);

  const lastDesignDiscount = useRef(designDiscount);
  const lastNonprofitDiscount = useRef(nonprofitDiscount);
  if (designDiscount > 0) lastDesignDiscount.current = designDiscount;
  if (nonprofitDiscount > 0) lastNonprofitDiscount.current = nonprofitDiscount;

  return (
    <section id="pricing" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Section label */}
          <div className="md:col-span-4 lg:col-span-3">
            <AnimatedSection>
              <div className="sticky top-28">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {t.pricing.number}
                </span>
                <h2
                  className="mt-2 text-4xl tracking-tight lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.pricing.title}
                  <br />
                  <span className="italic text-accent">
                    {t.pricing.titleLine2}
                  </span>
                </h2>
                <div className="mt-4 h-px w-16 bg-accent" />
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {t.pricing.description}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Calculator */}
          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
            {/* Tier selection */}
            <AnimatedSection>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
                {t.pricing.tierLabel}
              </p>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {tiers.map((tier) => {
                  const active = selectedTier === tier.key;
                  return (
                    <motion.button
                      key={tier.key}
                      type="button"
                      onClick={() => setSelectedTier(tier.key)}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className={`group relative border p-4 text-left transition-all duration-300 lg:p-5 ${
                        active
                          ? "border-accent bg-surface"
                          : "border-border hover:border-muted"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="tier-indicator"
                          className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span
                        className={`block font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
                          active ? "text-accent" : "text-muted"
                        }`}
                      >
                        {tier.icon}
                      </span>
                      <span
                        className={`mt-2 block text-lg tracking-tight ${
                          active ? "text-foreground" : "text-muted"
                        }`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {t.pricing.tiers[tier.key].name}
                      </span>
                      <span className="mt-1 block font-mono text-[0.65rem] text-muted">
                        {t.pricing.from} {formatPrice(tierPrices[tier.key])}{" "}
                        {t.pricing.currency}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Tier description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedTier}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 text-sm leading-relaxed text-muted"
                >
                  {t.pricing.tiers[selectedTier].description}
                </motion.p>
              </AnimatePresence>
            </AnimatedSection>

            {/* Addons */}
            <AnimatedSection delay={0.1}>
              <div className="mt-10">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  {t.pricing.addonsLabel}
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {addonKeys.map((key) => {
                    const active = selectedAddons.has(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleAddon(key)}
                        className={`group flex items-center justify-between border px-4 py-3 text-left transition-all duration-300 ${
                          active
                            ? "border-accent bg-surface"
                            : "border-border hover:border-muted"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-all duration-200 ${
                              active
                                ? "border-accent bg-accent"
                                : "border-muted"
                            }`}
                          >
                            {active && (
                              <motion.svg
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="h-2.5 w-2.5 text-background"
                                viewBox="0 0 12 12"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <title>Addon selected</title>
                                <path d="M2 6l3 3 5-5" />
                              </motion.svg>
                            )}
                          </div>
                          <span
                            className={`text-sm transition-colors ${
                              active ? "text-foreground" : "text-muted"
                            }`}
                          >
                            {
                              t.pricing.addons[
                                key as keyof typeof t.pricing.addons
                              ]
                            }
                          </span>
                        </div>
                        <span className="font-mono text-[0.6rem] text-muted">
                          +{formatPrice(addonPrices[key])}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Design discount toggle */}
            <AnimatedSection delay={0.15}>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setHasDesign(!hasDesign)}
                  className={`group flex w-full items-center justify-between border px-5 py-4 text-left transition-all duration-300 ${
                    hasDesign
                      ? "border-accent bg-surface"
                      : "border-border hover:border-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-all duration-200 ${
                        hasDesign ? "border-accent bg-accent" : "border-muted"
                      }`}
                    >
                      {hasDesign && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="h-2.5 w-2.5 text-background"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <title>Addon selected</title>
                          <path d="M2 6l3 3 5-5" />
                        </motion.svg>
                      )}
                    </div>
                    <div>
                      <span
                        className={`block text-sm transition-colors ${
                          hasDesign ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {t.pricing.designReady}
                      </span>
                      <span className="block font-mono text-[0.6rem] text-muted">
                        {t.pricing.designReadyHint}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-accent">
                    &minus;15%
                  </span>
                </button>

                {/* Nonprofit discount toggle */}
                <button
                  type="button"
                  onClick={() => setIsNonprofit(!isNonprofit)}
                  className={`group mt-2 flex w-full items-center justify-between border px-5 py-4 text-left transition-all duration-300 ${
                    isNonprofit
                      ? "border-accent bg-surface"
                      : "border-border hover:border-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-all duration-200 ${
                        isNonprofit ? "border-accent bg-accent" : "border-muted"
                      }`}
                    >
                      {isNonprofit && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="h-2.5 w-2.5 text-background"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <title>Nonprofit selected</title>
                          <path d="M2 6l3 3 5-5" />
                        </motion.svg>
                      )}
                    </div>
                    <div>
                      <span
                        className={`block text-sm transition-colors ${
                          isNonprofit ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {t.pricing.nonprofit}
                      </span>
                      <span className="block font-mono text-[0.6rem] text-muted">
                        {t.pricing.nonprofitHint}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-accent">
                    &minus;50%
                  </span>
                </button>
              </div>
            </AnimatedSection>

            {/* Price summary */}
            <AnimatedSection delay={0.2}>
              <div className="mt-10 border border-border p-6 lg:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  {t.pricing.estimate}
                </p>

                <div className="mt-6">
                  {/* Base */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">
                      {t.pricing.tiers[selectedTier].name}
                    </span>
                    <span className="font-mono text-sm text-foreground">
                      {formatPrice(tierPrices[selectedTier])}{" "}
                      {t.pricing.currency}
                    </span>
                  </div>

                  {/* Active addons */}
                  {Array.from(selectedAddons).map((key) => (
                    <div
                      key={key}
                      className="mt-3 flex items-center justify-between"
                    >
                      <span className="text-sm text-muted">
                        {t.pricing.addons[key as keyof typeof t.pricing.addons]}
                      </span>
                      <span className="font-mono text-sm text-foreground">
                        +{formatPrice(addonPrices[key])} {t.pricing.currency}
                      </span>
                    </div>
                  ))}

                  {/* Discounts — always in DOM, animated to zero height */}
                  <motion.div
                    animate={
                      hasDesign && designDiscount > 0
                        ? { opacity: 1, height: "auto", marginTop: 12 }
                        : { opacity: 0, height: 0, marginTop: 0 }
                    }
                    initial={false}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent">
                        {t.pricing.designDiscount}
                      </span>
                      <span className="font-mono text-sm text-accent">
                        &minus;{formatPrice(lastDesignDiscount.current)}{" "}
                        {t.pricing.currency}
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={
                      isNonprofit && nonprofitDiscount > 0
                        ? { opacity: 1, height: "auto", marginTop: 12 }
                        : { opacity: 0, height: 0, marginTop: 0 }
                    }
                    initial={false}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent">
                        {t.pricing.nonprofitDiscount}
                      </span>
                      <span className="font-mono text-sm text-accent">
                        &minus;{formatPrice(lastNonprofitDiscount.current)}{" "}
                        {t.pricing.currency}
                      </span>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div className="mt-3 hr-accent" />

                  {/* Total */}
                  <div className="mt-3 flex items-end justify-between pt-2">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                      {t.pricing.total}
                    </span>
                    <motion.span
                      key={total}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl tracking-tight text-foreground lg:text-4xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {formatPrice(total)}{" "}
                      <span className="text-lg text-muted">
                        {t.pricing.currency}
                      </span>
                    </motion.span>
                  </div>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-muted">
                  {t.pricing.disclaimer}
                  <a
                    href="mailto:ivo.smerek@gmail.com"
                    className="text-accent underline underline-offset-2 transition-colors hover:text-foreground"
                  >
                    ivo.smerek@gmail.com
                  </a>
                  {t.pricing.disclaimerEnd}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
