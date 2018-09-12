# Button -- 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <face-button>Default</face-button>
    <face-button type="primary">Primary</face-button>
    <face-button type="warning">Warning</face-button>
  </div>
  <div class="mt10">
    <face-button plain>Default</face-button>
    <face-button type="primary" plain>Primary</face-button>
    <face-button type="warning" plain>Warning</face-button>
  </div>
</div>

::: demo
```html

<div>
  <face-button>Default</face-button>
  <face-button type="primary">Primary</face-button>
  <face-button type="warning">Warning</face-button>
</div>
<div>
  <face-button plain>Default</face-button>
  <face-button type="primary" plain>Primary</face-button>
  <face-button type="warning" plain>Warning</face-button>
</div>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
