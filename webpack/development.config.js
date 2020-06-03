const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = function({
  entry,
  output,
  resolve,
  publicPath
}) {
  return {
    mode: 'development',
    entry,
    output,
    resolve,
    devtool: 'inline-source-map',
    devServer: {
      contentBase: publicPath,
      compress: true,
      hot: true,
      port: 3000
    },
    plugins: [
      // clean previous build files
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      // clone dev html page into build directory
      new HtmlWebpackPlugin({
        template: path.join(publicPath, 'index.html')
      }),
      // plugin for prettier
      new PrettierPlugin()
    ],
    module: {
      rules: [
        // for ES
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        // for sass modules
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        // for global sass files
        {
          test: /\.s(a|c)ss$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          exclude: /\.module\.s(a|c)ss$/
        },
        // for css modules
        {
          test: /\.module\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: true
              }
            }
          ]
        },
        // for global css files
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          exclude: /\.module\.css$/
        }
      ]
    }
  };
};
