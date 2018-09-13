<template>
    <div class="components-wrap">
        <h2>Loading -- 加载</h2>

        <h4>基础使用</h4>
        <div class="demo-row">
            <face-button plain @click="openLoading">open loading Dom</face-button>
            <face-button plain @click="openLoading2">open loading fullScreen</face-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
          openLoading(){
            this.$loading.open({target:'.components-wrap'});
            setTimeout(()=>{this.$loading.close()},3000)
          },

          openLoading2(){
            this.$loading.open();
            setTimeout(()=>{this.$loading.close()},3000)
          }
        }
    }
</script>

<style lang="less" scoped>
    .demo-box {
        margin-bottom:20px;
        border:1px solid #ccc;
        width:400px;
        height: 300px;
        box-sizing: border-box;
        padding:20px;
        position: relative;
    }
    .demo-row {
        margin-bottom:20px;
        .face-button {
            margin-right: 10px;
        }
    }
</style>
