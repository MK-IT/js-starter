const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// FIXME: Webpack will be used only for production build; development would happen inside the storybook
// TODO: might need a plugin to include generated CSS https://webpack.js.org/plugins/mini-css-extract-plugin
// TODO: production guide https://webpack.js.org/guides/production/
// TODO: we don't need styled components bundled with our lib but either just the generated components with styles OR as peer dependency
// TODO: bundle size

const BUNDLE_FILENAME = 'js-template.bundle.js';
const LIB_NAME = 'jsTemplate';

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: BUNDLE_FILENAME,
    library: LIB_NAME,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  externals: [nodeExternals()],
  devtool: 'source-map'
};
