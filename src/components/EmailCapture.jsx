import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirects to /optin, optionally carrying email in state/query
    navigate('/optin', { state: { email } });
  };

  return (
    <section className="bg-near-black py-16 px-5 border-t border-b border-border-gray">
      <div className="max-w-[680px] mx-auto text-center flex flex-col items-center space-y-6">
        
        {/* H3 Headline */}
        <h3 className="font-serif text-[24px] text-white leading-tight tracking-wide">
          Get the Clean Eating Starter Guide — free.
        </h3>
        
        {/* Body Text */}
        <p className="font-sans text-[14px] leading-relaxed text-[#DDDDDA] max-w-[580px]">
          A practical PDF guide covering the fundamentals of eating well, a simple 5-day meal plan, and a shopping list you'll actually use.
        </p>

        {/* Action Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[480px] flex flex-col sm:flex-row gap-3 pt-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full bg-white text-near-black px-5 py-3 rounded-[24px] text-[14px] font-sans border-0 focus:ring-1 focus:ring-sage placeholder-text-gray/50"
          />
          <button
            type="submit"
            className="btn-pill btn-sage text-white text-[14px] font-sans whitespace-nowrap px-6 py-3 cursor-pointer"
          >
            Get my free guide
          </button>
        </form>
        
      </div>
    </section>
  );
}
