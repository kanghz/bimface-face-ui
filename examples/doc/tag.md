# Tag -- 标签
----
### 基础用法
使用```type```和```plain```属性来定义 Tag 的样式。

<div class="demo-block">
  <div>
    <face-tag>标签一</face-tag>
    <face-tag type="primary">标签二</face-tag>
    <face-tag type="orange">标签三</face-tag>
  </div>
  <div class="mt10">
    <face-tag plain>标签一</face-tag>
    <face-tag type="primary" plain>标签二</face-tag>
    <face-tag type="orange" plain>标签三</face-tag>
  </div>
</div>

::: demo
```html

<div>
  <face-tag>标签一</face-tag>
  <face-tag type="primary">标签二</face-tag>
  <face-tag type="orange">标签三</face-tag>
</div>
<div>
  <face-tag plain>标签一</face-tag>
  <face-tag type="primary" plain>标签二</face-tag>
  <face-tag type="orange" plain>标签三</face-tag>
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
| size     | 尺寸   | string  |   default,small,large            |    default     |
| type     | 类型   | string    |   primary,orange |     —    |
| plain     | 是否朴素标签   | Boolean    | — | false   |

