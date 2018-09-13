<script>
  module.exports = {
    data(){
      return{
        viewToken:'',
        viewer:null 
      }
    },
    
    methods:{
    }
      
  };
</script>

# View -- 模型图纸展示
----

### 基础用法

<div class="demo-block">
  <input v-model="viewToken" style="border:1px solid #ccc;"/>
  <face-view
      :height="400"
      :viewToken="viewToken"
      vid="dom3d"
      type="junior"
      :viewer.sync="viewer"
  ></face-view>
</div>

::: demo
```html

<div>
  <input v-model="viewToken" style="border:1px solid #ccc;"/>
  <face-view
      :height="400"
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
| width     | view宽度   | Number  |    —    |    100%     |
| height     | view高度   | Number    |   — |    100%    |
| viewToken  | viewToken   | String    | — |  —    |
| vid  | dom加唯一标识id    | String   | —   | —   |
| viewer  | 获取模型图纸对象 | Object   |  —  |  —  |
