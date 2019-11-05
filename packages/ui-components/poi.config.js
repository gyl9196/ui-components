module.exports = {
    entry: {
      banner: './src/components/Banner/Banner.vue',
    },
    css: {
        extract: false
    },
    output: {
      clean: true,
      format: 'cjs',
      fileNames: {
        js: '[name].js'
      }
    }
  };