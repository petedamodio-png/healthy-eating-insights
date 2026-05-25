import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import StartHere from './pages/StartHere';
import Favourites from './pages/Favourites';
import Blog from './pages/Blog';
import OptIn from './pages/OptIn';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AffiliateDisclaimer from './pages/AffiliateDisclaimer';
import Contact from './pages/Contact';
import HowToStartEatingHealthy from './pages/HowToStartEatingHealthy';
import AlwaysHungry from './pages/AlwaysHungry';

const GA_MEASUREMENT_ID = 'G-0CX2X96MGX';
let lastTrackedPagePath = '';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnalyticsTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const pagePath = `${pathname}${search}`;

    if (pagePath === lastTrackedPagePath || typeof window.gtag !== 'function') {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      lastTrackedPagePath = pagePath;
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pagePath,
        page_title: document.title,
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <div className="flex flex-col min-h-screen bg-theme-bg select-none">
        
        {/* Sticky Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-here" element={<StartHere />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/how-to-start-eating-healthy" element={<HowToStartEatingHealthy />} />
            <Route path="/blog/always-hungry-eating-healthy" element={<AlwaysHungry />} />
            <Route path="/optin" element={<OptIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/affiliate-disclaimer" element={<AffiliateDisclaimer />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route redirection */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Dark Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
