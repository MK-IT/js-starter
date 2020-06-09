const path = require('path');
const nodeExternals = require('webpack-node-externals');

// FIXME: Webpack will be used only for production build; development would happen inside the storybook
// TODO: might need a plugin to include generated CSS https://webpack.js.org/plugins/mini-css-extract-plugin
// TODO: production guide https://webpack.js.org/guides/production/
// TODO: we don't need styled components bundled with our lib but either just the generated components with styles OR as peer dependency
// TODO: bundle size

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js-template.js',
    library: 'jsTemplate',
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
  externals: [nodeExternals()],
  devtool: 'source-map'
};
