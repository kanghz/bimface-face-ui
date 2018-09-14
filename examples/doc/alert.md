<script>
  module.exports = {
    methods:{
      buttonEvent:(str)=>{
        alert(str + '-Button Clicked')
      }
    }
      
  };
</script>

# Alert -- 警告
----
通过调用 $alert 提供的 open() 方法来控制显示警告

### 基础用法

<div class="demo-block">
  <face-button @click="alertVisible = true">Default</face-button>
  <face-button @click="alertSuccessVisible = true">Success</face-button>
  <face-button @click="alertWarningVisible = true">Warning</face-button>
  <face-button @click="alertErrorVisible = true">Error</face-button>
</div>

::: demo
```html

<div>
  <face-button @click="alertVisible = true">Default</face-button>
  <face-button @click="alertSuccessVisible = true">Success</face-button>
  <face-button @click="alertWarningVisible = true">Warning</face-button>
  <face-button @click="alertErrorVisible = true">Error</face-button>
</div>

```
:::

### 带图标

<div class="demo-block">
  <face-button @click="alertIconVisible = true">Icon</face-button>
</div>

::: demo
```html

<div>
  <face-button @click="alertIconVisible = true">Icon</face-button>
</div>

```
:::


### 文字居中

<div class="demo-block">
  <face-button @click="alertCenterVisible = true">Text Center</face-button>
</div>

::: demo
```html

<div>
  <face-button @click="alertCenterVisible = true">Text Center</face-button>
</div>

```
:::


### 可关闭

<div class="demo-block">
  <face-button @click="alertCloseVisible = true">CloseBtn</face-button>
</div>

::: demo
```html

<div>
  <face-button @click="alertCloseVisible = true">CloseBtn</face-button>
</div>

```
:::

### Config
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | String  |  success,warning,error   |   default   |
| center     | 是否居中   | Boolean  |  — |  false    |
| close  | 是否带关闭按钮    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | String   |  —  |  —  |


### Events
| 方法名      | 说明    |
|---------- |-------- |
| closeButtonEvent   | 点击关闭触发事件   |

