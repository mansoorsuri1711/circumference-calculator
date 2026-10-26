import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND_HERO, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "How to Find the Circumference of a Circle";
const description =
  "Learn how to find circumference with C = 2πr and C = πd, worked examples, and a free calculator check.";
const slug = "how-to-find-circumference-of-a-circle";
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
    images: [{ url: BRAND_HERO, width: 1200, height: 630, alt: title }],
  },
};

export default function HowToFindCircumferencePage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
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
          Circumference guide · Oct 26, 2026
        </p>
        <h1 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_HERO}
            alt="Illustration for how to find the circumference of a circle"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Searching “how to find the circumference of a circle” usually means you already have a
            radius or diameter and need the distance around the edge. Circumference is that outer
            length — the circle’s perimeter — and two short formulas cover every standard problem.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">The two formulas you need</h2>
          <p>
            If you know the radius <strong className="text-ink">r</strong>, use{" "}
            <strong className="text-ink">C = 2πr</strong>. If you know the diameter{" "}
            <strong className="text-ink">d</strong>, use{" "}
            <strong className="text-ink">C = πd</strong>. Because diameter is twice the radius, both
            formulas describe the same circle. π (pi) is the constant ratio of circumference to
            diameter, about 3.14159.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Step-by-step method</h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Identify whether your given length is radius or diameter.</li>
            <li>Choose C = 2πr or C = πd.</li>
            <li>Keep units consistent (all cm, all inches, and so on).</li>
            <li>Multiply using π ≈ 3.14 for rough work, or use a full-precision calculator.</li>
            <li>Label the answer with the same length unit you started with.</li>
          </ol>
          <h2 className="font-display text-2xl font-bold text-ink">Example 1 — radius known</h2>
          <p>
            A circle has radius 5 cm. Circumference = 2 × π × 5 ≈ 31.416 cm. You can confirm this in
            the free{" "}
            <Link href="/" className="font-semibold text-violet-deep underline">
              Circumference Calculator
            </Link>{" "}
            by selecting Radius and entering 5.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Example 2 — diameter known</h2>
          <p>
            A wheel is 26 inches across. Circumference = π × 26 ≈ 81.681 inches. That is roughly how
            far the wheel travels in one full rotation on flat ground.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Example 3 — working backwards</h2>
          <p>
            Sometimes you know circumference and need radius or diameter. Use{" "}
            <strong className="text-ink">d = C ÷ π</strong> and{" "}
            <strong className="text-ink">r = C ÷ (2π)</strong>. The{" "}
            <Link href="/diameter-calculator" className="font-semibold text-violet-deep underline">
              diameter calculator
            </Link>{" "}
            and{" "}
            <Link href="/radius-calculator" className="font-semibold text-violet-deep underline">
              radius calculator
            </Link>{" "}
            are set up for that reverse path.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Common mistakes</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Using diameter in the radius formula (or the reverse).</li>
            <li>Mixing units — for example radius in cm and answer labeled in meters.</li>
            <li>Confusing circumference (length around) with area (space inside).</li>
          </ul>
          <p>
            Need the relationship between the three lengths spelled out? Read{" "}
            <Link
              href="/blog/radius-vs-diameter-vs-circumference"
              className="font-semibold text-violet-deep underline"
            >
              radius vs diameter vs circumference
            </Link>
            . Curious why π shows up at all? See{" "}
            <Link
              href="/blog/what-is-pi-in-circumference"
              className="font-semibold text-violet-deep underline"
            >
              what pi means in circumference
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
