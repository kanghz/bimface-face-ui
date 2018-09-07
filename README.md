# Face-ui
一个基于Vue2.0版本的Web UI组件库

## 安装Face-ui
``` bash
npm i bimface-face-ui
```

## 按需引入
用 babel-plugin-import，该插件是一款 babel 插件，借助此插件只需要引入需要的组件，以达到减小项目体积的目的。

安装 babel-plugin-component：
``` bash
npm install babel-plugin-component -D
```
修改 .babelrc：
``` bash
"plugins": [
 [
   "import",
   {
     "libraryName": "bimface-face-ui",
     "style": true
   }
 ]
]
```
安装和配置好插件后，即可使用
``` bash
import {
  Button,
  Loading
  // ...
} from 'bimfae-face-ui'

Vue.use(Button)
Vue.use(Loading)
```

## 全局引入
``` bash
import Vue from 'vue'
import face from 'bimfae-face-ui'
import 'bimfae-face-ui/dist/face.css';

Vue.use(face)
```
