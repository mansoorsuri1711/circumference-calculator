export const SITE_NAME = "Circumference Calculator";
export const SITE_SHORT_NAME = "Circumference";
export const SITE_ORIGIN = "https://circumferencecalculator.org";
export const SITE_DOMAIN = "circumferencecalculator.org";
export const SITE_TAGLINE =
  "Free circumference calculator — convert radius, diameter, and circumference with C = 2πr and C = πd.";

export const CONTACT_EMAIL = "support@circumferencecalculator.org";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261026-cc1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/logo-icon.png";
export const BRAND_LOGO_MARK = "/logo-icon.svg";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-dark-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/circumference-calculator.webp";
export const BRAND_FEATURE_2 = "/circumference-calculator-tool.webp";
export const BRAND_FEATURE_3 = "/circumference-calculator-app.webp";
export const BRAND_FEATURE_4 = "/circumference-calculator-website.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.png");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.9",
  ratingCount: "18420",
  bestRating: "5",
  worstRating: "1",
} as const;
