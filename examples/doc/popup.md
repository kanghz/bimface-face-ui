<script>
module.exports = {
  data() {
    return {
      popupVisible1: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false
    };
  },
  
  methods:{
    confirmButtonEvent(){
      console.log('confirmButtonEvent');
    },
    cancelButtonEvent(){
      console.log('cancelButtonEvent');
    },
    closeButtonEvent(){
      console.log('closeButtonEvent');
    }
  }
};
</script>

# Popup -- 弹出层
----
打开控制台，显示弹出层后，相关点击按钮查看```Console```。

### 基础用法
<div class="demo-block">
  <face-button @click="popupVisible1 = true">Popup Default</face-button>
  <face-popup :visible.sync="popupVisible1" title="标题名称" close @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

::: demo
```html

<div>
  <face-button @click="popupVisible1 = true">Popup Default</face-button>
    
  <face-popup :visible.sync="popupVisible1" title="标题名称" close
    @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

```
:::

### 带Button
<div class="demo-block">
  <face-button @click="popupVisible4 = true">Popup Button</face-button>
  
  <face-popup :visible.sync="popupVisible4" title="标题名称" close
              confirm-button-text="确定"
              @confirmButtonEvent="confirmButtonEvent"
              cancel-button-text="取消"
              @cancelButtonEvent="cancelButtonEvent"
              @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

::: demo
```html

<div>
  <face-button @click="popupVisible2 = true">Popup Button</face-button>
    
  <face-popup :visible.sync="popupVisible2" title="标题名称" close
              confirm-button-text="确定"
              @confirmButtonEvent="confirmButtonEvent"
              cancel-button-text="取消"
              @cancelButtonEvent="cancelButtonEvent"
              @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

```
:::

### 内容居中
<div class="demo-block">
  <face-button @click="popupVisible2 = true">Popup Button</face-button>
  
  <face-popup :visible.sync="popupVisible2" title="标题名称" close
              center
              confirm-button-text="确定"
              @confirmButtonEvent="confirmButtonEvent"
              cancel-button-text="取消"
              @cancelButtonEvent="cancelButtonEvent"
              @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

::: demo
```html

<div>
  <face-button @click="popupVisible2 = true">Popup Button</face-button>
    
  <face-popup :visible.sync="popupVisible2" title="标题名称" close
              center
              confirm-button-text="确定"
              @confirmButtonEvent="confirmButtonEvent"
              cancel-button-text="取消"
              @cancelButtonEvent="cancelButtonEvent"
              @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

```
:::

### 取消关闭按钮
<div class="demo-block">
  <face-button @click="popupVisible3 = true">Popup No CloseButton</face-button>
  
  <face-popup :visible.sync="popupVisible3" title="标题名称"
              cancel-button-text="取消"
              @cancelButtonEvent="cancelButtonEvent"
              @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

::: demo
```html

<div>
  <face-button @click="popupVisible3 = true">Popup No CloseButton</face-button>
    
  <face-popup :visible.sync="popupVisible3" title="标题名称"
              cancel-button-text="取消"
              @cancelButtonEvent="cancelButtonEvent"
              @closeButtonEvent="closeButtonEvent">
      <p>这里可添加任意内容。</p>
  </face-popup>
</div>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| visible     | 是否显示   | Boolean  |   —  |    false     |
| close     | 是否带关闭按钮   | Boolean    |  — |    false   |
| center     | 是否居中   | Boolean    | — | false   |
| title  | 弹层标题   | String   | —   | —  |
| confirm-button-text  | 确认按钮名称    | String   | —   | —  |
| cancel-button-text  | 取消按钮名称    | String   | —   | —  |


### Events
| 方法名      | 说明    |
|---------- |-------- |
| closeButtonEvent     | 可作标题栏关闭按钮点击触发事件绑定。   |
| confirmButtonEvent     | 可作Confirm按钮点击触发事件绑定。   |
| cancelButtonEvent     | 可作Cancel按钮点击触发事件绑定。   |

