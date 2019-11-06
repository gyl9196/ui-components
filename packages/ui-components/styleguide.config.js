const vueLoader = require('vue-loader')
const { resolve } = require('path');

module.exports = {
	components: 'src/components/**/*.vue',
	ribbon: {
		text: 'Back to examples',
		url: 'https://vue-styleguidist.github.io/Examples.html'
	},
	webpackConfig: {
		resolve: {
			extensions: ['.js', '.json', '.vue', '.ts'],
			alias: {
			  '~': resolve(__dirname, 'src'),
			  '@': resolve(__dirname, 'src')
			}
		  },
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						loaders: {
							scss: ['vue-style-loader', 'css-loader', 'sass-loader']
						}
					}
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.(css?|scss)(\?.*)?$/,
					loader: 'style-loader!css-loader!sass-loader'
				}
			]
		},
		plugins: [new vueLoader.VueLoaderPlugin()]
	},
	
	usageMode: 'expand',
	exampleMode: 'expand',
	styleguideDir: 'dist'
}
