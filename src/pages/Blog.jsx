import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmailCapture from '../components/EmailCapture';
import articleHeroImage from '../assets/images/howtostarthealthyeatinghero.png';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Meal Prep",
    "Supplements",
    "Kitchen",
    "Nutrition Basics",
    "Gut Health"
  ];

  const articles = [
    {
      category: "Nutrition Basics",
      title: "Why You're Always Hungry After Eating Healthy — And How to Fix It",
      label: "Getting Started",
      readTime: "7 min read &rarr;",
      link: "/blog/always-hungry-eating-healthy",
      description: "It's not a willpower problem. Here's exactly what's going wrong and how to fix it."
    },
    {
      category: "Nutrition Basics",
      title: "How to Actually Start Eating Healthy — A Realistic Guide",
      label: "Getting Started",
      readTime: "8 min read &rarr;",
      link: "/blog/how-to-start-eating-healthy",
      description: "No diets, no rules, no overwhelm. A clear starting point that actually works."
    },
    {
      category: "Meal Prep",
      title: "The meal prep tools I actually use every week",
      label: "Kitchen Tools",
      readTime: "5 min read &rarr;"
    },
    {
      category: "Supplements",
      title: "The supplements worth buying (and the ones that aren't)",
      label: "Staples & Pills",
      readTime: "5 min read &rarr;"
    },
    {
      category: "Kitchen",
      title: "Everything in my healthy kitchen under \u20ac50",
      label: "Budget Friendly",
      readTime: "5 min read &rarr;"
    },
    {
      category: "Nutrition Basics",
      title: "What does eating healthy actually mean? A simple framework",
      label: "Basics Guide",
      readTime: "5 min read &rarr;"
    },
    {
      category: "Gut Health",
      title: "Why you're always bloated after eating (and how to fix it)",
      label: "Digestion Notes",
      readTime: "5 min read &rarr;"
    },
    {
      category: "Meal Prep",
      title: "Best meal prep containers that actually keep food fresh",
      label: "Fresh Storage",
      readTime: "5 min read &rarr;"
    }
  ];

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter(art => art.category === activeCategory);

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section className="section-pad bg-off-white">
        <div className="container-custom max-w-[800px] text-center space-y-6">
          <span className="eyebrow">The blog</span>
          <h1 className="text-[40px] md:text-[48px] leading-[1.15] text-near-black font-serif">
            Practical guides for eating well, every day.
          </h1>
          <p className="font-sans text-[16px] text-text-gray max-w-[600px] mx-auto leading-[1.7]">
            Honest, useful content for women who want to feel better through food — no fads, no fluff.
          </p>
        </div>
      </section>

      {/* Section 2: Filter + Articles */}
      <section className="section-pad bg-light-gray border-t-0.5 border-b-0.5 border-border-gray">
        <div className="container-custom space-y-12">
          
          {/* Category Filter Pills (Functional) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`btn-pill border-0.5 text-[13px] font-sans px-5 py-2 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-sage text-white border-transparent hover:bg-sage-dark"
                      : "bg-white text-text-gray border-border-gray hover:bg-off-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3-column Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[300px]">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art, idx) => (
                <Link
                  key={idx}
                  to={art.link || "#"}
                  className="bg-white border-0.5 border-border-gray rounded-card overflow-hidden flex flex-col justify-between hover:border-sage transition-colors"
                >
                  <div>
                    {/* Image block - real image for specific article, placeholder for others */}
                    {art.link === "/blog/how-to-start-eating-healthy" ? (
                      <img 
                        src={articleHeroImage} 
                        alt="Simple healthy breakfast flat lay with natural window light on linen surface"
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                    ) : art.link === "/blog/always-hungry-eating-healthy" ? (
                      <div className="h-48 bg-sage-light flex items-center justify-center rounded-t-xl">
                        <p className="font-sans text-sm text-sage-dark text-center px-8">
                          Hero image — satisfying grain bowl with visible protein, avocado, colourful vegetables
                        </p>
                      </div>
                    ) : (
                      <div className="h-[90px] bg-sage-light flex flex-col items-center justify-center border-b-0.5 border-border-gray select-none">
                        <span className="font-serif text-[13px] text-near-black italic">
                          {art.label}
                        </span>
                      </div>
                    )}
                    {/* Content Body */}
                    <div className="p-5 flex flex-col items-start space-y-2 text-left">
                      <span className="eyebrow text-[10px]">
                        {art.category}
                      </span>
                      <h2 className="font-sans font-bold text-[15px] text-near-black leading-snug font-serif-heading">
                        {art.title}
                      </h2>
                      {art.description && (
                        <p className="font-sans text-[13px] text-text-gray leading-relaxed">
                          {art.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Footer read time link */}
                  <div className="px-5 pb-5 pt-1 text-left">
                    <span
                      className="font-sans text-[13px] text-sage hover:text-sage-dark transition-colors font-medium inline-flex items-center"
                      dangerouslySetInnerHTML={{ __html: art.readTime }}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-text-gray font-sans">
                No articles found in this category.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Section 3: Email capture banner */}
      <EmailCapture />
    </div>
  );
}
