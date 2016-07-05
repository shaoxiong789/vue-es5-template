var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpack = require('webpack')
module.exports = {
	entry:
	 {
       app: './src/main.js',
       vendor: ['vue','vue-router']
    },
	output: {
		path: './dest',
		filename: 'app.js',
		publicPath: ''
	},
	module: {
		loaders: [
		  	{ test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]' },
			{ test: /\.html$/,loader: 'html-loader' },
			{ test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
		]
	},
	plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
	    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor-vue-vuerouter.js'),
	    // https://github.com/ampedandwired/html-webpack-plugin
	    new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'index.html',
	      inject: true
	    })
  ]
}			