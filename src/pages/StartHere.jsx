import React from 'react';
import { Link } from 'react-router-dom';
import EmailCapture from '../components/EmailCapture';

export default function StartHere() {
  const quotes = [
    "I want to eat better but I don't know where to start.",
    "I start well every week but fall off by Wednesday.",
    "I'm overwhelmed by all the conflicting advice online.",
    "I want to feel better without going on a diet.",
  ];

  const steps = [
    {
      num: 1,
      title: "Grab the free starter guide",
      description: "A practical PDF with the fundamentals of clean eating, a 5-day meal plan, and a shopping list. No overwhelm — just a clear starting point.",
      linkText: "Download the free guide &rarr;",
      linkPath: "/optin"
    },
    {
      num: 2,
      title: "Read this first",
      description: "Start with our most popular guide: what clean eating actually means — it cuts through the noise and gives you a framework that sticks.",
      linkText: "Read the guide &rarr;",
      linkPath: "/blog"
    },
    {
      num: 3,
      title: "Set up your kitchen",
      description: "You don't need fancy equipment. These are the only tools worth having — most are under \u20ac30 and make a real difference to how consistently you eat well.",
      linkText: "See the kitchen essentials &rarr;",
      linkPath: "/favourites"
    },
    {
      num: 4,
      title: "Try the 30-day meal plan",
      description: "Once you have the basics, the 30-Day Clean Eating Meal Plan walks you through a full month — recipes, prep guides, and shopping lists. Just \u20ac17.",
      linkText: "See the meal plan &rarr;",
      linkPath: "/optin"
    }
  ];

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section className="section-pad bg-off-white">
        <div className="container-custom max-w-[800px] text-center space-y-6">
          <span className="eyebrow">New here?</span>
          <h1 className="text-[40px] md:text-[48px] leading-[1.15] text-near-black font-serif">
            Start here — we'll make it simple.
          </h1>
          <p className="font-sans text-[16px] text-text-gray max-w-[600px] mx-auto leading-[1.7]">
            Healthy eating doesn't have to be complicated. Here's exactly where to start based on where you are right now.
          </p>
        </div>
      </section>

      {/* Section 2: Sound Familiar? */}
      <section className="section-pad bg-light-gray border-t-0.5 border-b-0.5 border-border-gray">
        <div className="container-custom max-w-[900px] space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow">Who this is for</span>
            <h2 className="text-[32px] md:text-[36px] text-near-black font-serif">Sound familiar?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((quote, idx) => (
              <div
                key={idx}
                className="bg-white border-l-[3px] border-sage rounded-[14px] p-6 text-left border-t-0.5 border-r-0.5 border-b-0.5 border-border-gray/40"
              >
                <p className="font-sans text-[15px] italic text-near-black font-light leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="font-sans text-[14px] text-sage-dark font-medium">
              If you nodded at any of those — you're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Four Steps */}
      <section className="section-pad bg-off-white">
        <div className="container-custom max-w-[800px] space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow">Your first steps</span>
            <h2 className="text-[32px] md:text-[36px] text-near-black font-serif">Here's what to do first.</h2>
          </div>

          <div className="flex flex-col space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white border-0.5 border-border-gray rounded-card p-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 text-left"
              >
                {/* Left side: Step circle */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white font-sans font-medium text-[14px] leading-none">
                  {step.num}
                </div>
                {/* Right side: step info */}
                <div className="flex-col space-y-2">
                  <h3 className="font-serif text-[18px] text-near-black leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[13px] text-text-gray leading-[1.6]">
                    {step.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={step.linkPath}
                      className="font-sans text-[13px] text-sage hover:text-sage-dark transition-colors font-medium inline-flex items-center"
                      dangerouslySetInnerHTML={{ __html: step.linkText }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Email capture banner */}
      <EmailCapture />
    </div>
  );
}
