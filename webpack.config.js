const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const FILENAME = 'js-template';
const LIB_NAME = 'jsTemplate';

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${FILENAME}.bundle.js`,
    library: LIB_NAME,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      // run all JS through Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // run all CSS imports
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Webpack utility plugins
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: `${FILENAME}.webpack-bundle-analyzer.html`,
      openAnalyzer: false
    })
  ],
  // Exclude `node_modules` from our bundle
  externals: [nodeExternals()],
  // Generate sourcemaps
  devtool: 'source-map'
};
