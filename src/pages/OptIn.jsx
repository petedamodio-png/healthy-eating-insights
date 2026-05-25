import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function OptIn() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [firstName, setFirstName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const checklistItems = [
    "A clear, jargon-free explanation of what clean eating actually means",
    "A simple 5-day meal plan with breakfast, lunch, and dinner",
    "A ready-to-use shopping list you can take straight to the supermarket",
    "The 10 foods worth keeping in your kitchen at all times",
    "Simple swaps to make your current meals healthier without starting over"
  ];

  return (
    <div className="w-full bg-theme-bg min-h-[calc(100vh-16rem)] flex items-center justify-center section-pad">
      <div className="w-full max-w-[480px] px-5 flex flex-col space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="eyebrow block text-center">Free download</span>
          <h1 className="text-[40px] text-center text-theme-primary font-serif leading-tight">
            The Clean Eating Starter Guide
          </h1>
          <p className="font-sans text-[15px] text-theme-secondary text-center leading-relaxed">
            Everything you need to start eating well — without the overwhelm, restriction, or conflicting advice.
          </p>
        </div>

        {/* Success Alert */}
        {submitted ? (
          <div className="bg-theme-sage-light border-0.5 border-theme-sage rounded-card p-6 text-center space-y-3">
            <svg className="w-12 h-12 text-theme-sage-dark mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-serif text-[20px] text-theme-primary">Guide is on its way!</h3>
            <p className="font-sans text-[13px] text-theme-secondary">
              Thank you, {firstName || "there"}! We've sent a link to download the PDF to <strong>{email}</strong>. Check your inbox in a couple of minutes.
            </p>
          </div>
        ) : (
          /* Main Card */
          <div className="bg-theme-surface border-0.5 border-theme-border rounded-card p-6 flex flex-col space-y-6">
            
            {/* Guide Cover Placeholder */}
            <div className="h-[100px] bg-theme-sage-light border border-theme-border/30 rounded-card flex flex-col items-center justify-center select-none">
              <span className="font-serif text-[15px] text-theme-primary italic mb-0.5">The Starter Guide</span>
              <span className="font-sans text-[9px] text-theme-sage font-medium uppercase tracking-[0.08em]">Guide Cover</span>
            </div>

            {/* Checklist Title */}
            <div className="space-y-4">
              <h3 className="font-sans font-medium text-[13px] text-theme-primary">
                Inside the free guide you'll get:
              </h3>
              
              {/* Checklist Items */}
              <ul className="space-y-3">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-left">
                    <svg className="w-5 h-5 text-theme-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-sans text-[13px] text-theme-primary leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 pt-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                className="w-full bg-theme-bg text-theme-primary px-4 py-3 rounded-[24px] text-[14px] font-sans border-0.5 border-theme-border focus:border-theme-sage placeholder-theme-secondary/50"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full bg-theme-bg text-theme-primary px-4 py-3 rounded-[24px] text-[14px] font-sans border-0.5 border-theme-border focus:border-theme-sage placeholder-theme-secondary/50"
              />
              <button
                type="submit"
                className="btn-pill btn-sage text-white text-[14px] font-sans w-full py-3 cursor-pointer mt-1"
              >
                Send me the free guide &rarr;
              </button>
            </form>

            {/* Disclaimer */}
            <p className="font-sans text-[11px] text-theme-secondary text-center font-light">
              No spam, ever. Unsubscribe any time.
            </p>
          </div>
        )}

        {/* Testimonial Card */}
        <div className="bg-theme-sage-light rounded-card p-6 text-left border-0.5 border-theme-border/30">
          <p className="font-sans text-[13px] italic text-theme-primary leading-relaxed mb-3">
            &ldquo;I've tried so many guides but this is the first one that didn't make me feel like I was already failing. Simple, clear, and actually doable.&rdquo;
          </p>
          <span className="font-sans font-medium text-[12px] text-theme-sage-dark block">
            — Sarah, 29
          </span>
        </div>

      </div>
    </div>
  );
}
