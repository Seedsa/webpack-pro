const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBaseConfig = {
  entry: {
    main: path.resolve(__dirname, '../src/index.tsx'),
  },
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '../dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true, // 在生成文件之前清空 output 目录 替换CleanWebpackPlugin
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [],
            },
          },
        ],
        include: path.join(__dirname, '../src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // 处理图片
      },
      {
        test: /\.(eot|woff|otf|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
        type: 'asset/resource', // webpack5 已支持资源模块 代替file-loader
        generator: {
          filename: 'static/[hash][ext][query]', // 指定文件输出目录
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/inline', // webpack5 已支持资源模块 代替url-loader
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
      title: 'Development',
    }),
  ],
};

module.exports = WebpackBaseConfig;
