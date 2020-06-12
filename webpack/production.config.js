const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = function({
  entry,
  output,
  resolve
}) {
  return {
    mode: 'production',
    entry,
    output,
    resolve,
    plugins: [
      // minify css plugin
      new MiniCssExtractPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer()
          ],
        },
      }),
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
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            'postcss-loader',
            'sass-loader',
          ]
        },
        // for global sass files
        {
          test: /\.s(a|c)ss$/,
          loader: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
          exclude: /\.module\.s(a|c)ss$/
        },
        // for css modules
        {
          test: /\.module\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            'postcss-loader',
          ]
        },
        // for global css files
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
          exclude: /\.module\.css$/
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    }
  };
};
