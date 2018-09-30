<script>
  module.exports = {
    data(){
      return{
        viewToken:'',
        viewer:null 
      }
    },
    
    methods:{
      marker3dEvent(){
        let option = {
          viewer: this.viewer,
          url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAyZJREFUSA2VVr9LM0EQfbl8/kQsYjBKGsHCxiaCIBgRRAlaJH+AkFq0CogWSkwbY2ElpFQEO4MkqFiJNgomaqHgr0YiiqiooIFouO/ewh17d0bMwN3NvJ15s7c7O3eOzs5OFWWksbERoVAIXV1d8Hq94qLr3d2duHK5HDY2NvD+/l6GAXD8lKC5uRnj4+MYGRlBXV1d2WAOFAoFbG5uYmlpCY+PjzZfW4Kenh7E43G4XC6b82/Ay8sLpqencXBwYHJTZGt0dBTJZLJicnJwQowlhyxGAs58amoKiqKgVCrh+/tb9vuTzlhykMsQ7sHAwID6/Pys6rK6uqp2d3er0WhUvb29FfDX15fQaVOnUKdPb2+vura2JjDeyEVOcv9jpomJCdOynJ+fi81bX19HJpMBN/3+/l68Gf2dTidaW1vFphaLRUI4OzsTT964XCySWCwGhaU4PDxsDFJxu92GTYJ8Pm+Qc4BLSEwnJ2YtClYguRXWubUUHx4eGFORWGPISW6Fh0iWbDYr6lrG/qLzLPDgyUJuhSdUlsPDQ9msSLeeAXLbElhftZIM1liRoLq62sTR0tJisisxrLHkVl5fX00cbW1tJrsSwxpLbuX6+trEoR0QNDU1mbC/GIxhrCzkVlg1stTW1mJmZgZVVVUy/KtO39nZWTBWFnIrPKk8OJTj42M8PT1haGgIy8vL0FqA7G/THQ4H/H4/VlZWMDg4aBonZzqdBtgvtBoWfWR3d1ft7+9XtURGX3l7e1Pn5+dFX6Gvfi0uLqocKyfkpK/opgsLC/j4+IBGjkgkInrT5eWlmFFDQwP29/dNs6Oxt7cnWoFtQAPIRU6K8cEJBAJIJBLQZoRwOIzT01O0t7dD64ywVhoDa2pqcHR0RNUkjJ+cnMTOzo7AnVqnjFG7ubkRmbnuXE/OnM4svaurK+FsvY2NjZkg+nOSqVTKwI030BF2VrbZ+vp6HYLP57N9gNiyT05ODJ/Pz0/Mzc1he3vbwKgYXzQd3draQjAYBJ+/fdU4W170YaNjjJWcnLY30BPx6fF40NHRITZUxnW9r68PFxcXP/5N6D7/AZFGudcWeveCAAAAAElFTkSuQmCC"
        }
        this.$marker3D.open(option);
      }
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
  <face-button type="primary" @click="marker3dEvent">打三维标签</face-button>
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
  <face-button type="primary" @click="marker3dEvent">打三维标签</face-button>
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
