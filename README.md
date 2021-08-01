# webpack-pro

基于 Webpack5 的一个 React+Typescript 脚手架，并根据 webpack5 的新特性删掉了一些 webpack4 被替换的插件，并接入了阿里巴巴前端 lint 规范

## 特性

- Webpack5
- 支持 LESS 预处理器
- 支持 Typescript
- BABEL 缓存
- JS 文件压缩
- CSS 文件压缩
- base64 图片处理
- 支持 CSS Modules 模块化
- 开发环境 / 生产环境区分
- CSS 前缀添加 浏览器兼容
- 热更新支持
- CSS 文件单独抽离
- eslint stylelint 保证编码规范和代码质量
- commitlint 代码提交规范
- 更加友好的 webpack 命令行错误提示

## 技术栈

react^17.0.2 + webpack^5.47.1 + less^4.1.1 + typescript^4.3.5 + babel^7.14.8

## 使用

```
git clone https://github.com/Seedsa/SEED-CLI.git
npm install
npm run start
```

- 运行

```
npm run start
npm run dev
```

- 打包

```
npm run build
```

- 规范修复

```
f2elint fix
```

- 规范扫描

```
f2elint scan
```
