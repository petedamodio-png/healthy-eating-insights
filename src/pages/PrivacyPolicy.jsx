import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const sections = [
    {
      eyebrow: '01',
      title: 'Who We Are',
      content: (
        <>
          <p className="mb-4">The data controller for this website is Healthy Eating Insights, operated from Italy.</p>
          <p className="mb-4">Contact email: <a href="mailto:pete@healthyeatinginsights.com" className="text-sage hover:text-sage-dark">pete@healthyeatinginsights.com</a></p>
          <p>If you have any questions about how we handle your personal data, please contact us at the email address above.</p>
        </>
      )
    },
    {
      eyebrow: '02',
      title: 'What Data We Collect',
      content: (
        <>
          <p className="mb-4">We collect personal data in the following ways:</p>
          <ul className="space-y-3 mb-4">
            <li><strong>Email subscriptions.</strong> When you sign up to receive our free guide or newsletter, we collect your first name and email address. This is the primary personal data we hold.</li>
            <li><strong>Contact form submissions.</strong> When you use our contact form, we collect your name, email address, and the content of your message.</li>
            <li><strong>Analytics data.</strong> We use analytics tools to understand how visitors use our site. This may include your IP address (anonymised), browser type, pages visited, and time spent on the site. We do not use Google Analytics. We use privacy-friendly analytics that do not require consent under Italian Garante guidelines.</li>
            <li><strong>Cookies.</strong> We use only essential cookies required for the site to function. We do not use advertising cookies or third-party tracking cookies without your explicit consent. A cookie banner on your first visit gives you the option to accept or decline non-essential cookies.</li>
            <li><strong>Affiliate link clicks.</strong> When you click an affiliate link on our site, the destination platform (such as Amazon) may collect data about your visit. We do not control or receive this data directly — please refer to their respective privacy policies.</li>
          </ul>
        </>
      )
    },
    {
      eyebrow: '03',
      title: 'How We Use Your Data',
      content: (
        <>
          <p className="mb-4">We use your data only for the purposes it was collected for:</p>
          <ul className="space-y-2 mb-4">
            <li>To send you the free guide you requested and subsequent email newsletters, recipes, and product recommendations</li>
            <li>To respond to your contact form enquiries</li>
            <li>To understand how our content is performing so we can improve it</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </>
      )
    },
    {
      eyebrow: '04',
      title: 'Legal Basis for Processing',
      content: (
        <>
          <p className="mb-4">Under GDPR, we process your data on the following legal bases:</p>
          <p className="mb-2"><strong>Consent</strong> — for email marketing. You gave explicit consent when you signed up. You can withdraw this consent at any time by clicking the unsubscribe link in any email.</p>
          <p className="mb-2"><strong>Legitimate interests</strong> — for analytics, to understand and improve our content.</p>
          <p><strong>Legal obligation</strong> — where required by Italian or EU law.</p>
        </>
      )
    },
    {
      eyebrow: '05',
      title: 'Email Marketing',
      content: (
        <p>Our email list is managed via Systeme.io, which processes data on servers within the EU. By subscribing, you consent to receiving emails from us. Every email includes a clear, one-click unsubscribe link. We will never email you without your consent.</p>
      )
    },
    {
      eyebrow: '06',
      title: 'Affiliate Links and Third Parties',
      content: (
        <>
          <p className="mb-4">This website participates in affiliate programmes including Amazon Associates, iHerb, Thrive Market, and others. When you click an affiliate link, you are directed to a third-party website. We earn a small commission if you make a purchase — at no extra cost to you.</p>
          <p className="mb-4">These third parties have their own privacy policies. We recommend reading them before making a purchase:</p>
          <ul className="space-y-2 mb-4">
            <li>Amazon: <a href="https://amazon.com/privacy" className="text-sage hover:text-sage-dark" target="_blank" rel="noopener noreferrer">amazon.com/privacy</a></li>
            <li>iHerb: <a href="https://iherb.com/info/privacy-policy" className="text-sage hover:text-sage-dark" target="_blank" rel="noopener noreferrer">iherb.com/info/privacy-policy</a></li>
            <li>Thrive Market: <a href="https://thrivemarket.com/page/privacy-policy" className="text-sage hover:text-sage-dark" target="_blank" rel="noopener noreferrer">thrivemarket.com/page/privacy-policy</a></li>
          </ul>
          <p>We do not receive any personal data about you from these platforms as a result of affiliate clicks.</p>
        </>
      )
    },
    {
      eyebrow: '07',
      title: 'Your Rights Under GDPR',
      content: (
        <>
          <p className="mb-4">As an EU resident, you have the following rights regarding your personal data:</p>
          <ul className="space-y-2 mb-4">
            <li><strong>Right of access</strong> — you can request a copy of the data we hold about you</li>
            <li><strong>Right to rectification</strong> — you can ask us to correct inaccurate data</li>
            <li><strong>Right to erasure</strong> — you can ask us to delete your data ("right to be forgotten")</li>
            <li><strong>Right to restriction</strong> — you can ask us to limit how we process your data</li>
            <li><strong>Right to data portability</strong> — you can request your data in a machine-readable format</li>
            <li><strong>Right to object</strong> — you can object to certain types of processing</li>
            <li><strong>Right to withdraw consent</strong> — you can withdraw consent for email marketing at any time</li>
          </ul>
          <p className="mb-4">To exercise any of these rights, contact us at <a href="mailto:pete@healthyeatinginsights.com" className="text-sage hover:text-sage-dark">pete@healthyeatinginsights.com</a>. We will respond within 30 days.</p>
          <p>If you are not satisfied with our response, you have the right to lodge a complaint with the Italian Data Protection Authority: <a href="https://garanteprivacy.it" className="text-sage hover:text-sage-dark" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a></p>
        </>
      )
    },
    {
      eyebrow: '08',
      title: 'Data Retention',
      content: (
        <p>We retain your email address and name for as long as you remain subscribed. If you unsubscribe, we delete your data within 30 days. Contact form data is retained for 6 months and then deleted.</p>
      )
    },
    {
      eyebrow: '09',
      title: 'Data Security',
      content: (
        <p>We take reasonable technical and organisational measures to protect your personal data. Our website uses HTTPS encryption. Our email platform (Systeme.io) is GDPR-compliant and processes data within the EU.</p>
      )
    },
    {
      eyebrow: '10',
      title: 'Changes to This Policy',
      content: (
        <p>We may update this policy from time to time. The date at the top of this page shows when it was last updated. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
      )
    },
    {
      eyebrow: '11',
      title: 'Contact',
      content: (
        <>
          <p className="mb-4">For any privacy-related questions or to exercise your rights:</p>
          <p className="mb-2">Email: <a href="mailto:pete@healthyeatinginsights.com" className="text-sage hover:text-sage-dark">pete@healthyeatinginsights.com</a></p>
          <p>Website: healthyeatinginsights.com</p>
        </>
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
            Privacy Policy
          </h1>
          <p className="font-sans text-[13px] text-text-gray font-light leading-relaxed">
            Last updated: May 2026
          </p>
          <div className="mt-8 space-y-6">
            <p className="font-sans text-[16px] text-text-gray leading-[1.7]">
              This Privacy Policy explains how Healthy Eating Insights ("we", "us", "our") collects, uses, and protects your personal data when you visit healthyeatinginsights.com. We are based in Italy and this policy complies with the General Data Protection Regulation (GDPR), the Italian Personal Data Protection Code (Legislative Decree 196/2003 as amended), and the guidelines of the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali).
            </p>
            <p className="font-sans text-[16px] text-text-gray leading-[1.7]">
              Please read this policy carefully. By using this website, you acknowledge that you have read and understood it.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
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