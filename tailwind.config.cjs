/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cc-primary': '#4A60F6',
        'cc-primary-soft': '#1E293B',
        'cc-success': '#48C774',
        'cc-bg': '#020617',
        'cc-surface': '#020617',
        'cc-border': '#1E293B',
        'cc-text': '#E5E7EB',
        'cc-muted': '#9CA3AF',
        'cc-danger': '#EF4444',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      borderRadius: {
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      fontSize: {
        xs: ['12px', { lineHeight: '18px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '26px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
      },
      boxShadow: {
        'elevation-xs': '0 1px 2px rgba(15, 23, 42, 0.06)',
        'elevation-sm': '0 4px 10px rgba(15, 23, 42, 0.06)',
        'elevation-md': '0 10px 25px rgba(15, 23, 42, 0.08)',
        'elevation-lg': '0 18px 40px rgba(15, 23, 42, 0.12)',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
      },
    },
  },
  plugins: [],
};
