import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-near-black py-16 px-5 border-t border-border-gray text-text-gray">
      <div className="container-custom max-w-[1100px] mx-auto flex flex-col md:flex-row md:justify-between items-start space-y-8 md:space-y-0">
        
        {/* Left Side: Logo & Tagline */}
        <div className="flex flex-col space-y-2">
          <span className="font-serif text-[15px] text-white tracking-wide">
            Healthy Eating Insights
          </span>
          <span className="font-sans text-[13px] leading-relaxed text-[#6B6B6B]">
            Real food. Real knowledge. Real results.
          </span>
        </div>

        {/* Right Side: Links & Disclaimer */}
        <div className="flex flex-col space-y-6 max-w-[500px]">
          {/* Links Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="font-sans text-[12px] text-[#6B6B6B] hover:text-[#FAFAF8] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/affiliate-disclaimer" className="font-sans text-[12px] text-[#6B6B6B] hover:text-[#FAFAF8] transition-colors">
              Affiliate Disclaimer
            </Link>
            <Link to="/contact" className="font-sans text-[12px] text-[#6B6B6B] hover:text-[#FAFAF8] transition-colors">
              Contact
            </Link>
          </div>

          {/* Detailed Affiliate Disclaimer */}
          <p className="font-sans text-[11px] leading-relaxed text-[#6B6B6B]">
            Some links on this site are affiliate links. I may earn a small commission if you purchase through them — at no extra cost to you. I only recommend products I've personally used or thoroughly researched.
          </p>

          <p className="font-sans text-[10px] text-[#6B6B6B] mt-2">
            &copy; {new Date().getFullYear()} Healthy Eating Insights. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
