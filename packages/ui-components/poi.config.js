module.exports = {
    entry: {
      banner: './src/components/Banner/index.js',
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