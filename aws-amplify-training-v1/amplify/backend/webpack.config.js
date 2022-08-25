const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    'function/awsamplifytrainingv1employeeapi/src/index': path.resolve(__dirname, 'src/function/awsamplifytrainingv1employeeapi/index.ts'),
    'function/awsamplifytrainingv1userapi/src/index': path.resolve(__dirname, 'src/function/awsamplifytrainingv1userapi/index.ts'),
    'function/awsamplifytrainingv1584a4683PostConfirmation/src/custom': path.resolve(__dirname, 'src/function/awsamplifytrainingv1584a4683PostConfirmation/custom.ts')
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
  },
  externals: [
    /^aws-sdk/
  ],
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
  ],
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, ''),
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  }
};
