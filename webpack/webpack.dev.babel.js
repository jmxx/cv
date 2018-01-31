import webpack              from 'webpack';
import merge                from 'webpack-merge';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import webpackBase          from './webpack.base';

const config = webpackBase();

Object.keys(config.entry).forEach((name) => {
  config.entry[name] = [
    './webpack/hot-client',
  ].concat(config.entry[name]);
});

export default merge(config, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new FriendlyErrorsPlugin(),
  ]
});
