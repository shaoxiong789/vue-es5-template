var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpack = require('webpack')
module.exports = {
	entry:
	 {
       app: './src/main.js',
       vendor: ['vue']
    },
	output: {
		path: './dist',
		filename: 'app.[hash].js',
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
        new ExtractTextPlugin("app.[hash].css"),
        new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
	    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
	    // https://github.com/ampedandwired/html-webpack-plugin
	    new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'index.html',
	      inject: true
	    })
  ]
}			