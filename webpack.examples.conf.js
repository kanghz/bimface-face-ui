const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./build/utils')

const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./build/strip-tags')

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          var desc = tokens[idx + 2].content;
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
          tokens[idx + 2].children = [];

          return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }]
  ]
}

module.exports = {
  devtool: '#eval-source-map',

  entry:{
    examples: './examples/index.js'
  },

  output: {
    path: path.resolve(__dirname, './examples/dist'),
    filename: '[name].js'
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
    },{
      test: /\.md$/,
      loader: 'vue-markdown-loader',
      options: vueMarkdown
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
  }
}
