const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Components = require('./components.json');

module.exports = {
  entry:Components,

  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name]/index.js',
    chunkFilename: '[id].js',
    library: 'bimface-face-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  plugins: [
    new ExtractTextPlugin('[name].css',{allChunks : true})
  ],

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false
      }
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test:/\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader']
      })
    },{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader',"less-loader"]
      })
    },{
      test: /\.(png|jpe?g|gif)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10 * 1024
      }
    },{
      test: /\.(woff|eot|ttf|otf|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'images/fonts/[name].[hash:4].[ext]'
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: path.join(__dirname,'node_modules/vue/dist/vue')
    }
  },

  performance: {
    hints: false
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
