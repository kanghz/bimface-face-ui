<script>
  module.exports = {
    data(){
      return{
        viewToken:'',
        viewer:null 
      }
    },
    
    methods:{
      buttonEvent:(str)=>{
        alert(str + '-Button Clicked')
      }
    }
      
  };
</script>

# View -- 模型图纸展示
----

### 基础用法

<div class="demo-block">
  <input v-model="viewToken" style="border:1px solid #ccc;"/>
  <face-view
      :height="600"
      :viewToken="viewToken"
      vid="dom3d"
      type="junior"
      :viewer.sync="viewer"
  ></face-view>
</div>

::: demo
```html

<div>
  <face-view
      :height="600"
      :viewToken="viewToken"
      vid="dom3d"
      type="junior"
      :viewer.sync="viewer"
  ></face-view>
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

