var webpack = require("webpack");
var path = require("path");

var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
  context: path.join(__dirname, './src'),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, './public'),
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtools: 'sourcemaps-eval',
	module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            "es2015",
            "stage-0",
            "react"
          ],
          plugins: [
            "add-module-exports",
            "react-html-attrs",
            "transform-class-properties",
            "transform-decorators-legacy"
          ]
        }
      },
      {
        test: /\.html$/,
        loader: "file-loader",
        query: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
            "style-loader",
            //"css-loader",
            //"postcss-loader"
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
        )
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: "file-loader",
        query: {
          name: "images/[name].[ext]",
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        query: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: "images/[name].[ext]"
        }
      }
    ],
	},
  postcss: [
    autoprefixer
  ],
  plugins: [
    new ExtractTextPlugin("app.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      open: false,
      server: {
        baseDir: [
          'public'
        ]
      }
    })
  ]
};
