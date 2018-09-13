<script>
  module.exports = {
    methods:{
      buttonEvent:(str)=>{
        alert(str + '-Button Clicked')
      }
    }
      
  };
</script>

# View -- 模型图纸展示
----


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

