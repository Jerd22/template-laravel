const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss')
    ]).webpackConfig(require('./webpack.config'));

mix.copyDirectory('resources/fonts','public/fonts');
mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');

mix.copy('resources/js/alpine.js', 'public/js/alpine.js');
mix.copy('resources/css/fonts.css', 'public/css/fonts.css');

