import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import proteinBowlImage from '../assets/images/protein-bowl.png';

export default function AlwaysHungry() {
  useEffect(() => {
    document.title = "Why You're Always Hungry After Eating Healthy (And How to Fix It) | Healthy Eating Insights";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Eating healthy but still hungry two hours later? It's not a willpower problem — it's a meal composition problem. Here's exactly what's going wrong and how to fix it.");
  }, []);
  const furtherReading = [
    {
      title: "How to actually start eating healthy — a realistic guide",
      description: "The clearest starting point for anyone who wants to eat better without the overwhelm.",
      link: "/blog/how-to-start-eating-healthy"
    },
    {
      title: "What to keep in a healthy kitchen — the short list",
      description: "The only staples worth buying regularly, and why each one earns its place.",
      link: "/blog/healthy-kitchen-essentials"
    },
    {
      title: "How to meal prep a full week in two hours",
      description: "A simple Sunday system that removes weekday food decisions entirely.",
      link: "/blog/meal-prep-system"
    }
  ];

  const sidebarLinks = [
    { name: "How to start eating healthy", link: "/blog/how-to-start-eating-healthy" },
    { name: "Building meals that actually satisfy", link: "#" },
    { name: "The healthy kitchen short list", link: "/blog/healthy-kitchen-essentials" }
  ];

  return (
    <div className="w-full">
      <main className="min-h-screen bg-theme-bg">
        {/* Article Header */}
        <section className="section-pad bg-theme-bg">
          <div className="container-custom max-w-[780px] mx-auto">
            <span className="eyebrow">NUTRITION BASICS</span>
            <h1 className="font-serif text-[36px] md:text-[48px] leading-[1.15] text-theme-primary mt-4 mb-4">
              Why You're Always Hungry After Eating Healthy — And How to Fix It
            </h1>
            <p className="font-sans text-sm text-theme-secondary mb-2">
              It's not a willpower problem. It's a meal composition problem.
            </p>
            <p className="font-sans text-xs text-theme-secondary font-light">
              7 min read
            </p>
            
            <img
              src={proteinBowlImage}
              alt="Protein grain bowl with chicken, egg, avocado, vegetables, and quinoa on a linen-covered table"
              className="mt-8 h-96 w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Article Body - Two Column Layout */}
        <section className="section-pad bg-theme-bg">
          <div className="container-custom max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Article Content */}
              <div className="lg:col-span-2">
                {/* Intro */}
                <div className="font-sans text-lg text-theme-secondary leading-[1.7] mb-6">
                  <p className="mb-4">
                    You switched to salads. You cut out the junk. You're eating vegetables and lean protein and trying to do everything right — and you're ravenously hungry two hours later.
                  </p>
                  <p className="mb-4">
                    This is one of the most common reasons people give up on eating healthily. Not lack of motivation. Not a busy schedule. Just relentless, persistent hunger that makes the whole thing feel unsustainable.
                  </p>
                  <p>
                    The good news is that this isn't a willpower problem. It's a meal composition problem. Once you understand what's actually driving the hunger, it becomes straightforward to fix.
                  </p>
                </div>

                {/* H2: What's actually happening when you feel hungry */}
                <div className="mb-5">
                  <h2 className="font-sans font-bold text-2xl text-theme-primary mt-12 mb-4">
                    What's actually happening when you feel hungry
                  </h2>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Hunger is controlled by a hormonal conversation between your gut and your brain. The hunger hormone ghrelin rises when your stomach is empty and signals your brain to seek food. After eating, your gut releases satiety hormones — GLP-1, PYY, and CCK — which travel to the brain and signal that the meal is done.
                    </p>
                    <p className="mb-4">
                      The critical thing to understand: this conversation takes about 20 minutes. But the type of food you eat significantly affects how loud and how long those satiety signals last.
                    </p>
                    <p>
                      A meal high in protein and fibre triggers a strong, sustained satiety response. A meal that's mostly refined carbohydrates — even "healthy" ones — triggers a brief, weak one. That's why you can feel full immediately after eating a bowl of vegetable soup and hungry again an hour later.
                    </p>
                  </div>
                </div>

                {/* Pull Quote */}
                <div className="font-serif italic text-xl text-theme-primary border-l-4 border-theme-sage pl-5 py-2 bg-theme-alt rounded-r-xl my-8">
                  "Hunger after a healthy meal isn't a willpower problem. It's a meal composition problem — and it's almost always fixable."
                </div>

                {/* H2: Why most healthy meals aren't actually filling */}
                <div className="mb-5">
                  <h2 className="font-sans font-bold text-2xl text-theme-primary mt-12 mb-4">
                    Why most healthy meals aren't actually filling
                  </h2>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      The most common mistake isn't eating badly. It's swapping calorie-dense food for low-calorie-density food without understanding what made the original meal satisfying.
                    </p>
                    <p className="mb-4">
                      When someone replaces pasta with a salad, they often cut out most of the protein, remove most of the fat, and replace it with a large volume of low-calorie food. The stomach fills momentarily. But the satiety hormones barely register — because the macronutrients that drive them are largely absent.
                    </p>
                    <p>
                      Decades of low-fat dietary advice made this worse. Fat-free yogurt, low-fat dressings, fat-free crackers — these became shorthand for healthy eating. But fat is one of the most effective drivers of satiety. It slows how quickly food leaves your stomach, meaning fullness lasts longer. Removing it makes meals significantly less filling, even if they look nutritionally solid on paper.
                    </p>
                  </div>
                </div>

                {/* Inline Email Opt-in Box */}
                <div className="bg-theme-sage-light rounded-xl p-6 my-8">
                  <p className="font-sans text-xs uppercase tracking-widest text-theme-sage font-medium mb-2">
                    FREE DOWNLOAD
                  </p>
                  <h3 className="font-sans text-lg font-bold text-theme-primary mb-2">
                    Get meals that actually keep you full
                  </h3>
                  <p className="font-sans text-sm text-theme-secondary mb-4">
                    The free Clean Eating Starter Guide includes a 5-day meal plan built around exactly these principles — every meal designed to satisfy, not just nourish.
                  </p>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full border border-theme-border rounded-full px-4 py-2 text-sm mb-3 font-sans"
                  />
                  <a 
                    href="[SYSTEME_OPTIN_URL]"
                    className="block w-full bg-sage text-white rounded-full py-3 text-sm font-medium text-center font-sans"
                  >
                    Get the free guide →
                  </a>
                </div>

                {/* H2: The five real reasons you're still hungry */}
                <div className="mb-5">
                  <h2 className="font-sans font-bold text-2xl text-theme-primary mt-12 mb-4">
                    The five real reasons you're still hungry
                  </h2>
                </div>

                {/* H3: 1. Not enough protein at each meal */}
                <div className="mb-5">
                  <h3 className="font-sans font-medium text-xl text-theme-primary mt-8 mb-3">
                    1. Not enough protein at each meal
                  </h3>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Protein is the most satiating macronutrient. It has the strongest effect on reducing ghrelin and triggering satiety hormones after eating. Higher protein meals consistently produce significantly reduced appetite for hours afterwards.
                    </p>
                    <p className="mb-4">
                      The practical problem: many healthy meal templates are vegetable-heavy and protein-light. A lunch of mixed greens, cucumber, cherry tomatoes, and a small handful of chickpeas looks healthy — but contains very little protein. Add grilled chicken, a boiled egg, or a substantial portion of legumes and the satiety response changes dramatically.
                    </p>
                    <p>
                      A useful starting point: aim for 25–35g of protein per meal. In practice that's roughly 150g of chicken or fish, 3–4 eggs, 200g of Greek yogurt, or a generous portion of cooked legumes — not a garnish of them.
                    </p>
                  </div>
                </div>

                {/* H3: 2. Fat has been cut too aggressively */}
                <div className="mb-5">
                  <h3 className="font-sans font-medium text-xl text-theme-primary mt-8 mb-3">
                    2. Fat has been cut too aggressively
                  </h3>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Fat slows how quickly your stomach empties, which directly extends how long you feel full. It also triggers the release of satiety hormones in the small intestine. When meals are low in fat, food moves through the digestive system faster and hunger returns sooner.
                    </p>
                    <p className="mb-4">
                      This is why a fat-free salad dressing makes a salad feel unsatisfying even when the salad itself is large. Adding avocado, a drizzle of olive oil, a handful of nuts or seeds, or tahini to a meal isn't a nutritional compromise — it's what makes the meal actually work.
                    </p>
                    <p>
                      The fear of fat is one of the most persistent and most counterproductive pieces of dietary advice from the last 40 years. Healthy unsaturated fats from whole food sources are not the reason people struggle with their weight. Meals without them are.
                    </p>
                  </div>
                </div>

                {/* H3: 3. Calorie density dropped too sharply */}
                <div className="mb-5">
                  <h3 className="font-sans font-medium text-xl text-theme-primary mt-8 mb-3">
                    3. Calorie density dropped too sharply
                  </h3>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Vegetables are excellent food. They're also very low in calories by volume. Replacing a 600-calorie lunch with a 200-calorie salad doesn't just reduce calories — it leaves a genuine energy deficit that your body recognises and responds to with hunger.
                    </p>
                    <p>
                      This is especially common in the first few weeks of eating healthier. Food choices improve significantly, but total calories drop so sharply that persistent hunger is the inevitable result. The solution isn't to eat less healthy food — it's to eat more of it, and to make sure it contains enough protein and fat to satisfy.
                    </p>
                  </div>
                </div>

                {/* H3: 4. Blood sugar is spiking and crashing */}
                <div className="mb-5">
                  <h3 className="font-sans font-medium text-xl text-theme-primary mt-8 mb-3">
                    4. Blood sugar is spiking and crashing
                  </h3>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Some foods marketed as healthy cause the same blood sugar spike-and-crash cycle as the junk food they replaced. Rice cakes, dried fruit, fruit juice, flavoured low-fat yogurt, and most breakfast cereals cause rapid rises in blood sugar followed by a crash — which the body interprets as hunger, even when it has adequate energy stored.
                    </p>
                    <p className="mb-4">
                      Eating the same foods alongside protein, fat, or fibre slows sugar absorption and flattens the blood sugar curve significantly. A banana causes a blood sugar spike. The same banana eaten with almond butter causes a much smaller, more gradual rise — and keeps you full considerably longer.
                    </p>
                    <p>
                      The pattern to notice: if you feel hungry within 90 minutes of eating, blood sugar is almost certainly involved. The fix is always the same — add protein or fat to whatever you're eating.
                    </p>
                  </div>
                </div>

                {/* H3: 5. Meals are eaten too quickly */}
                <div className="mb-5">
                  <h3 className="font-sans font-medium text-xl text-theme-primary mt-8 mb-3">
                    5. Meals are eaten too quickly
                  </h3>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Satiety hormones take approximately 20 minutes to signal fullness to the brain. Eating a meal in under 10 minutes — which most people do when eating at a desk or standing in a kitchen — means the fullness signal arrives after the plate is already cleared.
                    </p>
                    <p>
                      Slowing down isn't about eating less. It's about giving the hormonal system enough time to catch up with what you've already eaten. Putting the fork down between bites, eating without a screen in front of you, and pausing halfway through to assess actual hunger are habits that reduce appetite at subsequent meals without any change to what's being eaten.
                    </p>
                  </div>
                </div>

                {/* H2: How to build meals that actually fill you up */}
                <div className="mb-5">
                  <h2 className="font-sans font-bold text-2xl text-theme-primary mt-12 mb-4">
                    How to build meals that actually fill you up
                  </h2>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Every meal needs three things to produce a lasting satiety response: a meaningful protein source, a source of healthy fat, and enough fibre-rich carbohydrate to provide sustained energy without a blood sugar spike.
                    </p>
                    <p className="mb-4">
                      In practice, this looks like:
                    </p>
                    <p className="mb-4">
                      <strong>Breakfast:</strong> Greek yogurt with berries and a tablespoon of almond butter — or two to three eggs with avocado on wholegrain toast. Not granola with skimmed milk and a glass of orange juice, which is almost entirely fast-digesting carbohydrate.
                    </p>
                    <p className="mb-4">
                      <strong>Lunch:</strong> A grain bowl with a substantial protein source (chicken, eggs, legumes, tofu), plenty of vegetables, and a dressing made with olive oil or tahini. Not a salad with fat-free dressing and a token handful of seeds.
                    </p>
                    <p className="mb-4">
                      <strong>Dinner:</strong> Protein as the centrepiece, vegetables making up half the plate, a portion of slow-digesting carbohydrate (sweet potato, brown rice, lentils), and fat from the cooking method or a sauce.
                    </p>
                    <p>
                      The quickest test for any meal: does it contain at least 25g of protein? Does it contain a source of healthy fat? Yes to both almost guarantees 3–4 hours of genuine fullness.
                    </p>
                  </div>
                </div>

                {/* H2: Where to go from here */}
                <div className="mb-5">
                  <h2 className="font-sans font-bold text-2xl text-theme-primary mt-12 mb-4">
                    Where to go from here
                  </h2>
                  <div className="font-sans text-base text-theme-secondary leading-[1.7] mb-5">
                    <p className="mb-4">
                      Persistent hunger when eating healthily is almost always fixable without counting calories, starting over, or giving up the foods you've worked to include. It usually requires just two or three deliberate changes to how meals are composed.
                    </p>
                    <p>
                      The Clean Eating Starter Guide covers this in more detail — with a 5-day meal plan built around exactly these principles. Every meal is designed to keep you full and satisfied, not just nutritionally tidy.
                    </p>
                  </div>
                </div>

                {/* Bottom Email Opt-in Box */}
                <div className="bg-theme-sage-light rounded-xl p-6 my-8">
                  <p className="font-sans text-xs uppercase tracking-widest text-theme-sage font-medium mb-2">
                    FREE DOWNLOAD
                  </p>
                  <h3 className="font-sans text-lg font-bold text-theme-primary mb-2">
                    Get the Clean Eating Starter Guide — free
                  </h3>
                  <p className="font-sans text-sm text-theme-secondary mb-4">
                    A 5-day meal plan and shopping list designed around meals that actually fill you up. Download it free and use it this week.
                  </p>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full border border-theme-border rounded-full px-4 py-2 text-sm mb-3 font-sans"
                  />
                  <a 
                    href="[SYSTEME_OPTIN_URL]"
                    className="block w-full bg-sage text-white rounded-full py-3 text-sm font-medium text-center font-sans"
                  >
                    Get the free guide →
                  </a>
                </div>

                {/* Related Articles Section */}
                <div>
                  <h2 className="font-sans font-bold text-2xl text-theme-primary mt-12 mb-6">
                    Further reading
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {furtherReading.map((article, index) => (
                      <Link
                        key={index}
                        to={article.link}
                        className="bg-theme-surface border border-theme-border rounded-xl p-4 hover:border-theme-sage transition-colors"
                      >
                        <h3 className="font-sans text-sm font-medium text-theme-primary mb-1">
                          {article.title}
                        </h3>
                        <p className="font-sans text-xs text-theme-secondary mb-3">
                          {article.description}
                        </p>
                        <span className="font-sans text-sm text-theme-sage font-medium">
                          Read article →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="hidden md:block lg:col-span-1">
                <div className="sticky top-24 self-start space-y-4">
                  {/* Box 1 - Email Opt-in */}
                  <div className="bg-theme-sage-light rounded-xl p-5">
                    <h3 className="font-sans text-base font-bold text-theme-primary mb-2">
                      Get the free starter guide
                    </h3>
                    <p className="font-sans text-sm text-theme-secondary mb-4">
                      A 5-day meal plan built around meals that actually keep you full. Free to download.
                    </p>
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full border border-theme-border rounded-full px-4 py-2 text-sm mb-3 font-sans"
                    />
                    <a 
                      href="[SYSTEME_OPTIN_URL]"
                      className="block w-full bg-sage text-white rounded-full py-3 text-sm font-medium text-center font-sans"
                    >
                      Get the free guide →
                    </a>
                  </div>

                  {/* Box 2 - Related Links */}
                  <div className="bg-theme-surface border border-theme-border rounded-xl p-5 mt-4">
                    <h3 className="font-sans text-sm font-medium text-theme-primary mb-3">
                      You might also like
                    </h3>
                    <div className="font-sans text-sm text-theme-sage space-y-3">
                      {sidebarLinks.map((link, index) => (
                        <Link key={index} to={link.link} className="block hover:text-theme-sage-dark transition-colors">
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
