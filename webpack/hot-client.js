let hotClient = require('webpack-hot-middleware/client?noInfo=true&path=http://localhost:3000/__webpack_hmr');

hotClient.subscribe(function (event) {
  // if (event.action === 'reload') {
  //   window.location.reload();
  // }
});
