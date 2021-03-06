const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.vue'
    // Just need the vue file
    // './src/**/*.jsx',
    // './src/**/*.html'
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer'),
    purgecss
  ]
};
