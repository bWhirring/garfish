// const SlardarWebpackPlugin = require('@slardar/webpack-plugin');
// const GarfishPlugin = require('../../packages/tool/webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    open: false,
    port: '2555',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    historyApiFallback: true,
  },

  publicPath: 'http://localhost:2555',
  configureWebpack: (config) => {
    // config.output.library = `sub-app-garfish-exports`;
    config.output.jsonpFunction = `vue-app-jsonp`;
    config.output.libraryTarget = 'umd';
    config.output.globalObject = 'window';
    config.devtool = 'source-map';
    config.mode = process.env.TEST_ENV ? 'production' : 'development';
    config.optimization.minimize = true;

    config.plugins = [
      ...config.plugins,
      new webpack.BannerPlugin('garfish'),
      // new GarfishPlugin({
      //   webpackInstance: webpack,
      //   appId: 'vue_app',
      // }),
    ];
  },
};
