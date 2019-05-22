const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  module: {
    rules: [
      
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },      

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },  
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],  
  devServer: {
    contentBase: './build',
    hot: true
  }
};