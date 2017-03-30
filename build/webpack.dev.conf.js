var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')



// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
});


// export default {
//   bootstrap(){
//     let mock = new MockAdapter(axios);
//     mock.onGet('./error').reply(200,{
//       msg:'success'
//     });
//
//
//       mock.onGet('/error').reply(500, {
//           msg: 'failure'
//       });
//
//       //登陆
//       mock.onPost('/login').reply(config => {
//           let {username, password} = JSON.parse(config.data);
//           return new Promise((resolve, reject) => {
//               let user = null;
//               setTimeout(() => {
//                   let hasUser = LoginUsers.some(u => {
//                       if (u.username === username && u.password === password) {
//                           user = JSON.parse(JSON.stringify(u));
//                           user.password = undefined;
//                           return true;
//                       }
//                   });
//
//                   if (hasUser) {
//                       resolve([200, { code: 200, msg: '请求成功', user }]);
//                   } else {
//                       resolve([200, { code: 500, msg: '账号或密码错误' }]);
//                   }
//               }, 1000);
//           });
//       });
//
//       //注册
//
//   }
// }
