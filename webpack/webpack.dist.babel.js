import webpack              from 'webpack';
import merge                from 'webpack-merge';
import webpackBase          from './webpack.base';

const config = webpackBase({
  prod: true
});

export default merge(config, {
  plugins: [

  ]
});
