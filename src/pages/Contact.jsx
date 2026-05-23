import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General question',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:pete@healthyeatinginsights.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const quickLinks = [
    {
      title: 'Affiliate questions',
      desc: 'Read our full affiliate disclaimer for details on how our recommendations work.',
      link: '/affiliate-disclaimer'
    },
    {
      title: 'Privacy questions',
      desc: 'Our privacy policy explains exactly what data we collect and how we use it.',
      link: '/privacy-policy'
    },
    {
      title: 'New here?',
      desc: 'Start with our beginners guide to find the most helpful content for where you are.',
      link: '/start-here'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-pad bg-off-white">
        <div className="container-custom max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="eyebrow">Get in touch</span>
                <h1 className="text-[40px] md:text-[48px] leading-[1.15] text-near-black font-serif mt-4 mb-6">
                  Contact Us
                </h1>
                <p className="font-sans text-[16px] text-text-gray leading-[1.7]">
                  Have a question, a product suggestion, a collaboration enquiry, or just want to say hello? We read every message and aim to reply within 2–3 business days.
                </p>
              </div>

              {/* Contact Info Blocks */}
              <div className="space-y-6">
                {/* Email Block */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-5 h-5">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V8L10 12L3 8V4Z" fill="#8FBF8A"/>
                      <path d="M3 8V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V8L10 12L3 8Z" fill="#8FBF8A"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-[14px] text-near-black leading-none mb-1">Email</p>
                    <a href="mailto:pete@healthyeatinginsights.com" className="font-sans text-[14px] text-text-gray hover:text-sage">
                      pete@healthyeatinginsights.com
                    </a>
                  </div>
                </div>

                {/* Location Block */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-5 h-5">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2C6.68629 2 4 4.68629 4 8C4 12.4 10 18 10 18C10 18 16 12.4 16 8C16 4.68629 13.3137 2 10 2Z" fill="#8FBF8A"/>
                      <circle cx="10" cy="8" r="2" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-[14px] text-near-black leading-none mb-1">Based in</p>
                    <p className="font-sans text-[14px] text-text-gray">Italy · Serving readers worldwide</p>
                  </div>
                </div>

                {/* Response Time Block */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-5 h-5">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" stroke="#8FBF8A" strokeWidth="1.5" fill="none"/>
                      <path d="M10 6V10L13 13" stroke="#8FBF8A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-[14px] text-near-black leading-none mb-1">Response time</p>
                    <p className="font-sans text-[14px] text-text-gray">Within 2–3 business days</p>
                  </div>
                </div>
              </div>

              {/* Press/Partnership Note */}
              <div className="bg-sage-light rounded-card p-4">
                <p className="font-sans text-[13px] text-text-gray leading-relaxed">
                  For press, partnership, or brand collaboration enquiries, please include details about your brand and what you have in mind. We work with brands whose values align with ours — honest, health-focused, and genuinely useful for women.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white border-0.5 border-border-gray rounded-card p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="sr-only">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full font-sans text-[14px] text-near-black placeholder-text-gray border-0.5 border-border-gray rounded-card p-3 focus:border-sage"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="sr-only">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full font-sans text-[14px] text-near-black placeholder-text-gray border-0.5 border-border-gray rounded-card p-3 focus:border-sage"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full font-sans text-[14px] text-near-black border-0.5 border-border-gray rounded-card p-3 focus:border-sage bg-white"
                  >
                    <option value="General question">General question</option>
                    <option value="Product recommendation">Product recommendation</option>
                    <option value="Brand collaboration">Brand collaboration</option>
                    <option value="Press enquiry">Press enquiry</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="sr-only">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full font-sans text-[14px] text-near-black placeholder-text-gray border-0.5 border-border-gray rounded-card p-3 focus:border-sage resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-pill btn-sage text-white font-sans text-[14px] font-medium"
                >
                  Send message →
                </button>

                {/* Disclaimer Text */}
                <p className="font-sans text-[12px] text-text-gray font-light text-center">
                  We aim to reply within 2–3 business days. For urgent matters, email <a href="mailto:pete@healthyeatinginsights.com" className="text-sage hover:text-sage-dark">pete@healthyeatinginsights.com</a> directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-pad bg-light-gray">
        <div className="container-custom max-w-[1100px] mx-auto">
          <div className="text-center space-y-3 mb-8">
            <span className="eyebrow">Before you write</span>
            <h2 className="text-[32px] md:text-[36px] text-near-black font-serif">You might find your answer here.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.link}
                className="bg-white border-0.5 border-border-gray rounded-card p-4 hover:border-sage transition-colors"
              >
                <h3 className="font-sans font-medium text-[14px] text-near-black mb-2">
                  {link.title}
                </h3>
                <p className="font-sans text-[13px] text-text-gray leading-relaxed">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}