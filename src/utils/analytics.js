// Google Analytics utility functions
// This file provides helper functions for tracking user interactions

// Initialize Google Analytics (gtag is loaded from the HTML)
export const GA_TRACKING_ID = 'G-MRRSFX9BWY';

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track e-commerce events
export const trackPurchase = (transactionId, value, currency = 'INR', items = []) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    });
  }
};

// Track add to cart events
export const trackAddToCart = (itemId, itemName, category, value, quantity = 1) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'INR',
      value: value,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        quantity: quantity,
        price: value,
      }],
    });
  }
};

// Track product views
export const trackProductView = (itemId, itemName, category, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'INR',
      value: value,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: value,
      }],
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName, formLocation) => {
  trackEvent('form_submit', 'engagement', `${formName}_${formLocation}`);
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('click', 'engagement', `${buttonName}_${location}`);
};

// Track newsletter signup
export const trackNewsletterSignup = () => {
  trackEvent('sign_up', 'engagement', 'newsletter');
};

// Track contact form submission
export const trackContactForm = () => {
  trackEvent('form_submit', 'engagement', 'contact_form');
};

// Track product page visits
export const trackProductPageView = (productName, productId) => {
  trackEvent('page_view', 'product', `${productName}_${productId}`);
};

// Track cart abandonment (when user leaves cart page)
export const trackCartAbandonment = (cartValue, itemCount) => {
  trackEvent('cart_abandon', 'ecommerce', 'cart_page', cartValue);
};

// Track checkout initiation
export const trackBeginCheckout = (value, items) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'INR',
      value: value,
      items: items,
    });
  }
};

// Track search events
export const trackSearch = (searchTerm) => {
  trackEvent('search', 'engagement', searchTerm);
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('click', 'social', platform);
};

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  trackEvent('click', 'external_link', `${linkText}_${url}`);
};