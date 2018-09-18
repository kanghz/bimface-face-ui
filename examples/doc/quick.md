# 快速上手
----

## 使用前准备
在使用之前，推荐学习 Vue 和 ES2015。

Face-ui 基于Vue.js 2.x+ 版本开发，如果需要可选择性了解以下基础只是：

- [Vue组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)


## 使用 vue-cli@3

```Vue.js``` 提供一个官方命令行工具 vue-cli，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。
``` bash
> npm i -g vue-cli
> mkdir my-project && cd my-project
> vue init webpack
> npm i && npm i bimface-face-ui
```


## 标准开发
实际项目中，往往会使用 ```webpack```，```rollup``` 或者 ```gulp``` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 ```<script>``` 标签全局引入的方式使用。

## 全局组件使用
可以在项目的入口文件中引入所有组件或所需组件
``` javascript
import Vue from 'vue'
import Face from 'bimface-face-ui' // 引入组件库
import 'bimface-face-ui/lib/face.css' // 引入样式库
import App from './App.vue'

Vue.use(Face)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 按需引入

借助 ```babel-plugin-component```，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
``` bash
npm i babel-plugin-import -D
```
在 ```.babelrc``` 里添加插件配置：
```javascript
"plugins": [
 [
   "component",
   {
     "libraryName": "bimface-face-ui",
     "styleLibraryName": "theme"
   }
 ]
]
```
安装和配置好插件后，即可使用，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
```javascript
import Vue from 'vue';
import { Button, Popup } from 'bimface-face-ui';
import App from './App.vue';

Vue.use(Button);
Vue.use(Popup);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
