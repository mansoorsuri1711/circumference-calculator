import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BRAND_FEATURE_2, BRAND_FEATURE_3, BRAND_HERO, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Circumference Blog — Guides People Actually Search",
  description:
    "SERP-backed circumference guides: how to find circumference, radius vs diameter, and what pi means in circle formulas.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Circumference Blog — Guides People Actually Search",
    description: "Practical circumference articles from Circumference Calculator.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const posts = [
  {
    href: "/blog/how-to-find-circumference-of-a-circle",
    title: "How to Find the Circumference of a Circle",
    excerpt:
      "Step-by-step with C = 2πr and C = πd, plus examples you can check in the calculator.",
    date: "October 2026",
    read: "8 min read",
    image: BRAND_HERO,
    alt: "How to find circumference of a circle illustrated guide",
  },
  {
    href: "/blog/radius-vs-diameter-vs-circumference",
    title: "Radius vs Diameter vs Circumference",
    excerpt:
      "Clear definitions, relationships, and when to use each measurement in circle problems.",
    date: "October 2026",
    read: "7 min read",
    image: BRAND_FEATURE_3,
    alt: "Radius diameter and circumference comparison diagram",
  },
  {
    href: "/blog/what-is-pi-in-circumference",
    title: "What Is Pi in Circumference?",
    excerpt:
      "Why π appears in C = πd, how it relates to diameter, and how calculators use it.",
    date: "October 2026",
    read: "7 min read",
    image: BRAND_FEATURE_2,
    alt: "Pi symbol explained for circumference formulas",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Circumference calculator blog
        </h1>
        <p className="mb-10 text-lg text-ink/70">
          Only topics people search alongside a circumference calculator — how-to guides, length
          comparisons, and π explainers. No filler posts.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white/80 transition-colors hover:border-violet/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              <article>
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full"
                />
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/45">
                    {post.date} · {post.read}
                  </p>
                  <h2 className="font-display text-xl font-semibold text-ink group-hover:text-violet-deep">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
