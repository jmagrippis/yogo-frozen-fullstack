var webpack = require('webpack')
var path = require('path')

var appEntryPoints
var plugins

if (process.env.NODE_ENV === 'production') {
  appEntryPoints = [
    './src/index.jsx'
  ]
  plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js')
  ]
} else {
  appEntryPoints = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.jsx'
  ]
  plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js')
  ]
}

module.exports = {
  entry: {
    app: appEntryPoints,
    vendor: [
      '@horizon/client',
      'aphrodite',
      'immutable',
      'lodash',
      'material-ui',
      'normalize.css',
      'react',
      'react-addons-pure-render-mixin',
      'react-dom',
      'react-google-maps',
      'react-redux',
      'react-tap-event-plugin',
      'redux',
      'redux-thunk'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: plugins
}
