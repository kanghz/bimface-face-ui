# Tag -- 标签
----
### 基础用法
使用```type```和```plain```属性来定义 Tag 的样式。

<div class="demo-block">
  <div>
    <face-tag>标签一</face-tag>
    <face-tag type="primary">标签二</face-tag>
    <face-tag type="success">标签三</face-tag>
    <face-tag type="warning">标签四</face-tag>
    <face-tag type="danger">标签五</face-tag>
    <face-tag type="info">标签六</face-tag>
    <face-tag type="prompt">标签七</face-tag>
  </div>
  <div class="mt10">
    <face-tag plain>标签一</face-tag>
    <face-tag type="primary" plain>标签二</face-tag>
    <face-tag type="success" plain>标签三</face-tag>
    <face-tag type="warning" plain>标签四</face-tag>
    <face-tag type="danger" plain>标签五</face-tag>
    <face-tag type="info" plain>标签六</face-tag>
    <face-tag type="prompt" plain>标签七</face-tag>
  </div>
</div>

::: demo
```html

<div>
  <face-tag>标签一</face-tag>
  <face-tag type="primary">标签二</face-tag>
  <face-tag type="success">标签三</face-tag>
  <face-tag type="warning">标签四</face-tag>
  <face-tag type="danger">标签五</face-tag>
  <face-tag type="info">标签六</face-tag>
  <face-tag type="prompt">标签七</face-tag>
</div>
<div>
  <face-tag plain>标签一</face-tag>
  <face-tag type="primary" plain>标签二</face-tag>
  <face-tag type="success" plain>标签三</face-tag>
  <face-tag type="warning" plain>标签四</face-tag>
  <face-tag type="danger" plain>标签五</face-tag>
  <face-tag type="info" plain>标签六</face-tag>
  <face-tag type="prompt" plain>标签七</face-tag>
</div>

```
:::

### 不同尺寸

<div class="demo-block">
  <div>
    <face-tag size="large" plain>标签一</face-tag>
    <face-tag plain>标签二</face-tag>
    <face-tag size="small" plain>标签三</face-tag>
  </div>
</div>

::: demo
```html

<div>
  <face-tag size="large" plain>标签一</face-tag>
  <face-tag plain>标签二</face-tag>
  <face-tag size="small" plain>标签三</face-tag>
</div>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | String  |  small,large    |    default     |
| type     | 类型   | String    |  primary,success,warning,danger,info,prompt |     —    |
| plain     | 是否朴素标签   | Boolean    | — | false   |


