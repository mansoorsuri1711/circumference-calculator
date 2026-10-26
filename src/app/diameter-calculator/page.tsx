import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CircumferenceCalculator from "@/components/CircumferenceCalculator";
import FaqSection from "@/components/FaqSection";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Diameter Calculator — From Circumference or Radius",
  description:
    "Free diameter calculator: convert circumference or radius to diameter with d = C ÷ π and d = 2r. Instant circle results.",
  alternates: { canonical: `${SITE_ORIGIN}/diameter-calculator` },
  openGraph: {
    title: "Diameter Calculator — From Circumference or Radius",
    description: "Find a circle’s diameter from circumference, radius, or area.",
    url: `${SITE_ORIGIN}/diameter-calculator`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I calculate diameter from circumference?",
    answer: "Divide circumference by π: d = C ÷ π. Enter circumference in the calculator to see diameter instantly.",
  },
  {
    question: "How do I calculate diameter from radius?",
    answer: "Double the radius: d = 2r. The diameter is always twice the radius of the same circle.",
  },
  {
    question: "Is diameter the same as circumference?",
    answer:
      "No. Diameter is a straight line across the circle through the center. Circumference is the distance around the edge and equals π times the diameter.",
  },
];

export default function DiameterCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Diameter Calculator", href: "/diameter-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">
          Diameter Calculator
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-ink/70">
          Find diameter from circumference (d = C ÷ π) or radius (d = 2r). Part of{" "}
          <Link href="/" className="font-semibold text-violet-deep underline">
            Circumference Calculator
          </Link>
          .
        </p>
        <CircumferenceCalculator defaultMode="circumference" defaultValue="31.4159" title="Diameter from circumference" />
        <section className="mt-12 max-w-3xl space-y-4 leading-relaxed text-ink/75">
          <h2 className="font-display text-2xl font-bold text-ink">Diameter formulas</h2>
          <p>
            Diameter is the longest chord of a circle. Once you know circumference, divide by π.
            Once you know radius, multiply by two. Both routes appear in search results for
            “circumference to diameter calculator” and “diameter of a circle calculator.”
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">d = C ÷ π</strong> — reverse of C = πd
            </li>
            <li>
              <strong className="text-ink">d = 2r</strong> — radius is half the diameter
            </li>
            <li>
              <strong className="text-ink">d = 2√(A ÷ π)</strong> — when you start from area
            </li>
          </ul>
          <p>
            Need area instead? Open the{" "}
            <Link href="/circle-area-calculator" className="font-semibold text-violet-deep underline">
              circle area calculator
            </Link>
            .
          </p>
        </section>
        <FaqSection items={faqs} title="Diameter calculator FAQs" />
      </div>
    </>
  );
}
