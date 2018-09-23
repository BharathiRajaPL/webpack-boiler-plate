const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports ={
// adding single entry point
	entry: './src/index.jsx',
	output: {
		path: path.join(__dirname,'/build'),
		filename: '[hash].index_bundle.js'
	},
	module:{
		rules:[
		 {

        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        loaders: ['babel-loader'],
      },
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, "src"),
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
      },
      {
            test: /\.(png|jp(e*)g|gif)$/,  
            use: [{
                loader: 'file-loader',
                 options: { 
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        },

        {
            test: /\.svg$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 1000000, // Convert images < 1mb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        },
        
		]
	},
	plugins: [
	new HtmlWebPackPlugin({
		template: './src/index.html',
	}),
  new MiniCssExtractPlugin({
      filename: '[hash].index_bundle.css',
    }),
  
  
	],
	resolve: {
    extensions: [".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

}