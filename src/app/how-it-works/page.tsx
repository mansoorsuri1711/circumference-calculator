import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_FEATURE_3, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How Circumference Calculator Works",
  description:
    "Step-by-step: how Circumference Calculator converts radius, diameter, circumference, and area using C = 2πr and C = πd.",
  alternates: { canonical: `${SITE_ORIGIN}/how-it-works` },
  openGraph: {
    title: "How Circumference Calculator Works",
    description: "See the four-step workflow behind the free circle geometry tool.",
    url: `${SITE_ORIGIN}/how-it-works`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const steps = [
  {
    n: "1",
    title: "Pick the value you already know",
    body: "Choose radius, diameter, circumference, or area. You only need one positive measurement.",
  },
  {
    n: "2",
    title: "Enter the number and unit",
    body: "Type the value and select mm, cm, m, in, or ft. The tool keeps every output in that unit family.",
  },
  {
    n: "3",
    title: "Read the full circle",
    body: "Results update instantly for radius, diameter, circumference, and area, with a formula line you can copy.",
  },
  {
    n: "4",
    title: "Verify or dig deeper",
    body: "Check the step equation, skim a worked example on the homepage, or open a related converter or blog guide.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How It Works", href: "/how-it-works" },
        ]}
      />
      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-6">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          How {SITE_NAME} works
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-ink/70">
          A transparent workflow based on the same π relationships taught in school — automated so
          you can move faster without losing the math.
        </p>

        <ol className="mb-12 space-y-6">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-4 rounded-2xl border border-ink/8 bg-white/80 p-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-gold font-display text-lg font-bold text-white">
                {step.n}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-2 text-ink/70">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mb-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={BRAND_FEATURE_3}
              alt="How Circumference Calculator converts circle measurements"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-ink">Under the hood</h2>
            <p>
              All conversions reduce to a radius in centimeters, then expand back to your chosen
              unit. Circumference uses <strong className="text-ink">C = 2πr</strong>; diameter uses{" "}
              <strong className="text-ink">d = 2r</strong>; area uses{" "}
              <strong className="text-ink">A = πr²</strong>.
            </p>
            <p>
              New to the formulas? Read{" "}
              <Link
                href="/blog/how-to-find-circumference-of-a-circle"
                className="font-semibold text-violet-deep underline"
              >
                how to find the circumference of a circle
              </Link>
              .
            </p>
          </div>
        </div>

        <CtaButton href="/#calculator" ariaLabel="Try the circumference calculator">
          TRY IT NOW
        </CtaButton>
      </div>
    </>
  );
}
