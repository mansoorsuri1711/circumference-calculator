import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-gradient-to-br from-brand-deep via-[#0B2A45] to-[#07182A] pt-8 pb-2 px-4 text-white md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 font-display text-xl font-bold text-white">{SITE_NAME}</h2>
            <p className="mb-4 text-sm text-white/75">{SITE_TAGLINE}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-sky underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Tools</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/85 hover:text-white hover:underline">Circumference Calculator</Link></li>
              <li><Link href="/diameter-calculator" className="text-white/85 hover:text-white hover:underline">Diameter Calculator</Link></li>
              <li><Link href="/radius-calculator" className="text-white/85 hover:text-white hover:underline">Radius Calculator</Link></li>
              <li><Link href="/circle-area-calculator" className="text-white/85 hover:text-white hover:underline">Circle Area Calculator</Link></li>
              <li><Link href="/features" className="text-white/85 hover:text-white hover:underline">Features</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-white/85 hover:text-white hover:underline">How It Works</Link></li>
              <li><Link href="/blog/how-to-find-circumference-of-a-circle" className="text-white/85 hover:text-white hover:underline">How to Find Circumference</Link></li>
              <li><Link href="/blog/radius-vs-diameter-vs-circumference" className="text-white/85 hover:text-white hover:underline">Radius vs Diameter vs Circumference</Link></li>
              <li><Link href="/blog/what-is-pi-in-circumference" className="text-white/85 hover:text-white hover:underline">What Is Pi?</Link></li>
              <li><Link href="/about-us" className="text-white/85 hover:text-white hover:underline">About Us</Link></li>
              <li><Link href="/contact-us" className="text-white/85 hover:text-white hover:underline">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-white/85 hover:text-white hover:underline">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-white/85 hover:text-white hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Calculate free</h2>
            <p className="mb-4 text-sm text-white/80">
              Convert radius, diameter, and circumference instantly with clear formulas.
            </p>
            <CtaButton
              href="/#calculator"
              size="sm"
              ariaLabel="Open the free circumference calculator"
              icon="arrow"
            >
              OPEN CALCULATOR
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 pb-3 text-center text-sm text-white/70">
          <p className="mb-0">
            © 2026 {SITE_NAME}. All rights reserved. |{' '}
            <Link href="/" className="underline hover:no-underline text-white/90">{SITE_DOMAIN}</Link>
          </p>
          <p className="mt-2 text-xs text-white/45">
            Educational math tool only. Results use π ≈ 3.14159… for precise circle geometry.
          </p>
        </div>
      </div>
    </footer>
  );
}
