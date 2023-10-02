const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '../../**/!(*.stories|*.spec).{ts,html}'),
    "./node_modules/flowbite/**/*.js", // add this line
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
};
