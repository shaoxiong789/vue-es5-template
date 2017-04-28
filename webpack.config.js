var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = (options = {}) => ({
	entry:	{
       index: './src/main.js',
       vendor: ['vue','vue-router']
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: options.dev ? '[name].js' : '[name].[chunkhash].js',
		chunkFilename: '[id].[chunkhash].js?',
		publicPath: options.dev ? 'assets/' : '../' // 可以在这里配置对应的输出CDN路径如 http://localhost:8080/
	},
	module: {
		rules: [
		  {
				test: /\.(png|jpg|jpeg|gif|woff|svg|ttf|eot)$/,
				use: [{
					loader:	'url-loader?limit=10000&name=images/[name].[ext]'
				}]
			},
			{
				test: /\.html$/,
				use:	[{
					loader:	'html-loader'
				}]
			},
			{
        test: /\.css$/i,
        use: ExtractTextPlugin.extract("css-loader")
      },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract("css-loader!sass-loader")
			}
		]
	},
	plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
