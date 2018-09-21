<style lang="less">
  .demo-tab-content1 {
    padding: 10px 0;
  }
  .demo-tab-content2 {
      padding:10px 20px;
    }
</style>

<script>
  module.exports = {
    methods:{
      tabEvent(paneName,index){
        console.log('paneName:' + paneName + ' | index:' + index);
      }
    }
 
  }
</script>

# Tabs -- 标签页
----
### 基础用法

<div class="demo-block">
  <div>
    <face-tabs active="name1" @click="tabEvent">
      <face-tabpane label="快速入门" name="name1">
        <div class="demo-tab-content1">快速入门</div>
      </face-tabpane>
      <face-tabpane label="开发指南" name="name2">
        <div class="demo-tab-content1">开发指南</div>
      </face-tabpane>
      <face-tabpane label="服务端API" name="name3">
        <div class="demo-tab-content1">服务端API</div>
      </face-tabpane>
      <face-tabpane label="Javascript API" name="name4">
        <div class="demo-tab-content1">Javascript API</div>
      </face-tabpane>
    </face-tabs>
  </div>
</div>

::: demo
```html
<div>
  <face-tabs active="name1" @click="tabEvent">
      <face-tabpane label="快速入门" name="name1">
        <div class="demo-tab-content1">快速入门</div>
      </face-tabpane>
      <face-tabpane label="开发指南" name="name2">
        <div class="demo-tab-content1">开发指南</div>
      </face-tabpane>
      <face-tabpane label="服务端API" name="name3">
        <div class="demo-tab-content1">服务端API</div>
      </face-tabpane>
      <face-tabpane label="Javascript API" name="name4">
        <div class="demo-tab-content1">Javascript API</div>
      </face-tabpane>
    </face-tabs>
</div>
```
:::

### 选项卡样式
设置```type```为 ```tab```

<div class="demo-block">
  <div>
    <face-tabs active="name2" type="tab" @click="tabEvent">
      <face-tabpane label="快速入门" name="name1">
        <div class="demo-tab-content1">快速入门</div>
      </face-tabpane>
      <face-tabpane label="开发指南" name="name2">
        <div class="demo-tab-content1">开发指南</div>
      </face-tabpane>
      <face-tabpane label="服务端API" name="name3">
        <div class="demo-tab-content1">服务端API</div>
      </face-tabpane>
      <face-tabpane label="Javascript API" name="name4">
        <div class="demo-tab-content1">Javascript API</div>
      </face-tabpane>
    </face-tabs>
  </div>
</div>

::: demo
```html
<div>
  <face-tabs active="name2" type="tab" @click="tabEvent">
    <face-tabpane label="快速入门" name="name1">
      <div class="demo-tab-content1">快速入门</div>
    </face-tabpane>
    <face-tabpane label="开发指南" name="name2">
      <div class="demo-tab-content1">开发指南</div>
    </face-tabpane>
    <face-tabpane label="服务端API" name="name3">
      <div class="demo-tab-content1">服务端API</div>
    </face-tabpane>
    <face-tabpane label="Javascript API" name="name4">
      <div class="demo-tab-content1">Javascript API</div>
    </face-tabpane>
  </face-tabs>
</div>
```
:::

### 卡片样式
设置```type```为 ```card```

<div class="demo-block">
  <div>
    <face-tabs active="name1" type="card" @click="tabEvent">
      <face-tabpane label="快速入门" name="name1">
        <div class="demo-tab-content2">快速入门</div>
      </face-tabpane>
      <face-tabpane label="开发指南" name="name2">
        <div class="demo-tab-content2">开发指南</div>
      </face-tabpane>
      <face-tabpane label="服务端API" name="name3">
        <div class="demo-tab-content2">服务端API</div>
      </face-tabpane>
      <face-tabpane label="Javascript API" name="name4">
        <div class="demo-tab-content2">Javascript API</div>
      </face-tabpane>
    </face-tabs>
  </div>
</div>

::: demo
```html
<div>
  <face-tabs active="name1" type="card" @click="tabEvent">
    <face-tabpane label="快速入门" name="name1">
      <div class="demo-tab-content2">快速入门</div>
    </face-tabpane>
    <face-tabpane label="开发指南" name="name2">
      <div class="demo-tab-content2">开发指南</div>
    </face-tabpane>
    <face-tabpane label="服务端API" name="name3">
      <div class="demo-tab-content2">服务端API</div>
    </face-tabpane>
    <face-tabpane label="Javascript API" name="name4">
      <div class="demo-tab-content2">Javascript API</div>
    </face-tabpane>
  </face-tabs>
</div>
<script>
  default export {
    methods:{
      tabEvent(paneName,index){
        console.log('paneName:' + paneName + ' | index:' + index);
      }
    }
 
  }
</script>
```
:::



### Tabs Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | String    |  line,tab,card |   line    |
| active   | 当前页   | String（face-tabpane name的值）   | — |  —    |

### Tabs Events
| 方法名      | 说明  |
|---------- |------- |
| click     | 点击触发事件，返回paneName（选项卡别名），index（选项卡序列）   |

### Tabpane Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name    | 选项卡别名（不同选项卡区分）   | String/Number    |  —  |   —     |
| label   | 选项卡标题   | String/Number   | — |  —    |


