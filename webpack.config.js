const package = require('./package.json');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

const camelCase = (str) =>
  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

/*******************************************************
 * Configuration variables
 *******************************************************/
const FILENAME = package.name;
const LIB_NAME = camelCase(package.name);

module.exports = {
  /*******************************************************
   * Build configuration
   *******************************************************/
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${FILENAME}.bundle.js`,
    library: LIB_NAME,
    libraryTarget: 'umd'
  },
  plugins: [
    // clean dist/
    new CleanWebpackPlugin(),
    // bundle analyzer
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: `${FILENAME}.webpack-bundle-analyzer.html`,
      openAnalyzer: false
    }),
    // Generate typing declarations for all CSS files under `src/` directory.
    new TypedCssModulesPlugin({
      globPattern: 'src/**/*.css'
    })
  ],
  // Exclude `node_modules` from our bundle
  externals: [nodeExternals()],
  // Generate sourcemaps
  devtool: 'inline-source-map',

  /*******************************************************
   * Processing
   *******************************************************/
  module: {
    rules: [
      // run all JS through Babel
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // CSS like `import 'styles.css'`
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      // CSS modules like `import styles from 'MyComponent.module.css'... className={styles.myStyle}`
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
