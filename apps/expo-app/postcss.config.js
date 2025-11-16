module.exports = {
  plugins: [
    require('react-strict-dom/postcss-plugin')({
      include: [
        // Include source files to watch for style changes
        '**/*.{js,jsx,mjs,ts,tsx}',
        // List any installed node_modules that include UI built with React Strict DOM
        '../../packages/design-system/**/*.{js,jsx,mjs,ts,tsx}',
      ],
    }),
    require('autoprefixer'),
  ],
};
