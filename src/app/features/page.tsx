import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Features — Circumference Calculator Tools",
  description:
    "Features of Circumference Calculator: solve from radius, diameter, circumference, or area, unit switching, live diagram, and related circle tools.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Features — Circumference Calculator Tools",
    description: "Everything included in the free circumference calculator suite.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Circumference Calculator features" }],
  },
};

const faqs = [
  {
    question: "What can Circumference Calculator solve?",
    answer:
      "Radius, diameter, circumference, and area from any one known value, with mm, cm, m, in, or ft units.",
  },
  {
    question: "Does it show the formula used?",
    answer:
      "Yes. Each calculation includes a step line such as C = 2πr or d = C ÷ π so you can verify the math.",
  },
  {
    question: "Are there related tools?",
    answer:
      "Yes — dedicated diameter, radius, and circle area calculator pages plus educational blog guides.",
  },
];

const features = [
  {
    title: "Any-value input",
    body: "Start from radius, diameter, circumference, or area. Most competitor tools lock you to one field.",
  },
  {
    title: "Live circle diagram",
    body: "See radius, arc, and π callouts update with your numbers so the geometry stays visual.",
  },
  {
    title: "Unit switching",
    body: "Work in mm, cm, m, in, or ft without rewriting formulas. Area uses the matching squared unit.",
  },
  {
    title: "Formula transparency",
    body: "Every result shows the equation used — ideal for homework checks and teaching demos.",
  },
  {
    title: "Related converters",
    body: "Diameter, radius, and area calculators cover adjacent search intents without cannibalizing the main tool.",
  },
  {
    title: "SERP-backed guides",
    body: "Blog posts only for how-to find circumference, radius vs diameter, and what π means — topics people search.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features", href: "/features" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-6">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Circumference Calculator features
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-ink/70">
          Built to beat thin calculator pages: convert any circle measurement, show the formula, and
          keep related tools one click away.
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <article key={f.title} className="rounded-2xl border border-ink/8 bg-white/80 p-5">
              <h2 className="font-display text-xl font-semibold text-ink">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.body}</p>
            </article>
          ))}
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <Image
              src={BRAND_FEATURE_2}
              alt="Circumference Calculator tool features and formula display"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <Image
              src={BRAND_FEATURE_4}
              alt="Circumference Calculator website branding preview"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mb-10">
          <CtaButton href="/#calculator" ariaLabel="Open circumference calculator">
            OPEN CALCULATOR
          </CtaButton>
        </div>

        <FaqSection items={faqs} title="Features FAQs" />
      </div>
    </>
  );
}
