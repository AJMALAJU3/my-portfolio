export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [], // Disable safelist to purge everything
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit', // Ensure Just-In-Time mode is enabled
};
