module.exports = {
  plugins: [require('postcss')(), require('tailwindcss')('./tailwind-config.js'), require('autoprefixer')()]
};
