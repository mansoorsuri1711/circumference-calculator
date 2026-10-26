import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Circumference Calculator",
  description:
    "About Circumference Calculator on circumferencecalculator.org — a free circle geometry tool and guides for circumference, radius, diameter, and pi.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Circumference Calculator",
    description: `Independent circumference calculator and guides on ${SITE_DOMAIN}.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us" }]} />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_LOGO}
              alt="Circumference Calculator logo"
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-ink/75">
              {SITE_NAME} is a free web tool on {SITE_DOMAIN} that helps students, teachers, and
              builders convert radius, diameter, circumference, and circle area with clear formulas.
              We are an educational site — not a tutoring marketplace.
            </p>
          </div>
        </div>

        <section className="mb-10 space-y-4 leading-relaxed text-ink/75">
          <h2 className="font-display text-2xl font-bold text-ink">What we build</h2>
          <p>
            The core product is a{" "}
            <Link href="/" className="text-violet-deep underline">
              circumference calculator
            </Link>{" "}
            that solves from any one circle measurement, plus focused tools for{" "}
            <Link href="/diameter-calculator" className="text-violet-deep underline">
              diameter
            </Link>
            ,{" "}
            <Link href="/radius-calculator" className="text-violet-deep underline">
              radius
            </Link>
            , and{" "}
            <Link href="/circle-area-calculator" className="text-violet-deep underline">
              circle area
            </Link>
            . Supporting guides cover how to find circumference, how radius and diameter relate, and
            why π appears in the formulas — topics people actually search.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Our approach</h2>
          <p>
            Clear math, visible equations, and no gimmicks. Results use full-precision π from the
            browser. Use the calculator to learn and check work; for graded assessments, follow your
            teacher’s rounding rules.
          </p>
          <p>
            Questions? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-deep underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <CtaButton href="/#calculator" ariaLabel="Open the circumference calculator">
          OPEN CALCULATOR
        </CtaButton>
      </div>
    </>
  );
}
