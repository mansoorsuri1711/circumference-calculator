import { SITE_ORIGIN } from "@/lib/siteConfig";

function imageLoc(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-10-26";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "Circumference Calculator logo",
        caption: "Brand mark for Circumference Calculator on circumferencecalculator.org",
      },
      {
        loc: imageLoc("/circumference-calculator.webp"),
        title: "Circumference Calculator tool",
        caption: "Free circumference, radius, and diameter calculator homepage",
      },
    ],
  },
  {
    path: "/features",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/circumference-calculator-tool.webp"),
        title: "Circumference Calculator features",
        caption: "Any-value input, units, formulas, and live diagram features",
      },
    ],
  },
  {
    path: "/how-it-works",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/circumference-calculator-app.webp"),
        title: "How Circumference Calculator works",
        caption: "Steps to convert radius, diameter, and circumference",
      },
    ],
  },
  {
    path: "/diameter-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/circumference-calculator-app.webp"),
        title: "Diameter Calculator",
        caption: "Convert circumference or radius to diameter",
      },
    ],
  },
  {
    path: "/radius-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/circumference-calculator-tool.webp"),
        title: "Radius Calculator",
        caption: "Convert circumference or diameter to radius",
      },
    ],
  },
  {
    path: "/circle-area-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/circumference-calculator-website.webp"),
        title: "Circle Area Calculator",
        caption: "Find circle area from circumference, radius, or diameter",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "About Circumference Calculator",
        caption: "Brand logo used on the About page",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/how-to-find-circumference-of-a-circle",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/circumference-calculator.webp"),
        title: "How to find circumference of a circle",
        caption: "Step-by-step guide using C = 2πr and C = πd",
      },
    ],
  },
  {
    path: "/blog/radius-vs-diameter-vs-circumference",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/circumference-calculator-app.webp"),
        title: "Radius vs diameter vs circumference",
        caption: "Comparison of the three core circle length measurements",
      },
    ],
  },
  {
    path: "/blog/what-is-pi-in-circumference",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/circumference-calculator-tool.webp"),
        title: "What is pi in circumference",
        caption: "Why π appears in circumference formulas",
      },
    ],
  },
  {
    path: "/contact-us",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}
