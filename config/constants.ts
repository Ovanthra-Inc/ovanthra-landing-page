/**
 * Application Configuration Constants
 * Centralized place for all magic numbers, timeouts, and configuration values
 * Easier to maintain and update across the entire application
 */

// ===== Slider/Carousel Configuration =====
export const SLIDER_CONFIG = {
  AUTO_ROTATE_INTERVAL: 5000, // milliseconds
  ANIMATION_DURATION: 1000, // milliseconds for fade transitions
  SCROLL_OFFSET: 80, // header height offset for scroll-spy
} as const;

// ===== Form Configuration =====
export const FORM_CONFIG = {
  VALIDATION: {
    MIN_NAME_LENGTH: 2,
    MAX_NAME_LENGTH: 100,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  TIMEOUTS: {
    SUBMISSION_DELAY: 1000, // milliseconds
    SUCCESS_MESSAGE_DURATION: 4000, // milliseconds
  },
} as const;

// ===== Navigation Configuration =====
export const NAV_CONFIG = {
  SECTIONS: [
    { id: 'services', label: 'SERVICES' },
    { id: 'dropdown', label: 'DROPDOWN' },
    { id: 'contact', label: 'CONTACT' },
  ] as const,
  SCROLL_SMOOTH: true,
} as const;

// ===== Image Configuration =====
export const IMAGE_CONFIG = {
  GALLERY_ITEMS: [
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1192033/pexels-photo-1192033.jpeg?auto=compress&cs=tinysrgb&w=600',
  ] as const,
  RESPONSIVE_SIZES:
    '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' as const,
} as const;

// ===== Color Configuration =====
export const COLOR_CONFIG = {
  PRIMARY: '#f97316', // orange-500
  PRIMARY_HOVER: '#ea580c', // orange-600
  SECONDARY: '#gray-600',
  SUCCESS: '#22c55e', // green-500
  ERROR: '#ef4444', // red-500
  WARNING: '#eab308', // yellow-500
} as const;

// ===== Accessibility Configuration =====
export const A11Y_CONFIG = {
  KEYBOARD_KEYS: {
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ENTER: 'Enter',
    ESCAPE: 'Escape',
  },
  SKIP_LINKS: {
    MAIN_CONTENT: '#main-content',
    NAVIGATION: '#main-nav',
  },
} as const;

// ===== Animation Configuration =====
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: '200ms',
    NORMAL: '300ms',
    SLOW: '500ms',
  },
  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
  },
} as const;

// ===== API Configuration =====
export const API_CONFIG = {
  ENDPOINTS: {
    NEWSLETTER_SUBSCRIBE: '/api/newsletter/subscribe',
    CONTACT_SUBMIT: '/api/contact/submit',
  },
  TIMEOUTS: {
    DEFAULT: 30000, // 30 seconds
    UPLOAD: 60000, // 60 seconds
  },
} as const;

// ===== Error Messages =====
export const ERROR_MESSAGES = {
  FORM: {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_NAME: 'Name must be between 2 and 100 characters',
    SUBMISSION_ERROR: 'Something went wrong. Please try again later.',
  },
  GENERAL: {
    NETWORK_ERROR: 'Network error. Please check your connection.',
    SERVER_ERROR: 'Server error. Please try again later.',
    UNKNOWN_ERROR: 'An unknown error occurred.',
  },
} as const;

// ===== Success Messages =====
export const SUCCESS_MESSAGES = {
  FORM: {
    NEWSLETTER_SUBSCRIBE: '✓ Thank you for subscribing! Check your email for confirmation.',
    CONTACT_SUBMIT: '✓ Your message has been sent successfully.',
  },
} as const;

// ===== Feature Flags =====
export const FEATURE_FLAGS = {
  ENABLE_ANALYTICS: true,
  ENABLE_ERROR_TRACKING: true,
  ENABLE_PERFORMANCE_MONITORING: true,
  MAINTENANCE_MODE: false,
} as const;

// ===== Media Query Breakpoints =====
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;
