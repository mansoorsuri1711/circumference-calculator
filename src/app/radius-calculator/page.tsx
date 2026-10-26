import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CircumferenceCalculator from "@/components/CircumferenceCalculator";
import FaqSection from "@/components/FaqSection";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Radius Calculator — From Circumference or Diameter",
  description:
    "Free radius calculator: convert circumference or diameter to radius with r = C ÷ 2π and r = d ÷ 2.",
  alternates: { canonical: `${SITE_ORIGIN}/radius-calculator` },
  openGraph: {
    title: "Radius Calculator — From Circumference or Diameter",
    description: "Find a circle’s radius from circumference, diameter, or area.",
    url: `${SITE_ORIGIN}/radius-calculator`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I find radius from circumference?",
    answer: "Use r = C ÷ (2π). Enter circumference in the calculator and read the radius result.",
  },
  {
    question: "How do I find radius from diameter?",
    answer: "Halve the diameter: r = d ÷ 2. Radius is always half of diameter.",
  },
  {
    question: "Why is radius used in C = 2πr?",
    answer:
      "Radius measures from the center to the edge. Multiplying by 2π wraps that length around the full circle once.",
  },
];

export default function RadiusCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Radius Calculator", href: "/radius-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">
          Radius Calculator
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-ink/70">
          Solve radius from circumference or diameter, then see the matching circumference on{" "}
          <Link href="/" className="font-semibold text-violet-deep underline">
            Circumference Calculator
          </Link>
          .
        </p>
        <CircumferenceCalculator defaultMode="diameter" defaultValue="20" title="Radius from diameter" />
        <section className="mt-12 max-w-3xl space-y-4 leading-relaxed text-ink/75">
          <h2 className="font-display text-2xl font-bold text-ink">Radius formulas</h2>
          <p>
            Radius is the building block for circumference and area. Searches for “radius of a
            circle calculator” and “circumference to radius” map directly to these equations.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">r = C ÷ (2π)</strong>
            </li>
            <li>
              <strong className="text-ink">r = d ÷ 2</strong>
            </li>
            <li>
              <strong className="text-ink">r = √(A ÷ π)</strong>
            </li>
          </ul>
          <p>
            Compare the three lengths in our{" "}
            <Link
              href="/blog/radius-vs-diameter-vs-circumference"
              className="font-semibold text-violet-deep underline"
            >
              radius vs diameter vs circumference
            </Link>{" "}
            guide.
          </p>
        </section>
        <FaqSection items={faqs} title="Radius calculator FAQs" />
      </div>
    </>
  );
}
