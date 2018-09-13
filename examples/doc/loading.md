<script>
  module.exports = {
    methods:{
      openLoading(){
        this.$loading.open({target:'.components-wrap'});
        setTimeout(()=>{this.$loading.close()},3000)
      },

      openLoading2(){
        this.$loading.open({target:'.demo-block'});
        setTimeout(()=>{this.$loading.close()},3000)
      },
       
       openLoading3(){
         this.$loading.open();
         setTimeout(()=>{this.$loading.close()},3000)
       }
    }
 
  }
</script>

# Loading -- 加载
----
### 基础用法

<div class="demo-block">
  <div>
    <face-button plain @click="openLoading">区域loading(主内容区)</face-button>
    <face-button plain @click="openLoading2">区域loading(示例区域)</face-button>
    <face-button plain @click="openLoading3">全屏loading</face-button>
  </div>
</div>

::: demo
```html

<div>
  <face-button plain @click="openLoading">区域loading(主内容区)</face-button>
  <face-button plain @click="openLoading2">区域loading(示例区域)</face-button>
  <face-button plain @click="openLoading3">全屏loading</face-button>
</div>

<script>
  default export {
    methods:{
      openLoading(){
        this.$loading.open({target:'.components-wrap'});
        setTimeout(()=>{this.$loading.close()},3000)
      },

      openLoading2(){
        this.$loading.open({target:'.demo-block'});
        setTimeout(()=>{this.$loading.close()},3000)
      },
      
      openLoading3(){
        this.$loading.open({target:'.components-wrap'});
        setTimeout(()=>{this.$loading.close()},3000)
      },
    }
 
  }
</script>

```
:::



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| target  |  dom对象Class/Id  | Selector  |   -  |   -    |


