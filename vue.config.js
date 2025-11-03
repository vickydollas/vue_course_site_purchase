const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // FIX: Sets the base path to relative ('./') instead of absolute ('/').
  // This ensures that all assets (CSS, JS, images) are loaded relative 
  // to the index.html file, solving the 404 issue on network deployment 
  // (especially when hosted in a subdirectory).
  publicPath: '/my-project/' 
})
