const path = require('path');

const env = process.env.NODE_ENV;
const rootDir = process.cwd();
const publicPath = path.join(rootDir, 'public');

module.exports = require(`./${env}.config`)({
  env,
  rootDir,
  publicPath,
  entry: './src',
  output: {
    filename: 'bundle.js',
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.json']
  }
});
