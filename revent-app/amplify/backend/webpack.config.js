const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const entryObject = glob.sync('./tsc-src/function/**/*.ts').reduce(function(obj, el){
  const pathParse = path.parse(el);
  const key = `${pathParse.dir.replace('./tsc-src/function', 'function')}/src/${pathParse.name}`;
  obj[key] = path.resolve(__dirname, el);

  return obj;
},{});

module.exports = {
  mode: 'development',
  entry: entryObject,
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, ''),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.webpack')
          ]
        ],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app-core': path.resolve(__dirname, 'tsc-src/core/index.ts'),
    }
  },
  externals: [
    /^aws-sdk/
  ],
  plugins: [],
  optimization: {
    minimize: false
  }
};
