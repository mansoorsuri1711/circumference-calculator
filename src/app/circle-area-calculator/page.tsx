import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CircumferenceCalculator from "@/components/CircumferenceCalculator";
import FaqSection from "@/components/FaqSection";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Circle Area Calculator — From Circumference or Radius",
  description:
    "Free circle area calculator using A = πr² or A = C² ÷ (4π). Convert circumference to area in one step.",
  alternates: { canonical: `${SITE_ORIGIN}/circle-area-calculator` },
  openGraph: {
    title: "Circle Area Calculator — From Circumference or Radius",
    description: "Find circle area from radius, diameter, or circumference.",
    url: `${SITE_ORIGIN}/circle-area-calculator`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I find area from circumference?",
    answer:
      "Use A = C² ÷ (4π), or find r = C ÷ (2π) first and then A = πr². Both are built into this calculator.",
  },
  {
    question: "What is the area formula for a circle?",
    answer: "A = πr² is the standard formula. Equivalently A = π(d ÷ 2)² when you know diameter.",
  },
  {
    question: "Are area units different from circumference units?",
    answer:
      "Yes. Circumference is a length (cm). Area is length squared (cm²). Keep the base unit the same when converting.",
  },
];

export default function CircleAreaCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Circle Area Calculator", href: "/circle-area-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">
          Circle Area Calculator
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-ink/70">
          Calculate area from radius, diameter, or circumference — then jump back to the{" "}
          <Link href="/" className="font-semibold text-violet-deep underline">
            circumference calculator
          </Link>{" "}
          for edge length.
        </p>
        <CircumferenceCalculator defaultMode="area" defaultValue="78.54" title="Area → circumference & radius" />
        <section className="mt-12 max-w-3xl space-y-4 leading-relaxed text-ink/75">
          <h2 className="font-display text-2xl font-bold text-ink">Area and circumference together</h2>
          <p>
            Competitor SERPs often separate “circle calculator” and “circumference calculator.”
            Here both live in one workflow: enter area to recover circumference, or enter
            circumference to recover area. That closes a common content gap for students who only
            know one measurement.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">A = πr²</strong>
            </li>
            <li>
              <strong className="text-ink">A = C² ÷ (4π)</strong>
            </li>
            <li>
              <strong className="text-ink">C = 2√(πA)</strong>
            </li>
          </ul>
        </section>
        <FaqSection items={faqs} title="Circle area calculator FAQs" />
      </div>
    </>
  );
}
