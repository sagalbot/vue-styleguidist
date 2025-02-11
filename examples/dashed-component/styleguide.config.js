const vueLoader = require('vue-loader')

const docSiteUrl = process.env.DEPLOY_PRIME_URL || 'https://vue-styleguidist.github.io'

module.exports = {
	components: 'src/components/**/*.vue',
	ribbon: {
		text: 'Back to examples',
		url: `${docSiteUrl}/Examples/`
	},
	webpackConfig: {
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
