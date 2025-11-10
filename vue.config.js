const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 🔑 THE FIX FOR GITHUB PAGES:
  // Sets the base path for assets to match the subdirectory name on GitHub Pages.
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_course_site_purchase/' // <-- REPLACE THIS with your GitHub repository name
    : '/'
})
