const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const WebpackBaseConfig = {
  entry: path.join(__dirname, "../src/index.tsx"),
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist"),
    clean: true, // 在生成文件之前清空 output 目录
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: ["babel-loader?cacheDirectory"],
        include: path.join(__dirname, "../src"),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // 处理图片
      },
      {
        test: /\.(eot|woff|otf|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
        type: "asset/resource", // webpack5 已支持资源模块 代替file-loader
        generator: {
          filename: "static/[hash][ext][query]", // 指定文件输出目录
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/inline", // webpack5 已支持资源模块 代替url-loader
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true,
    },
    inline: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true,
      title: "Development",
    }),
  ],
};

module.exports = WebpackBaseConfig;
