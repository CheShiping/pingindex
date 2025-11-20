# PingIndex

这是一个基于 Vue 3 和 Vite 构建的现代化终端模拟器项目。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并禁用 Vetur)。

## 推荐的浏览器设置

- 基于 Chromium 的浏览器 (Chrome, Edge, Brave 等):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [在 Chrome DevTools 中开启自定义对象格式化](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [在 Firefox DevTools 中开启自定义对象格式化](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 对 `.vue` 导入的 TypeScript 支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，所以我们用 `vue-tsc` 替代 `tsc` 进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来让 TypeScript 语言服务感知 `.vue` 类型。

## 自定义配置

参见 [Vite 配置参考](https://vite.dev/config/)。

## 项目设置

```sh
npm install
```

### 编译和热重载以进行开发

```sh
npm run dev
```

### 类型检查、编译和压缩以用于生产环境

```sh
npm run build
```

### 使用 [ESLint](https://eslint.org/) 进行代码检查

```sh
npm run lint
```

## 功能特性

解决了Chrome扩展相关的问题：

- 安装了必要的依赖包 vite-plugin-chrome-extension 和 @crxjs/vite-plugin
- 创建了 build/chromeExtension.js 文件来导出Chrome扩展插件
- 更新了 vite.config.ts 中的导入路径
- 添加了 public/manifest.json Chrome扩展清单文件

解决了Ant Design Vue相关的问题：

- 安装了 ant-design-vue 包
- 将 main.ts 中的CSS导入路径从 'ant-design-vue/dist/reset.css' 更改为 'ant-design-vue/dist/antd.css'