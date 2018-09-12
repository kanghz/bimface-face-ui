<template>
    <div class="components-wrap">
        <h2>Loading -- 加载</h2>

        <h4>基础使用</h4>
        <div class="demo-box">
            <p>将在这块区域展示loading</p>
        </div>
        <div class="demo-row">
            <face-button plain @click="openLoading">close loading</face-button>
            <face-button plain @click="closeLoading">open loading</face-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
          openLoading(){

          },

          closeLoading(){

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
