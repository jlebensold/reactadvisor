var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  stats: {colors: true}
});

server.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000...');
});

