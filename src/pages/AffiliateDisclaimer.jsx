import React from 'react';
import { Link } from 'react-router-dom';

export default function AffiliateDisclaimer() {
  const sections = [
    {
      eyebrow: 'Plain English Summary',
      title: 'The short version.',
      content: (
        <p>Some links on this website are affiliate links. If you click one and buy something, we earn a small commission — at no extra cost to you. We only recommend products we'd genuinely stand behind.</p>
      )
    },
    {
      eyebrow: 'Full Disclosure',
      title: 'What this means in full.',
      content: (
        <>
          <p className="mb-4">Healthy Eating Insights participates in affiliate marketing programmes. This means that when you click certain links on this site and make a purchase, we may receive a commission from the retailer or brand.</p>
          <p className="mb-4">This is how we keep the content on this site free.</p>
          <p>Affiliate links are used throughout our articles, the Favourites page, and our email newsletters. We do not mark every individual link with a label, but the presence of affiliate links on any given page is disclosed clearly at the bottom of that page.</p>
        </>
      )
    },
    {
      eyebrow: 'Our Programmes',
      title: 'The affiliate programmes we participate in.',
      content: (
        <>
          <p className="mb-4">We currently participate in the following affiliate and referral programmes:</p>
          <ul className="space-y-3 mb-4">
            <li><strong>Amazon Associates</strong> — As an Amazon Associate, we earn from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</li>
            <li><strong>iHerb</strong> — We participate in the iHerb affiliate programme and may earn a commission on qualifying purchases.</li>
            <li><strong>Thrive Market</strong> — We participate in the Thrive Market referral programme and may earn a commission when new members sign up.</li>
            <li><strong>Impact and ShareASale networks</strong> — We work with various health and wellness brands through these affiliate networks.</li>
          </ul>
          <p>This list may not be exhaustive. New affiliate relationships are added periodically.</p>
        </>
      )
    },
    {
      eyebrow: 'Our Editorial Policy',
      title: 'How we choose what we recommend.',
      content: (
        <>
          <p className="mb-4">Our affiliate relationships do not influence our editorial opinions. We do not recommend products simply because they pay a higher commission. We recommend products because we believe they are genuinely useful for our audience.</p>
          <p className="mb-4">If we have not personally used a product, we research it thoroughly using verified reviews, expert sources, and community feedback before recommending it.</p>
          <p>We do not accept payment for placement in editorial content. Sponsored content, if any, will be clearly labelled as such.</p>
        </>
      )
    },
    {
      eyebrow: 'Pricing',
      title: 'Does it cost you more?',
      content: (
        <p>No. Affiliate links never increase the price you pay. In many cases, affiliate programmes are funded from the retailer's marketing budget — the price you see is the same whether you click an affiliate link or go directly to the site.</p>
      )
    },
    {
      eyebrow: 'Questions',
      title: 'Still have questions?',
      content: (
        <p>If you have any questions about our affiliate relationships or editorial policies, please contact us at <a href="mailto:pete@healthyeatinginsights.com" className="text-sage hover:text-sage-dark">pete@healthyeatinginsights.com</a>.</p>
      )
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-pad bg-off-white">
        <div className="container-custom max-w-[780px] mx-auto">
          <span className="eyebrow">Legal</span>
          <h1 className="text-[40px] md:text-[48px] leading-[1.15] text-near-black font-serif mt-4 mb-6">
            Affiliate Disclaimer
          </h1>
          <p className="font-sans text-[13px] text-text-gray font-light leading-relaxed">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Disclaimer Sections */}
      <section className="section-pad bg-off-white">
        <div className="container-custom max-w-[780px] mx-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="relative">
              <div className="mb-8">
                <span className="eyebrow text-[14px]">{section.eyebrow}</span>
                <h2 className="text-[28px] md:text-[32px] text-near-black font-serif mt-3 mb-6">
                  {section.title}
                </h2>
                <div className="font-sans text-[16px] text-text-gray leading-[1.7] space-y-4">
                  {section.content}
                </div>
              </div>
              
              {/* Section divider */}
              {idx < sections.length - 1 && (
                <div className="border-b-0.5 border-border-gray my-8" />
              )}

              {/* Back to top link (desktop only) */}
              <div className="hidden md:block absolute right-0 bottom-0">
                <a 
                  href="#top" 
                  className="font-sans text-[13px] text-sage hover:text-sage-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Back to top ↑
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}