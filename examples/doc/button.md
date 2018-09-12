<script>
  module.exports = {
    methods:{
      buttonEvent:(str)=>{
        alert(str + '-Button Clicked')
      }
    }
      
  };
</script>

# Button -- 按钮
----
### 基础用法
使用```type```和```plain```属性来定义 Button 的样式。

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

### 禁用状态
使用```disabled```属性来定义 Button 状态不可用。

<div class="demo-block">
  <div>
    <face-button disabled>Default</face-button>
    <face-button type="primary" disabled>Primary</face-button>
    <face-button type="warning" disabled>Warning</face-button>
  </div>
  <div class="mt10">
    <face-button plain disabled>Default</face-button>
    <face-button type="primary" plain disabled>Primary</face-button>
    <face-button type="warning" plain disabled>Warning</face-button>
  </div>
</div>

::: demo
```html

<div>
  <face-button disabled>Default</face-button>
  <face-button type="primary" disabled>Primary</face-button>
  <face-button type="warning" disabled>Warning</face-button>
</div>
<div>
  <face-button plain disabled>Default</face-button>
  <face-button type="primary" plain disabled>Primary</face-button>
  <face-button type="warning" plain disabled>Warning</face-button>
</div>

```
:::

### 图标按钮
使用```icon```属性来定义 Button 图标。

<div class="demo-block">
  <div>
    <face-button type="primary" plain icon="bim-delete16">Primary</face-button>
    <face-button type="primary" plain icon="bim-settings">Primary</face-button>
    <face-button type="primary" icon="bim-view">Primary</face-button>
    <face-button type="primary" icon="bim-share">Primary</face-button>
  </div>
</div>

::: demo
```html

<div>
  <face-button type="primary" plain icon="bim-delete16">Primary</face-button>
  <face-button type="primary" plain icon="bim-settings">Primary</face-button>
  <face-button type="primary" icon="bim-view">Primary</face-button>
  <face-button type="primary" icon="bim-share">Primary</face-button>
</div>

```
:::

### 不同尺寸
使用```size```属性来定义 Button 图标。

<div class="demo-block">
  <div>
    <face-button size="large">Default</face-button>
    <face-button>Default</face-button>
    <face-button size="medium">Default</face-button>
    <face-button size="small">Default</face-button>
  </div>
</div>

::: demo
```html

<div>
  <face-button size="large">Default</face-button>
  <face-button>Default</face-button>
  <face-button size="medium">Default</face-button>
  <face-button size="small">Default</face-button>
</div>

```
:::

### 事件绑定
使用```@click```来定义 Button 图标。

<div class="demo-block">
  <div>
    <face-button @click="buttonEvent('Default')">Default</face-button>
    <face-button type="primary" @click="buttonEvent('Primary')">Primary</face-button>
  </div>
</div>

::: demo
```html

<div>
  <face-button @click="buttonEvent('Default')">Default</face-button>
  <face-button type="primary" @click="buttonEvent('Primary')">Primary</face-button>
</div>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small,large            |    default     |
| type     | 类型   | string    |   primary,warning |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |


### Events
| 方法名      | 说明    |
|---------- |-------- |
| click     | 点击触发事件   |

