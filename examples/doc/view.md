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

<style>
  .face-input {
    width:240px;
   }
</style>

# View -- 模型图纸展示
----
<face-input v-model="viewToken" clearable></face-input>

### 基础用法
<div class="demo-block">
  <face-view
      :height="400"
      :view-token="viewToken"
      vid="test"
      toolbar
      :viewer.sync="viewer"
  ></face-view>
</div>

::: demo
```html

<div>
  <face-view
      :height="400"
      :view-token="viewToken"
      vid="test"
      toolbar
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
| view-token  | viewToken   | String    | — |  —    |
| vid  | dom加唯一标识id    | String   | —   | —   |
| toolbar  | 是否带有工具条   | Boolean   | —   | false |
| viewer  | 获取模型图纸对象 | Object   |  —  |  —  |
