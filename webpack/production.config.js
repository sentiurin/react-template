const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
      new MiniCssExtractPlugin()
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
            'sass-loader'
          ]
        },
        // for global sass files
        {
          test: /\.s(a|c)ss$/,
          loader: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
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
            }
          ]
        },
        // for global css files
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
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
