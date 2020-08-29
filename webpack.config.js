const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
		{
			test: /\.s[ac]ss$/i,
			use: [
			'style-loader',
			'css-loader',
			'sass-loader',
			],
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {
					outputPath: 'images/',
					name: '[name].[ext]'
				}
			}]
		},
		],
	},
};