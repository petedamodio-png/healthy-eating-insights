
export default function Favourites() {
  const sections = [
    {
      id: "meal-prep",
      title: "Meal Prep Essentials",
      bgColor: "bg-theme-bg", // #FAFAF8
      items: [
        {
          name: "Glass meal prep containers (set of 10)",
          desc: "I use these every Sunday. Leak-proof, microwave-safe, and they actually last. Plastic containers warp and stain — these don't.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        },
        {
          name: "Digital kitchen scale",
          desc: "Under \u20ac20 and more useful than any diet app. Portion awareness without obsessing — weighing ingredients takes 3 seconds.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        },
        {
          name: "Large half-sheet baking pan",
          desc: "One pan, one oven session, four days of roasted vegetables done. Get the larger size — small ones are useless for batch cooking.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        },
        {
          name: "Thrive Market membership",
          desc: "Where I order pantry staples and healthy snacks. Significantly cheaper than supermarkets for organic products.",
          linkText: "Get a free trial &rarr;",
          linkUrl: "https://thrivemarket.com"
        }
      ]
    },
    {
      id: "supplements",
      title: "Supplements Worth Taking",
      bgColor: "bg-theme-alt", // #F2F2EF
      items: [
        {
          name: "Greens powder (Bloom Nutrition)",
          desc: "The one I've stuck with. Mixes well, doesn't taste like grass, and covers the days I don't eat enough vegetables.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        },
        {
          name: "Collagen peptides unflavoured",
          desc: "Goes into coffee, smoothies, or oats without changing the taste. Noticeable difference in skin after 60 days.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        },
        {
          name: "Probiotics women's formula",
          desc: "Gut health affects energy, bloating, and skin. I've used this consistently for over a year.",
          linkText: "See on iHerb &rarr;",
          linkUrl: "https://iherb.com"
        },
        {
          name: "Magnesium glycinate",
          desc: "Helps with sleep and stress. Most women are deficient. One of the few supplements that actually does what it says.",
          linkText: "See on iHerb &rarr;",
          linkUrl: "https://iherb.com"
        }
      ]
    },
    {
      id: "kitchen-tools",
      title: "Kitchen Tools Worth Buying",
      bgColor: "bg-theme-bg", // #FAFAF8
      items: [
        {
          name: "Compact air fryer 4L",
          desc: "The single appliance that changed how often I cook at home. Vegetables in 15 minutes, no oil needed. Get the 4L if you're cooking for one or two.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        },
        {
          name: "High-speed blender Nutribullet Pro",
          desc: "For smoothies that are actually smooth. The sweet spot between price and performance.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        }
      ]
    },
    {
      id: "pantry-staples",
      title: "Healthy Pantry Staples",
      bgColor: "bg-theme-alt", // #F2F2EF
      items: [
        {
          name: "Thrive Market (full pantry shop)",
          desc: "For organic tinned goods, nut butters, healthy snacks, and pantry basics at better prices than any supermarket.",
          linkText: "Shop on Thrive Market &rarr;",
          linkUrl: "https://thrivemarket.com"
        },
        {
          name: "My favourite recipe books",
          desc: "The two cookbooks I come back to more than any others for simple, genuinely healthy everyday cooking.",
          linkText: "See on Amazon &rarr;",
          linkUrl: "https://amazon.com"
        }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section className="section-pad bg-theme-bg">
        <div className="container-custom max-w-[800px] text-center space-y-6">
          <span className="eyebrow">My recommendations</span>
          <h1 className="text-[40px] md:text-[48px] leading-[1.15] text-theme-primary font-serif">
            Things I actually use and recommend.
          </h1>
          <p className="font-sans text-[16px] text-theme-secondary max-w-[600px] mx-auto leading-[1.7]">
            No fluff, no sponsored lists. Products and tools that genuinely make healthy eating easier — with honest notes on why each one is worth it.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {sections.map((sec) => (
        <section key={sec.id} className={`section-pad border-t-0.5 border-theme-border ${sec.bgColor}`}>
          <div className="container-custom max-w-[1100px] mx-auto">
            {/* Category label */}
            <div className="border-b-0.5 border-theme-border pb-2 mb-8 text-left">
              <span className="eyebrow inline-block">
                {sec.title}
              </span>
            </div>

            {/* 2-column product card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sec.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-theme-surface border-0.5 border-theme-border rounded-card p-5 text-left flex flex-col justify-between"
                >
                  <div className="space-y-2 mb-4">
                    <h3 className="font-sans font-medium text-[14px] text-theme-primary">
                      {item.name}
                    </h3>
                    <p className="font-sans text-[13px] text-theme-secondary leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-medium text-[13px] text-theme-sage hover:text-theme-sage-dark transition-colors inline-flex items-center"
                      dangerouslySetInnerHTML={{ __html: item.linkText }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Affiliate disclaimer section */}
      <section className="py-12 bg-theme-alt border-t-0.5 border-theme-border">
        <div className="container-custom max-w-[680px] mx-auto text-center">
          <p className="font-sans text-[12px] font-light text-theme-secondary leading-relaxed">
            Some links on this page are affiliate links. I may earn a small commission if you purchase through them — at no extra cost to you. I only recommend products I've personally used or thoroughly researched.
          </p>
        </div>
      </section>
    </div>
  );
}
