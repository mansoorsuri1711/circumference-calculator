import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND_FEATURE_2, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "What Is Pi in Circumference?";
const description =
  "Understand why pi (π) appears in circumference formulas C = πd and C = 2πr, and how calculators use it.";
const slug = "what-is-pi-in-circumference";
const published = "2026-10-26";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/${slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: BRAND_FEATURE_2, width: 1200, height: 630, alt: title }],
  },
};

export default function WhatIsPiPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: title },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-deep">
          Pi explained · Oct 26, 2026
        </p>
        <h1 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <div className="mb-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
          <Image
            src={BRAND_FEATURE_2}
            alt="Pi symbol used in circumference of a circle formulas"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Pi (π) is the reason every circumference formula looks the way it does. For any perfect
            circle, the distance around divided by the distance across is always the same number —
            roughly 3.14159. That constant is π.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">The defining relationship</h2>
          <p>
            By definition, <strong className="text-ink">π = C ÷ d</strong>. Rearrange that and you
            get the diameter form of the circumference formula:{" "}
            <strong className="text-ink">C = πd</strong>. Substitute d = 2r and you get{" "}
            <strong className="text-ink">C = 2πr</strong>. Nothing mystical — just one ratio written
            two ways.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Why calculators need π</h2>
          <p>
            Circles are curved. Straight-edge tools measure radius or diameter easily, but the curved
            perimeter needs π to connect those straight lengths to the path around the rim. The{" "}
            <Link href="/" className="font-semibold text-violet-deep underline">
              Circumference Calculator
            </Link>{" "}
            uses the browser’s full Math.PI value so results stay precise for school and DIY work.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Common classroom values</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">3.14</strong> — quick estimates
            </li>
            <li>
              <strong className="text-ink">22/7</strong> — fraction form used in some textbooks
            </li>
            <li>
              <strong className="text-ink">3.1416</strong> — common rounded decimal
            </li>
          </ul>
          <p>
            Follow whatever rounding rule your assignment specifies. When you need maximum precision,
            leave π symbolic until the final step or use the calculator’s full-precision output.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Pi and area</h2>
          <p>
            The same constant appears in area: A = πr². That is why entering circumference into our{" "}
            <Link href="/circle-area-calculator" className="font-semibold text-violet-deep underline">
              circle area calculator
            </Link>{" "}
            can recover area with A = C² ÷ (4π) — π still links the curved edge to the interior.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Try it</h2>
          <p>
            Pick any diameter, multiply by π, and you have circumference. Or start from circumference
            and divide by π to recover diameter. Pair this article with{" "}
            <Link
              href="/blog/radius-vs-diameter-vs-circumference"
              className="font-semibold text-violet-deep underline"
            >
              radius vs diameter vs circumference
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/how-to-find-circumference-of-a-circle"
              className="font-semibold text-violet-deep underline"
            >
              how to find circumference
            </Link>{" "}
            for a complete beginner path.
          </p>
        </div>
      </article>
    </>
  );
}
