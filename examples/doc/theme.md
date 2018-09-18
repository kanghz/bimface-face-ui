# 自定义主题
----


Face-ui 默认提供一套主题，方便使用者覆盖样式。我们提供了三种方法，可以进行不同程度的样式自定义。

## 在项目中改变 LESS 变量
该项目的样式 使用 LESS 编写，如果你的项目也使用了 LESS，那么恭喜你，你可以直接在项目中改变 Face-ui 的样式变量。新建一个样式文件，例如 variables.less，写入以下内容：
``` bash
@import "~bimface-face-ui/src/components/theme/src/index";

@default-color: #606266;
@primary-color: #f60;
@waring-color: #f99d0b;
@success-color: #13CE66;
@danger-color: #FF4949;
@second-color: #f60;
@border-color:#dcdfe6;
@popup-bg:rgba(0,0,0,.4);
@popup-head-bg:#2c2c2c;
@loading-bg:rgba(0,0,0,.7);
@loading-color: rgba(0, 76, 61, 0.9);
@table-th-bg:#f1f1f1;
@table-stripe:#fafafa;
@table-tr-hover:#f1fcfa;
```
之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Face-ui 编译好的 CSS 文件）：
``` bash
import Vue from 'vue'
import face from 'bimface-face-ui'
import './variables.less'

Vue.use(face)
```
