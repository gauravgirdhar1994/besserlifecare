import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

// Custom hook for Google Analytics tracking
export const useAnalytics = () => {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return {
    trackPageView,
    trackEvent: require('../utils/analytics').trackEvent,
    trackPurchase: require('../utils/analytics').trackPurchase,
    trackAddToCart: require('../utils/analytics').trackAddToCart,
    trackProductView: require('../utils/analytics').trackProductView,
    trackFormSubmission: require('../utils/analytics').trackFormSubmission,
    trackButtonClick: require('../utils/analytics').trackButtonClick,
    trackNewsletterSignup: require('../utils/analytics').trackNewsletterSignup,
    trackContactForm: require('../utils/analytics').trackContactForm,
    trackProductPageView: require('../utils/analytics').trackProductPageView,
    trackCartAbandonment: require('../utils/analytics').trackCartAbandonment,
    trackBeginCheckout: require('../utils/analytics').trackBeginCheckout,
    trackSearch: require('../utils/analytics').trackSearch,
    trackSocialClick: require('../utils/analytics').trackSocialClick,
    trackExternalLink: require('../utils/analytics').trackExternalLink,
  };
};