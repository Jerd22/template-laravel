const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  variants: {
    extend: {
        opacity: ['responsive', 'hover', 'focus', 'disabled','group-hover', 'group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/ui')
  ],
}
