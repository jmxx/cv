import path               from 'path';
import webpack            from 'webpack';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin  from 'html-webpack-plugin';

export default function webpackBase(options = {}) {
  const paths = {
    app: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
  };

  const entry = {
    app: [
      path.join(paths.app, 'app.js')
    ]
  };

  const extractStyle = new ExtractTextPlugin({
    filename: 'css/[name].css',
    disable: !options.prod
  });

  return {
    entry,
    output: {
      path: paths.dist,
      filename: 'js/[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          }
        },
        {
          test: /\.styl$/,
          use: extractStyle.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
              'stylus-loader',
            ]
          })
        },
      ]
    },
    plugins: [
      extractStyle,

      new HtmlWebpackPlugin({
        template: path.resolve(paths.app, 'index.html'),
        inject: true,
        hash: true,
        // chunks: ['vendors', 'app']
      }),
    ]
  };

};
