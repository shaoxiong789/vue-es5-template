var ExtractTextPlugin = require("extract-text-webpack-plugin")
var webpack = require('webpack')
module.exports = {
	entry:
	 {
       bundle: './src/main.js',
       vendor: ['vue']
    },
	output: {
		path: './dist',
		filename: 'build.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
		  	{ test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]' },
			{ test: /\.html$/,loader: 'html-loader' },
			{ test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
		]
	},
	plugins: [
        new ExtractTextPlugin("build.css"),
        new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
	    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  ]
}			