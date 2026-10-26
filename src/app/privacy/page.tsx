import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME} at ${SITE_DOMAIN}.`,
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Privacy Policy</h1>
        <div className="space-y-5 leading-relaxed text-ink/75">
          <p>Last updated: October 26, 2026</p>
          <p>
            {SITE_NAME} (“we”, “us”) operates {SITE_DOMAIN}. This policy explains what information we
            collect when you use our free circumference calculator and related pages.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Information we collect</h2>
          <p>
            Numbers you type into the calculator are processed in your browser for the calculation
            and are not stored on our servers as a user account. If you contact us, we receive the
            email address and message you submit. Standard server and analytics logs may include IP
            address, browser type, and pages visited.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">How we use information</h2>
          <p>
            We use contact messages to respond to support requests and feedback. Aggregated analytics
            help us improve performance and content. We do not sell personal information.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Cookies & analytics</h2>
          <p>
            We may use first-party cookies or privacy-conscious analytics to understand traffic. You
            can control cookies through your browser settings.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Third parties</h2>
          <p>
            Hosting and analytics providers may process technical data on our behalf under their own
            terms. We do not share calculator inputs with advertisers for sales purposes.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
          <p>
            Privacy questions:{" "}
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
