import React from 'react';
import { Link } from 'react-router-dom';
import EmailCapture from '../components/EmailCapture';
import heroImage from '../assets/images/hero-image.png';

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section className="section-pad bg-off-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left space-y-6 max-w-[540px]">
            <span className="eyebrow">Real food. Real knowledge. Real results.</span>
            <h1 className="text-[40px] md:text-[48px] leading-[1.15] text-near-black font-serif">
              Simple, realistic healthy eating — without the overwhelm.
            </h1>
            <p className="font-sans text-[16px] text-text-gray leading-[1.7]">
              Practical guides, honest product recommendations, and simple habits for women who want to eat well and actually stick with it.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/optin" className="btn-pill btn-sage text-white text-[14px]">
                Get My Free Starter Guide
              </Link>
              <Link to="/blog" className="btn-pill btn-outline">
                Browse Articles
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="w-full h-[400px] rounded-card overflow-hidden relative">
            <img 
              src={heroImage} 
              alt="Healthy meal prep flat lay" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Three Pillars */}
      <section className="section-pad bg-light-gray border-t-0.5 border-b-0.5 border-border-gray">
        <div className="container-custom text-center space-y-12">
          <div className="space-y-3">
            <span className="eyebrow">What you'll find here</span>
            <h2 className="text-[32px] md:text-[36px] text-near-black font-serif">
              Everything you need — nothing you don't.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-off-white border-0.5 border-border-gray rounded-card p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 019 9v0a9 9 0 01-9 9m0-18a9 9 0 00-9 9v0a9 9 0 009 9" />
                </svg>
              </div>
              <h3 className="font-serif text-[18px] text-near-black">Practical guides</h3>
              <p className="font-sans text-[13px] text-text-gray leading-[1.6]">
                Simple, actionable advice on eating well — no calorie obsessing, no complicated rules.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-off-white border-0.5 border-border-gray rounded-card p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.178-.363.687-.363.865 0l2.035 4.14 4.568.664c.402.059.564.558.273.842l-3.303 3.219.78 4.549c.069.4-.313.68-.67.491L12 15.224l-4.085 2.15c-.358.189-.74-.09-.67-.491l.78-4.549-3.303-3.22c-.29-.283-.129-.78.273-.841l4.568-.665 2.035-4.14z" />
                </svg>
              </div>
              <h3 className="font-serif text-[18px] text-near-black">Honest recommendations</h3>
              <p className="font-sans text-[13px] text-text-gray leading-[1.6]">
                Products, tools, and staples I actually use — with real reasons why they're worth it.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-off-white border-0.5 border-border-gray rounded-card p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <h3 className="font-serif text-[18px] text-near-black">Meal planning help</h3>
              <p className="font-sans text-[13px] text-text-gray leading-[1.6]">
                Weekly meal prep guides, shopping lists, and time-saving strategies for real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Latest Articles */}
      <section className="section-pad bg-off-white">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow">Latest from the blog</span>
            <h2 className="text-[32px] md:text-[36px] text-near-black font-serif">Start reading</h2>
            <p className="font-sans text-[14px] text-text-gray max-w-[500px] mx-auto leading-relaxed">
              Guides built for women who want real answers — not another 10-step diet plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border-0.5 border-border-gray rounded-card overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-[90px] bg-sage-light flex flex-col items-center justify-center border-b-0.5 border-border-gray">
                  <span className="font-serif text-[14px] text-near-black italic">Kitchen Tools</span>
                </div>
                <div className="p-5 flex flex-col items-start space-y-2 text-left">
                  <span className="eyebrow text-[10px]">Meal Prep</span>
                  <h4 className="font-sans font-bold text-[15px] text-near-black leading-snug">
                    The meal prep tools I actually use every single week
                  </h4>
                </div>
              </div>
              <div className="px-5 pb-5 pt-1 text-left">
                <Link to="/blog" className="font-sans text-[13px] text-sage hover:text-sage-dark transition-colors font-medium inline-flex items-center">
                  Read article &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-0.5 border-border-gray rounded-card overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-[90px] bg-sage-light flex flex-col items-center justify-center border-b-0.5 border-border-gray">
                  <span className="font-serif text-[14px] text-near-black italic">Staples & Pills</span>
                </div>
                <div className="p-5 flex flex-col items-start space-y-2 text-left">
                  <span className="eyebrow text-[10px]">Supplements</span>
                  <h4 className="font-sans font-bold text-[15px] text-near-black leading-snug">
                    The supplements worth buying (and the ones that aren't)
                  </h4>
                </div>
              </div>
              <div className="px-5 pb-5 pt-1 text-left">
                <Link to="/blog" className="font-sans text-[13px] text-sage hover:text-sage-dark transition-colors font-medium inline-flex items-center">
                  Read article &rarr;
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-0.5 border-border-gray rounded-card overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-[90px] bg-sage-light flex flex-col items-center justify-center border-b-0.5 border-border-gray">
                  <span className="font-serif text-[14px] text-near-black italic">Budget Friendly</span>
                </div>
                <div className="p-5 flex flex-col items-start space-y-2 text-left">
                  <span className="eyebrow text-[10px]">Kitchen</span>
                  <h4 className="font-sans font-bold text-[15px] text-near-black leading-snug">
                    Everything in my healthy kitchen under &euro;50
                  </h4>
                </div>
              </div>
              <div className="px-5 pb-5 pt-1 text-left">
                <Link to="/blog" className="font-sans text-[13px] text-sage hover:text-sage-dark transition-colors font-medium inline-flex items-center">
                  Read article &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Email Capture Banner */}
      <EmailCapture />

      {/* Section 5: Social Proof Row */}
      <section className="py-12 bg-off-white border-t border-border-gray">
        <div className="container-custom max-w-[800px] mx-auto grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="font-mono text-[28px] text-sage font-medium leading-none">600K+</span>
            <span className="font-sans text-[12px] text-text-gray">Monthly Pinterest views</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="font-mono text-[28px] text-sage font-medium leading-none">Simple</span>
            <span className="font-sans text-[12px] text-text-gray">No-diet approach</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="font-mono text-[28px] text-sage font-medium leading-none">100%</span>
            <span className="font-sans text-[12px] text-text-gray">Free to get started</span>
          </div>
        </div>
      </section>
    </div>
  );
}
