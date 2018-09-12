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
打开控制台，点击翻页按钮查看```console.log```。

### 基础用法
<div class="demo-block">
  <face-pagination :pageCount="8" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :pageCount="8" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 不带背景色
<div class="demo-block">
  <face-pagination :startPage="1" :pageCount="8" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :startPage="1" :pageCount="8" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 大于8页面
<div class="demo-block">
  <face-pagination :startPage="7" :pageCount="20" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :startPage="7" :pageCount="20" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 显示总条数
<div class="demo-block">
  <face-pagination :startPage="78" :pageCount="80" :total="798" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :startPage="78" :pageCount="80" :total="798" @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### 不带页码
<div class="demo-block">
  <face-pagination :startPage="1" :pageCount="5" single @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

::: demo
```html

<div>
  <face-pagination :startPage="1" :pageCount="5" single @pageButtonEvent="pageButtonEvent"></face-pagination>
</div>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| startPage     | 起始页   | Number  |   —  |    1     |
| pageCount     | 总页码   | Number    |  — |     —   |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| total  | 总条数    | Number   | —   | —  |
| single  | 是否简洁版（无页码） | Boolean   |  —  |  false  |


### Events
| 方法名      | 说明    |
|---------- |-------- |
| pageButtonEvent(n)     | 点击触发事件，n为被触发的翻页页码，类型为Number。   |

