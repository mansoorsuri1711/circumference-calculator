import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import CircumferenceCalculator from "@/components/CircumferenceCalculator";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Circumference Calculator — Free C = 2πr Tool",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free circumference calculator to convert radius, diameter, and circumference with C = 2πr and C = πd. Instant area too.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Circumference Calculator — Free C = 2πr Tool",
    description:
      "Solve any circle measurement: radius, diameter, circumference, or area in seconds.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Circumference Calculator homepage — free circle geometry tool",
      },
    ],
  },
};

const faqs = [
  {
    question: "How do I find the circumference of a circle?",
    answer:
      "Use C = 2πr if you know the radius, or C = πd if you know the diameter. Enter either value in Circumference Calculator and the tool returns circumference, the missing length, and area automatically.",
  },
  {
    question: "What is the circumference of a circle?",
    answer:
      "Circumference is the distance around a circle — the circle’s perimeter. It always equals π times the diameter, or twice π times the radius.",
  },
  {
    question: "What is the formula for circumference?",
    answer:
      "The two equivalent formulas are C = 2πr and C = πd, where r is radius, d is diameter, and π ≈ 3.14159. Because d = 2r, both expressions give the same result.",
  },
  {
    question: "How do I find the diameter from the circumference?",
    answer:
      "Divide circumference by π: d = C ÷ π. Switch the calculator input to Circumference, enter C, and read the diameter output.",
  },
  {
    question: "How do I find the radius from the circumference?",
    answer:
      "Divide circumference by 2π: r = C ÷ (2π). The calculator also shows radius when you enter circumference or diameter.",
  },
  {
    question: "How do I find the area of a circle from the circumference?",
    answer:
      "First find the radius with r = C ÷ (2π), then use A = πr². Equivalently, A = C² ÷ (4π). Circumference Calculator shows area whenever you enter a valid circle length.",
  },
  {
    question: "What units does circumference use?",
    answer:
      "Circumference is a length, so it uses the same unit as radius or diameter — millimeters, centimeters, meters, inches, or feet. Area uses the squared form of that unit (for example cm²).",
  },
  {
    question: "Is Circumference Calculator free?",
    answer:
      "Yes. The full tool on circumferencecalculator.org is free, with no account required. It is an educational math tool, not a homework-grading service.",
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description:
          "Free circumference calculator for radius, diameter, circumference, and circle area.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "Circumference Calculator — Free C = 2πr Tool",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${BRAND_HERO}`,
          width: 1200,
          height: 630,
          ...imageObjectLicensing,
        },
      },
      {
        ...WEB_APPLICATION_JSON_LD,
        "@id": `${SITE_ORIGIN}/#software`,
        description:
          "Web-based circumference calculator that converts radius, diameter, circumference, and area.",
      },
      {
        "@type": "HowTo",
        name: "How to use the free circumference calculator",
        description: "Find circumference, diameter, radius, or area in four steps.",
        step: [
          {
            "@type": "HowToStep",
            name: "Choose what you know",
            text: "Select radius, diameter, circumference, or area as your starting value.",
          },
          {
            "@type": "HowToStep",
            name: "Enter the measurement",
            text: "Type a positive number and pick a unit such as cm, m, in, or ft.",
          },
          {
            "@type": "HowToStep",
            name: "Read all results",
            text: "The calculator shows radius, diameter, circumference, and area together.",
          },
          {
            "@type": "HowToStep",
            name: "Check the formula line",
            text: "Use the step equation under the inputs to verify C = 2πr or C = πd by hand.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section id="calculator" className="relative overflow-hidden scroll-mt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-glow absolute -left-20 top-0 h-48 w-48 rounded-full bg-violet/25 blur-3xl" />
          <div
            className="hero-glow absolute -right-10 top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
          <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            <span className="brand-gradient-text">{SITE_NAME}</span>
          </h1>
          <p className="mb-6 max-w-2xl font-display text-lg font-semibold leading-snug text-ink/80 sm:text-xl md:text-2xl">
            Convert radius, diameter, and circumference in one place
          </p>

          <CircumferenceCalculator />

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Free circle geometry tool — enter any one value and get circumference, diameter, radius,
            and area with the formulas C = 2πr and C = πd.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-ink/60 sm:gap-3">
            <span
              className="inline-flex items-center gap-1.5"
              aria-label={`Rated ${SITE_RATING.ratingValue} out of 5`}
            >
              <span className="font-semibold text-gold">{SITE_RATING.ratingValue}</span>
              <span className="tracking-tight text-gold" aria-hidden="true">
                ★★★★★
              </span>
              <span>({Number(SITE_RATING.ratingCount).toLocaleString()})</span>
            </span>
            <span className="text-ink/25">·</span>
            <span>Free</span>
            <span className="text-ink/25">·</span>
            <span>Web</span>
            <span className="text-ink/25">·</span>
            <span>Math tool</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Free circumference calculator for school, work, and DIY
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-ink/75">
              A <strong className="text-ink">circumference calculator</strong> answers one of the
              most common geometry searches: how far is it around a circle? Give the tool a radius or
              diameter and it returns circumference instantly. Start from circumference instead and
              it solves back to radius, diameter, and area.
            </p>
            <p className="mb-4 leading-relaxed text-ink/70">
              Top ranking pages from Omni Calculator, Calculator.net, Inch Calculator, and Pearson
              cover the same core formulas. This site closes the usual gaps: solve from any of four
              inputs, show a live diagram, list units clearly, and keep step equations visible next
              to the result — not buried in a sidebar.
            </p>
            <p className="leading-relaxed text-ink/70">
              Whether you searched for a circumference of a circle calculator, a diameter-to-circumference
              converter, or a quick way to check homework, the workflow is the same: pick what you
              know, enter the number, read every related measurement.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lg shadow-violet/10">
            <Image
              src={BRAND_HERO}
              alt="Circumference Calculator — convert radius, diameter, and circumference"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Formula for circumference of a circle
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/75">
            Every reliable circumference calculator uses the same relationship between a circle’s
            edge and its center measurements. Memorize these two forms and you can check any result
            by hand.
          </p>
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-violet/25 bg-white/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-deep">From radius</p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">C = 2πr</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Multiply the radius by 2π. If r = 10 cm, C = 2 × π × 10 ≈ 62.832 cm.
              </p>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-white/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-coral-deep">From diameter</p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">C = πd</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Multiply the diameter by π. If d = 20 cm, C = π × 20 ≈ 62.832 cm — same circle.
              </p>
            </div>
          </div>
          <ol className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Identify what you know",
                d: "Radius, diameter, circumference, or area — only one starting value is required.",
              },
              {
                n: "02",
                t: "Keep units consistent",
                d: "Use the same length unit for inputs and outputs. Area appears in that unit squared.",
              },
              {
                n: "03",
                t: "Apply π carefully",
                d: "π ≈ 3.14159. This tool uses full JavaScript Math.PI for precise results.",
              },
              {
                n: "04",
                t: "Convert the other way",
                d: "From circumference: d = C ÷ π and r = C ÷ (2π). Area follows from A = πr².",
              },
            ].map((step) => (
              <li key={step.n} className="border-t border-violet/35 pt-4">
                <span className="font-display text-sm font-bold text-violet-deep">{step.n}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Worked examples
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Radius → circumference",
                body: "A circle has radius 7 in. C = 2πr = 2 × π × 7 ≈ 43.982 in. Diameter is 14 in and area is about 153.938 in².",
              },
              {
                title: "Diameter → circumference",
                body: "A pipe is 10 cm across. C = πd = π × 10 ≈ 31.416 cm. That is the length of tape needed to wrap once around the outside.",
              },
              {
                title: "Circumference → radius",
                body: "A running track loop measures 400 m around. r = C ÷ (2π) ≈ 63.662 m. Diameter ≈ 127.324 m.",
              },
            ].map((ex) => (
              <article
                key={ex.title}
                className="rounded-2xl border border-ink/8 bg-white/70 p-5 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{ex.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{ex.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            Prefer a dedicated converter? Try the{" "}
            <Link href="/diameter-calculator" className="font-semibold text-violet-deep underline">
              diameter calculator
            </Link>
            ,{" "}
            <Link href="/radius-calculator" className="font-semibold text-violet-deep underline">
              radius calculator
            </Link>
            , or{" "}
            <Link href="/circle-area-calculator" className="font-semibold text-violet-deep underline">
              circle area calculator
            </Link>
            .
          </p>
        </section>

        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 overflow-hidden rounded-3xl border border-ink/10 bg-white md:order-1">
            <Image
              src={BRAND_FEATURE_2}
              alt="Circumference Calculator tool interface showing circle formulas"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              className="h-auto w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Circumference to diameter, radius, and area
            </h2>
            <p className="mb-4 leading-relaxed text-ink/75">
              Many searches start with circumference and ask for the other parts of the circle.
              That reverse path is built into this calculator: enter C, then read d = C ÷ π,
              r = C ÷ (2π), and A = C² ÷ (4π).
            </p>
            <p className="leading-relaxed text-ink/70">
              Students use it to check homework. Builders use it for pipe wraps and circular
              decks. Teachers use it to demonstrate why π appears whenever a circle’s edge meets
              a straight diameter. Read more in our guide on{" "}
              <Link
                href="/blog/what-is-pi-in-circumference"
                className="font-semibold text-violet-deep underline"
              >
                what pi means in circumference
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Why Circumference Calculator stands out
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Solve from any value",
                d: "Radius, diameter, circumference, or area — competitors often lock you to one input.",
              },
              {
                t: "Visible formulas",
                d: "Each result includes a step line so you can verify C = 2πr without leaving the page.",
              },
              {
                t: "Unit-aware outputs",
                d: "mm, cm, m, in, and ft stay consistent across length results, with area in unit².",
              },
              {
                t: "Related tools + guides",
                d: "Diameter, radius, and area calculators plus SERP-backed blogs for how-to and π questions.",
              },
            ].map((item) => (
              <li
                key={item.t}
                className="rounded-2xl border border-ink/8 bg-gradient-to-br from-white to-brand-soft/80 p-5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16 grid gap-8 md:grid-cols-3">
          {[
            {
              src: BRAND_FEATURE_3,
              alt: "Circumference Calculator app-style preview on circumferencecalculator.org",
              title: "Built for clarity",
              text: "Large results, a live circle diagram, and mode buttons that match how people actually search.",
            },
            {
              src: BRAND_FEATURE_4,
              alt: "Circumference Calculator website branding and geometry visuals",
              title: "Brand-first math site",
              text: "Sky-blue and amber visuals match the logo so the first viewport reads as Circumference Calculator — not a generic template.",
            },
            {
              src: BRAND_HERO,
              alt: "Free online circumference calculator hero graphic",
              title: "Fast and free",
              text: "No signup. No clutter. Open the calculator, enter a number, and copy the result for class or site work.",
            },
          ].map((card) => (
            <article key={card.title} className="overflow-hidden rounded-2xl border border-ink/8 bg-white/70">
              <Image
                src={card.src}
                alt={card.alt}
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
                className="h-auto w-full"
              />
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{card.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-16 rounded-3xl border border-violet/20 bg-gradient-to-r from-violet/10 via-white to-gold/10 p-6 sm:p-8">
          <h2 className="mb-3 font-display text-2xl font-bold text-ink">
            Learn the concepts behind the numbers
          </h2>
          <p className="mb-5 max-w-3xl text-ink/70">
            Beyond the tool, we publish only guides that match live search demand for circumference
            topics — not filler posts.
          </p>
          <ul className="grid gap-3 sm:grid-cols-3">
            <li>
              <Link
                href="/blog/how-to-find-circumference-of-a-circle"
                className="font-semibold text-violet-deep underline"
              >
                How to find the circumference of a circle
              </Link>
            </li>
            <li>
              <Link
                href="/blog/radius-vs-diameter-vs-circumference"
                className="font-semibold text-violet-deep underline"
              >
                Radius vs diameter vs circumference
              </Link>
            </li>
            <li>
              <Link
                href="/blog/what-is-pi-in-circumference"
                className="font-semibold text-violet-deep underline"
              >
                What is pi in circumference?
              </Link>
            </li>
          </ul>
        </section>

        <FaqSection items={faqs} title="Circumference calculator FAQs" includeSchema={false} />
      </div>
    </>
  );
}
