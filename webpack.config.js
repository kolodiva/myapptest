const webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
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
  plugins: [
    
    new webpack.HotModuleReplacementPlugin()

  ],  
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000
  }
};
