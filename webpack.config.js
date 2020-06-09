const path = require('path');

// FIXME: Webpack will be used only for production build; development would happen inside the storybook
// TODO: @babel/cli might not be needed since we won't use Babel directly; webpack will use babel internally
// TODO: how to source maps? https://webpack.js.org/guides/author-libraries/#base-configuration-with-source-map
// TODO: how to exclude externals such as styled components? https://webpack.js.org/guides/author-libraries/#externalize-lodash
// TODO: might need a plugin to include generated CSS https://webpack.js.org/plugins/mini-css-extract-plugin
// TODO: production guide https://webpack.js.org/guides/production/

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
  }
};
