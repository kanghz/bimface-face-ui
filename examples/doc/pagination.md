<script>
  module.exports = {
    methods:{
      pageButtonEvent(n){
        console.log(n);
      }
    } 
  };
</script>

# Pagination -- 翻页
----
打开控制台，点击翻页按钮查看```Console```。

### 基础用法
<div class="demo-block">
  <face-pagination :page-count="8" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :page-count="8" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 不带背景色
<div class="demo-block">
  <face-pagination :start-page="1" :page-count="8" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :start-page="1" :page-count="8" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 大于8页面
<div class="demo-block">
  <face-pagination :start-page="7" :page-count="20" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :start-page="7" :page-count="20" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 显示总条数
<div class="demo-block">
  <face-pagination :start-page="78" :page-count="80" :total="798" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :start-page="78" :page-count="80" :total="798" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 不带页码
<div class="demo-block">
  <face-pagination :start-page="1" :page-count="5" single @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :start-page="1" :page-count="5" single @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| start-page     | 起始页   | Number  |   —  |    1     |
| page-count     | 总页码   | Number    |  — |     —   |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| total  | 总条数    | Number   | —   | —  |
| single  | 是否简洁版（无页码） | Boolean   |  —  |  false  |


### Events
| 方法名      | 说明    |
|---------- |-------- |
| pageButtonEvent(n)     | 点击触发事件，n为被触发的翻页页码，类型为Number。   |

