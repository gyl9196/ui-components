module.exports = {
  entry: {
    Elements: './src/components/Elements/index.js',
    Layouts: './src/components/Layouts/index.js'
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
