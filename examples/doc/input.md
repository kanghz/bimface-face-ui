<script>
  module.exports = {
    data(){
      return{
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        input7:'',
        input8:'',
        textarea1:'',
        textarea2:'',
        textarea3:''
      }
    },
    
    methods:{
      
    }
      
  };
</script>

<style>
  .mt10 {
    margin-top:10px;
  }
  .face-input {
     width:180px;
  }
  .face-textarea {
     width:400px;
  }
</style>

# Input -- 输入框
----
### 基础用法

<div class="demo-block">
  <div>
    <face-input v-model="input1"></face-button>
  </div>
</div>

::: demo
```html

<div>
  <face-input v-model="input1"></face-button>
</div>

```
:::

### 禁用/只读状态
使用```disabled```和```readonly```属性来定义 Button 状态不可用/只读。

<div class="demo-block">
  <div>
    <face-input v-model="input2" disabled></face-button>
  </div>
  <div class="mt10">
      <face-input v-model="input3" readonly></face-button>
    </div>
</div>

::: demo
```html

<div>
  <face-input v-model="input2" disabled></face-button>
</div>
<div>
  <face-input v-model="input3" readonly></face-button>
</div>

```
:::

### 带图标

<div class="demo-block">
  <div>
    <face-input v-model="input5" before-icon="bim-user"></face-button>
  </div>
  <div class="mt10">
    <face-input v-model="input6" after-icon="bim-riqi"></face-button>
  </div>
</div>

::: demo
```html
<div>
  <face-input v-model="input5" before-icon="bim-user"></face-button>
</div>
<div>
  <face-input v-model="input6" after-icon="bim-riqi"></face-button>
</div>
```
:::


### 文本域

<div class="demo-block">
  <div>
    <face-input type="textarea" v-model="textarea1"></face-button>
  </div>
  <div class="mt10">
    <face-input type="textarea" v-model="textarea2" :rows="3"></face-button>
  </div>
</div>

::: demo
```html
<div>
  <face-input type="textarea" v-model="textarea1"></face-button>
</div>
<div>
  <face-input type="textarea" v-model="textarea2" :rows="3"></face-button>
</div>
```
:::

### 可清空

<div class="demo-block">
  <div>
    <face-input type="input" v-model="input4" clearable></face-button>
  </div>
  <div class="mt10">
    <face-input type="input" v-model="input8" before-icon="bim-user" clearable></face-button>
  </div>
  <div class="mt10">
    <face-input type="input" v-model="input7" after-icon="bim-riqi" clearable></face-button>
  </div>
  <div class="mt10">
    <face-input type="textarea" v-model="textarea3" :rows="2" clearable></face-button>
  </div>
</div>

::: demo
```html
<div>
  <face-input type="input" v-model="input4" clearable></face-button>
</div>
<div class="mt10">
  <face-input type="input" v-model="input8" before-icon="bim-user" clearable></face-button>
</div>
<div class="mt10">
  <face-input type="input" v-model="input7" after-icon="bim-riqi" clearable></face-button>
</div>
<div>
  <face-input type="textarea" v-model="textarea3" :rows="2" clearable></face-button>
</div>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 值   | String，Number  |   —    |    —    |
| type     | 类型   |   String    |   textarea |     —    |
| placeholder   |  placeholder提示文案   | String    | — | 请输入内容  |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| readonly  | 是否只读状态    | Boolean   | —   | false   |
| clearable  | 是否可清空    | Boolean   | —   | false   |
| beforeIcon  | 前置图标，已有的图标库中的图标名（仅针对type```默认模式```） | String   |  —  |  —  |
| afterIcon  | 后置图标，已有的图标库中的图标名（仅针对type```默认模式```） | String   |  —  |  —  |
| rows  | textarea行数设置（仅针对type为```textarea```模式） | Number   |  —  |  1 |

