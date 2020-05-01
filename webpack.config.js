const path = require('path');

module.exports = {
	entry: './index.js',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: [{
					loader: 'babel-loader?cacheDirectory',
					options: {
						plugins: ['transform-object-rest-spread', '@babel/plugin-transform-runtime'],
					},
				}],
				exclude: /(node_modules)/,
			},
			{
				test: /\.script\.js$/,
				use: [{
					loader: 'script-loader',
					options: {
						sourceMap: true,
					},
				}]
			}, {
				test: /\.js$/,
				use: ["source-map-loader"],
				enforce: "pre"
			}
		],
	},
	resolve: {
		extensions: ['.js'],
    },
    output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'PocketProvider.js',
		library: 'webpackLib',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: 'this'
	},
	mode: "development",
	optimization: {
		concatenateModules: true,
		minimize: true,
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 6,
			maxInitialRequests: 4,
			automaticNameDelimiter: '~',
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	}
};