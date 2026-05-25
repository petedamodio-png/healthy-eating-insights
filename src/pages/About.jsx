import EmailCapture from '../components/EmailCapture';

export default function About() {
  const missions = [
    {
      title: "No miracle claims",
      desc: "We don't promise transformations or quick fixes. Sustainable change takes time, and we respect you enough to say so."
    },
    {
      title: "Real recommendations",
      desc: "Every product we mention is something we'd genuinely stand behind. We only recommend what's actually useful."
    },
    {
      title: "Progress, not perfection",
      desc: "Small, consistent changes are more powerful than any 30-day reset. You don't need to be perfect to see results."
    }
  ];

  const values = [
    {
      title: "Food isn't the enemy",
      desc: "We don't believe in good foods and bad foods. We believe in eating more of what nourishes you."
    },
    {
      title: "Simplicity is a feature",
      desc: "The simpler the habit, the more likely it sticks. We keep everything as straightforward as possible."
    },
    {
      title: "Honest information only",
      desc: "We cite real science, avoid miracle language, and correct ourselves when we're wrong."
    },
    {
      title: "You already know more than you think",
      desc: "Most people don't need more information — they need clarity, confidence, and a practical starting point."
    }
  ];

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section className="section-pad bg-theme-bg">
        <div className="container-custom max-w-[850px] text-center space-y-6">
          <span className="eyebrow">About</span>
          <h1 className="text-[40px] md:text-[48px] leading-[1.15] text-theme-primary font-serif">
            Healthy eating should feel simple — not like another thing to fail at.
          </h1>
          <p className="font-sans text-[16px] text-theme-secondary max-w-[680px] mx-auto leading-[1.7]">
            Healthy Eating Insights exists to cut through the noise and give women clear, honest, practical guidance on eating well — without the guilt, restriction, or confusion that most health content creates.
          </p>
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="section-pad bg-theme-alt border-t-0.5 border-b-0.5 border-theme-border">
        <div className="container-custom max-w-[1100px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow">Our mission</span>
            <h2 className="text-[32px] md:text-[36px] text-theme-primary font-serif">Why we do this.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, idx) => (
              <div
                key={idx}
                className="bg-theme-surface border-0.5 border-theme-border rounded-card p-6 border-t-[3px] border-t-theme-sage text-left flex flex-col space-y-3"
              >
                <h3 className="font-serif text-[18px] text-theme-primary">
                  {mission.title}
                </h3>
                <p className="font-sans text-[13px] text-theme-secondary leading-[1.6]">
                  {mission.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Values */}
      <section className="section-pad bg-theme-bg">
        <div className="container-custom max-w-[900px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow">What we believe</span>
            <h2 className="text-[32px] md:text-[36px] text-theme-primary font-serif">Our values.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {values.map((val, idx) => (
              <div key={idx} className="flex items-start space-x-4 text-left">
                {/* 8px sage green dot */}
                <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage mt-2" />
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-[14px] text-theme-primary leading-none">
                    {val.title}
                  </h3>
                  <p className="font-sans text-[13px] text-theme-secondary leading-[1.6]">
                    {val.desc}
                  </p>
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
