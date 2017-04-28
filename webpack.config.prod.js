var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var url = require('url')
var webpack = require('webpack')

module.exports = (options = {}) => ({
	entry:	{
       index: './src/main.js',
       vendor: ['vue','vue-router']
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: options.dev ? 'js/[name].js' : 'js/[name].[chunkhash].js',
		chunkFilename: '[id].[chunkhash].js?',
		publicPath: '' // 可以在这里配置对应的输出CDN路径如 http://localhost:8080/
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
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
			{
				test: /\.html$/,
				use:	[{
					loader:	'html-loader',
					options: {
            root: path.resolve(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
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
    new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.template.html',
      inject: true
    })
  ],
	devtool: options.dev ? '#eval-source-map' : '#source-map'
})
