import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for ${SITE_NAME} — educational math calculator, not academic certification.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer", href: "/disclaimer" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Disclaimer</h1>
        <div className="space-y-5 leading-relaxed text-ink/75">
          <p>Last updated: October 26, 2026</p>
          <p>
            {SITE_NAME} on {SITE_DOMAIN} provides educational math calculators and articles about
            circle geometry. We are not a school, testing board, or professional engineering firm.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">No guarantees</h2>
          <p>
            Calculator results use standard π-based formulas. Rounding differences, unit mistakes, or
            measurement error in the real world can change answers. Always apply the precision rules
            required by your teacher, exam, or project specification.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Educational use</h2>
          <p>
            Nothing on this site replaces instruction from a qualified teacher or licensed
            professional. You are responsible for verifying critical measurements used in
            construction, manufacturing, or graded work.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Accuracy</h2>
          <p>
            We strive for accurate formulas and clear guides, but content may contain errors or become
            outdated. Use the site at your own risk. For questions, contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-deep underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
