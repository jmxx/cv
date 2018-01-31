import webpack              from 'webpack';
import merge                from 'webpack-merge';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import webpackBase          from './webpack.base';

Object.keys(webpackBase.entry).forEach((name) => {
  webpackBase.entry[name] = [
    './webpack/hot-client',
  ].concat(webpackBase.entry[name]);
});

export default merge(webpackBase, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new FriendlyErrorsPlugin(),
  ]
});
