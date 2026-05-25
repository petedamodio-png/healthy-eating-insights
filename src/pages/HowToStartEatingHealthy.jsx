import { Link } from 'react-router-dom';
import articleHeroImage from '../assets/images/howtostarthealthyeatinghero.png';

export default function HowToStartEatingHealthy() {
  const furtherReading = [
    {
      title: "How to meal prep a full week in two hours",
      description: "A simple Sunday system for anyone with a busy week ahead.",
      link: "/blog/meal-prep-system"
    },
    {
      title: "What to keep in a healthy kitchen — the short list",
      description: "The only staples worth buying regularly, and why.",
      link: "/blog/healthy-kitchen-essentials"
    },
    {
      title: "Why you're always hungry after eating healthy (and how to fix it)",
      description: "The most common reason clean eating doesn't feel sustainable.",
      link: "/blog/always-hungry"
    }
  ];

  const sidebarLinks = [
    "How to meal prep a full week",
    "The healthy kitchen short list",
    "Why healthy eating doesn't feel satisfying"
  ];

  return (
    <div className="w-full">
      <main className="min-h-screen bg-theme-bg">
        {/* Article Header */}
        <section className="section-pad bg-theme-bg">
          <div className="container-custom max-w-[780px] mx-auto">
            <span className="eyebrow">NUTRITION BASICS</span>
            <h1 className="text-[46px] leading-[1.2] text-theme-primary font-serif mt-4 mb-4">
              How to Actually Start Eating Healthy — A Realistic Guide
            </h1>
            <p className="font-sans text-[15px] text-theme-secondary leading-[1.7] mb-2">
              No meal plans. No rules. No giving up everything you enjoy. Just a clear starting point that works.
            </p>
            <p className="font-sans text-[13px] text-theme-secondary font-light">
              8 min read
            </p>
            
            {/* Hero Image */}
            <div className="mt-8 h-[400px] rounded-card overflow-hidden">
              <img 
                src={articleHeroImage} 
                alt="Simple healthy breakfast flat lay with natural window light on linen surface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Body - Two Column Layout */}
        <section className="section-pad bg-theme-bg">
          <div className="container-custom max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[680px_260px] gap-12 lg:gap-8">
              
              {/* Left Column - Article Content */}
              <div className="space-y-8">
                {/* Intro */}
                <div className="font-sans text-[18px] text-theme-secondary leading-[1.7] space-y-4">
                  <p>
                    The internet will tell you that starting to eat healthy requires a meal plan, a supplement stack, a specific diet name, and a complete kitchen overhaul by Monday.
                  </p>
                  <p>
                    None of that is true.
                  </p>
                  <p>
                    Most people who eat well consistently don't follow a named diet or count anything. They've built a small number of flexible habits that make better choices easier — and they stopped expecting to be perfect.
                  </p>
                  <p>
                    This guide covers how to actually get there.
                  </p>
                </div>

                {/* H2: First — what healthy eating actually means */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    First — what healthy eating actually means
                  </h2>
                  <div className="font-sans text-[16px] text-theme-secondary leading-[1.7] space-y-4">
                    <p>
                      There is no single definition, and anyone who tells you otherwise is selling something.
                    </p>
                    <p>
                      What the evidence consistently supports is simpler than most content online would suggest: eat mostly whole foods, get enough protein, eat enough vegetables, drink enough water, and don't eat so little that you're miserable or so much that you feel unwell.
                    </p>
                    <p>
                      That's the framework. Everything else — meal timing, specific superfoods, cutting particular food groups — is detail that matters far less than consistently doing the basics.
                    </p>
                    <p>
                      If you're looking for a practical working definition: healthy eating is a way of eating that gives your body what it needs to function well, that you can sustain without significant effort or sacrifice, and that doesn't make you think about food more than necessary.
                    </p>
                  </div>
                </div>

                {/* H2: Why most people struggle to start */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    Why most people struggle to start
                  </h2>
                  <div className="font-sans text-[16px] text-theme-secondary leading-[1.7] space-y-4">
                    <p>
                      The most common reason isn't lack of motivation or knowledge — it's that the bar feels too high before you've even begun.
                    </p>
                    <p>
                      You look at what "eating healthy" supposedly looks like — the meal prep photos, the ingredient lists, the routines — and conclude that either you do all of it or there's no point starting.
                    </p>
                    <p>
                      This is the all-or-nothing trap, and it's the single biggest reason people cycle through healthy eating attempts without anything sticking.
                    </p>
                    <p>
                      The fix isn't more motivation. It's a lower starting point.
                    </p>
                  </div>
                </div>

                {/* Pull Quote */}
                <div className="bg-theme-alt border-l-[3px] border-theme-sage rounded-r-card pl-5 py-4">
                  <p className="font-serif italic text-[22px] text-theme-primary leading-[1.4]">
                    "The goal isn't to eat perfectly. It's to make eating well the easier choice more often than not."
                  </p>
                </div>

                {/* H2: The only place worth starting */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    The only place worth starting
                  </h2>
                  <div className="font-sans text-[16px] text-theme-secondary leading-[1.7] space-y-4">
                    <p>
                      Pick one meal and make it better. Not all of them. One.
                    </p>
                    <p>
                      Most people find breakfast the easiest to change because it happens before the day creates friction. A breakfast with enough protein and fibre — eggs, Greek yogurt with fruit, oats with nut butter — sets a different trajectory for the rest of the day without requiring any willpower by the time you're tired at 7pm.
                    </p>
                    <p>
                      Do this consistently for two weeks before changing anything else. The point isn't the breakfast specifically — it's proving to yourself that you can make a change and sustain it. That matters more than the nutritional value of any single meal.
                    </p>
                  </div>
                </div>

                {/* H2: The five habits that actually make a difference */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    The five habits that actually make a difference
                  </h2>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    These aren't rules — they're observations about what consistently shows up in people who eat well without making it a second job.
                  </p>
                </div>

                {/* H3: 1. Eat protein at every meal */}
                <div className="space-y-3">
                  <h3 className="font-sans font-medium text-[20px] text-theme-primary">
                    1. Eat protein at every meal
                  </h3>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    Protein keeps you full longer, reduces the afternoon energy drop, and makes it significantly easier to avoid snacking out of hunger. It doesn't need to be complicated — eggs, Greek yogurt, tinned fish, chicken, legumes, tofu. Just make sure one of these is present at every meal.
                  </p>
                </div>

                {/* H3: 2. Build meals around vegetables, not alongside them */}
                <div className="space-y-3">
                  <h3 className="font-sans font-medium text-[20px] text-theme-primary">
                    2. Build meals around vegetables, not alongside them
                  </h3>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    The difference between a plate where vegetables are the side and one where they're the foundation is significant over time — both nutritionally and in terms of how full you feel. This doesn't mean every meal is a salad. It means filling half your plate before adding anything else.
                  </p>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    Roasting a large batch of vegetables on Sunday and keeping them in the fridge removes the decision from weekday evenings entirely.
                  </p>
                </div>

                {/* H3: 3. Keep the kitchen stocked with the right defaults */}
                <div className="space-y-3">
                  <h3 className="font-sans font-medium text-[20px] text-theme-primary">
                    3. Keep the kitchen stocked with the right defaults
                  </h3>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    What you eat is largely determined by what's available. If the easiest thing to grab is a piece of fruit or a hard-boiled egg, that's what you eat. If it's a biscuit, that's what you eat. This isn't a willpower issue — it's an environment issue.
                  </p>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    A short list of things worth keeping stocked: whole grains (oats, brown rice, quinoa), tinned legumes, eggs, Greek yogurt, nut butter, frozen vegetables, fresh fruit, olive oil. That's a complete foundation.
                  </p>
                </div>

                {/* H3: 4. Eat slowly enough to notice when you're full */}
                <div className="space-y-3">
                  <h3 className="font-sans font-medium text-[20px] text-theme-primary">
                    4. Eat slowly enough to notice when you're full
                  </h3>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    This sounds almost insultingly simple, but the research is consistent — eating speed is one of the strongest predictors of how much you eat at a meal. The fullness signal takes about 20 minutes to register. Eating in front of a screen, eating quickly, or eating while distracted reliably leads to eating more than you intended.
                  </p>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    Sitting down, eating without a screen, and pausing partway through a meal are habits that make a real difference without requiring any dietary change at all.
                  </p>
                </div>

                {/* H3: 5. Stop eating when you're satisfied, not full */}
                <div className="space-y-3">
                  <h3 className="font-sans font-medium text-[20px] text-theme-primary">
                    5. Stop eating when you're satisfied, not full
                  </h3>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    There's a meaningful difference between satisfied and full. Satisfied means the hunger has gone. Full means you notice the food in your stomach.
                  </p>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    Most overeating happens in the gap between those two points — eating past satisfaction because the food is enjoyable, because the plate isn't empty, or because the next pause in a meal requires making a decision.
                  </p>
                  <p className="font-sans text-[16px] text-theme-secondary leading-[1.7]">
                    Practising the pause — putting the fork down and waiting two minutes before deciding whether to continue — is worth far more than any specific dietary rule.
                  </p>
                </div>

                {/* H2: What to do about meals you can't control */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    What to do about meals you can't control
                  </h2>
                  <div className="font-sans text-[16px] text-theme-secondary leading-[1.7] space-y-4">
                    <p>
                      Work lunches, restaurants, social occasions, travel — a realistic approach to healthy eating has to account for the fact that you don't control every meal you eat.
                    </p>
                    <p>
                      The most useful framing here is the 80/20 principle — if 80% of your meals are nutritionally solid, the remaining 20% make almost no difference to how you look or feel long term. The stress of trying to eat perfectly at every meal is itself a health cost.
                    </p>
                    <p>
                      At restaurants: order something with protein and vegetables and don't overthink it. At social occasions: eat normally and enjoy it. The people who eat well consistently are almost never the ones making a thing of it in public.
                    </p>
                  </div>
                </div>

                {/* H2: The question most people don't ask */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    The question most people don't ask
                  </h2>
                  <div className="font-sans text-[16px] text-theme-secondary leading-[1.7] space-y-4">
                    <p>
                      Most people approach healthy eating by asking what they should change. A more useful question is what's making it hard right now.
                    </p>
                    <p>
                      If it's time — meal prep on Sunday changes the weekday equation entirely.
                    </p>
                    <p>
                      If it's knowledge — a simple, rotating set of five to seven reliable meals removes the daily decision.
                    </p>
                    <p>
                      If it's consistency — lowering the bar until it becomes automatic, then raising it, is more effective than starting at a level you can't maintain.
                    </p>
                    <p>
                      If it's all three — start with one meal, one change, for two weeks. Then add another. Compounding works in eating habits exactly as it does everywhere else.
                    </p>
                  </div>
                </div>

                {/* H2: Where to go from here */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    Where to go from here
                  </h2>
                  <div className="font-sans text-[16px] text-theme-secondary leading-[1.7] space-y-4">
                    <p>
                      The free Clean Eating Starter Guide covers this framework in more detail, with a 5-day meal plan and shopping list built around exactly these principles. It's the most practical starting point for putting this into action this week.
                    </p>
                    <p>
                      Beyond that — the rest of the guides on this site go deeper on the specific parts: how to set up a weekly meal prep system, how to stock a healthy kitchen without overspending, how to read nutrition labels without a degree in biochemistry.
                    </p>
                    <p>
                      Start with one thing. Build from there.
                    </p>
                  </div>
                </div>

                {/* Email Opt-in Box */}
                <div className="bg-theme-sage-light rounded-card p-5">
                  <span className="eyebrow text-[10px]">FREE DOWNLOAD</span>
                  <h3 className="font-sans font-bold text-[18px] text-theme-primary mt-2 mb-2">
                    Get the Clean Eating Starter Guide — free
                  </h3>
                  <p className="font-sans text-[14px] text-theme-secondary mb-4">
                    A 5-day meal plan and shopping list built around exactly what this article covers. Download it free and use it this week.
                  </p>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 font-sans text-[14px] border-0.5 border-theme-border rounded-card px-4 py-2"
                    />
                    <button className="btn-pill btn-sage text-white font-sans text-[14px] font-medium whitespace-nowrap">
                      Get the free guide →
                    </button>
                  </form>
                </div>

                {/* Further Reading */}
                <div className="space-y-4">
                  <h2 className="font-sans font-bold text-[26px] text-theme-primary">
                    Further reading
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {furtherReading.map((article, idx) => (
                      <Link
                        key={idx}
                        to={article.link}
                        className="bg-theme-surface border-0.5 border-theme-border rounded-card p-4 hover:border-theme-sage transition-colors"
                      >
                        <h4 className="font-sans font-medium text-[14px] text-theme-primary mb-2">
                          {article.title}
                        </h4>
                        <p className="font-sans text-[13px] text-theme-secondary leading-relaxed">
                          {article.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky Sidebar (Desktop Only) */}
              <div className="hidden lg:block sticky top-24 self-start space-y-4 max-h-screen overflow-y-auto">
                {/* Email Opt-in Box */}
                <div className="bg-theme-sage-light rounded-card p-5">
                  <h3 className="font-sans font-bold text-[16px] text-theme-primary mb-2">
                    Get the free starter guide
                  </h3>
                  <p className="font-sans text-[13px] text-theme-secondary mb-4">
                    A 5-day meal plan and shopping list — free to download, ready to use this week.
                  </p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full font-sans text-[14px] border-0.5 border-theme-border rounded-card px-4 py-2"
                    />
                    <button className="w-full btn-pill btn-sage text-white font-sans text-[14px] font-medium">
                      Get it free →
                    </button>
                  </form>
                </div>

                {/* You Might Also Like */}
                <div className="bg-theme-surface border-0.5 border-theme-border rounded-card p-5">
                  <h3 className="font-sans font-medium text-[14px] text-theme-primary mb-4">
                    You might also like
                  </h3>
                  <div className="space-y-3">
                    {sidebarLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="font-sans text-[14px] text-theme-sage hover:text-theme-sage-dark block"
                      >
                        → {link}
                      </a>
                    ))}
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