import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND_FEATURE_3, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "Radius vs Diameter vs Circumference";
const description =
  "Compare radius, diameter, and circumference: definitions, formulas, and when to use each circle measurement.";
const slug = "radius-vs-diameter-vs-circumference";
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
    images: [{ url: BRAND_FEATURE_3, width: 1200, height: 630, alt: title }],
  },
};

export default function RadiusVsDiameterPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_3}`}
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
          Circle basics · Oct 26, 2026
        </p>
        <h1 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <div className="mb-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
          <Image
            src={BRAND_FEATURE_3}
            alt="Diagram comparing radius, diameter, and circumference"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Radius, diameter, and circumference describe the same circle from three angles. Search
            results from Khan Academy, Mathnasium, and Mometrix all stress this trio because mix-ups
            between them cause most homework errors. Here is a clean comparison you can reuse.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Quick definitions</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="text-ink">Radius (r)</strong> — straight distance from the center to
              any point on the edge.
            </li>
            <li>
              <strong className="text-ink">Diameter (d)</strong> — straight distance across the circle
              through the center. Always <strong className="text-ink">d = 2r</strong>.
            </li>
            <li>
              <strong className="text-ink">Circumference (C)</strong> — distance around the edge.
              Always <strong className="text-ink">C = 2πr = πd</strong>.
            </li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-ink">How they relate</h2>
          <p>
            Think of diameter as two radii laid end to end. Circumference stretches farther still —
            a little more than three diameters long, because π ≈ 3.14159. That is why wrapping a tape
            around a circular object always gives a larger number than measuring straight across.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-ink/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-soft">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">If you know…</th>
                  <th className="px-4 py-3 font-semibold text-ink">Radius</th>
                  <th className="px-4 py-3 font-semibold text-ink">Diameter</th>
                  <th className="px-4 py-3 font-semibold text-ink">Circumference</th>
                </tr>
              </thead>
              <tbody className="bg-white/80">
                <tr className="border-t border-ink/5">
                  <td className="px-4 py-3">Radius r</td>
                  <td className="px-4 py-3">r</td>
                  <td className="px-4 py-3">2r</td>
                  <td className="px-4 py-3">2πr</td>
                </tr>
                <tr className="border-t border-ink/5">
                  <td className="px-4 py-3">Diameter d</td>
                  <td className="px-4 py-3">d ÷ 2</td>
                  <td className="px-4 py-3">d</td>
                  <td className="px-4 py-3">πd</td>
                </tr>
                <tr className="border-t border-ink/5">
                  <td className="px-4 py-3">Circumference C</td>
                  <td className="px-4 py-3">C ÷ 2π</td>
                  <td className="px-4 py-3">C ÷ π</td>
                  <td className="px-4 py-3">C</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="font-display text-2xl font-bold text-ink">When to use each</h2>
          <p>
            Use radius for area (A = πr²) and for formulas written from the center outward. Use
            diameter when you can only measure across an object with a caliper or ruler. Use
            circumference when you can wrap a string or tape around the outside — then convert back
            with the{" "}
            <Link href="/" className="font-semibold text-violet-deep underline">
              Circumference Calculator
            </Link>
            .
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Practice check</h2>
          <p>
            Suppose diameter is 14 m. Radius is 7 m. Circumference is π × 14 ≈ 43.982 m. Enter 14 as
            diameter in the calculator to verify all three outputs at once, or open the dedicated{" "}
            <Link href="/radius-calculator" className="font-semibold text-violet-deep underline">
              radius calculator
            </Link>
            .
          </p>
          <p>
            Next:{" "}
            <Link
              href="/blog/how-to-find-circumference-of-a-circle"
              className="font-semibold text-violet-deep underline"
            >
              how to find circumference step by step
            </Link>{" "}
            or{" "}
            <Link
              href="/blog/what-is-pi-in-circumference"
              className="font-semibold text-violet-deep underline"
            >
              why pi appears in these formulas
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
