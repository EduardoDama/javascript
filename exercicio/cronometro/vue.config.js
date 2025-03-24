const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/CronometroVUEJS/' // Caminho do seu repositório no GitHub Pages
  : '/'
})
