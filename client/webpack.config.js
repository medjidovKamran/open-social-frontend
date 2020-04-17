const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const path = require('path');

module.exports = {
  context: __dirname,
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        include: path.join(__dirname, 'node_modules'),
        loader: 'style-loader!css-loader',
        test: /(\.css|\.scss)$/,
      },
      {
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
        test: /\.module\.s(a|c)ss$/,
      },
      {
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
        test: /\.s(a|c)ss$/,
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', 'scss'],
  },
};
