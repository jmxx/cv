import express              from 'express';
import opn                  from 'opn';
import webpack              from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.dev.babel';

const PORT = 3000;
const app = express();
const webpackCompiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
  stats: { colors: true },
});
const hotMiddleware = webpackHotMiddleware(webpackCompiler, {
  log: () => {},
});

app.use(devMiddleware);

app.use(hotMiddleware);

devMiddleware.waitUntilValid(() => {
  opn(`http://localhost:${PORT}`);
});


app.listen(PORT, () => {
  console.log('listening at 3000');
});
