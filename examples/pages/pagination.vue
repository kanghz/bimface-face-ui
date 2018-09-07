<template>
    <div class="components-wrap">
        <h2>Pagination -- 翻页</h2>

        <h4>基本用法</h4>
        <div class="demo-row">
            <face-pagination :startPage="1" :pageCount="8" @pageButtonEvent="pageButtonEvent"></face-pagination>
        </div>

        <h4>不带背景色</h4>
        <div class="demo-row">
            <face-pagination :startPage="2" :pageCount="8" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
        </div>

        <h4>大于8页面</h4>
        <div class="demo-row">
            <face-pagination :startPage="7" :pageCount="20" plain @pageButtonEvent="pageButtonEvent"></face-pagination>
        </div>

        <h4>显示总条数</h4>
        <div class="demo-row">
            <face-pagination :startPage="78" :pageCount="80" :total="798" @pageButtonEvent="pageButtonEvent"></face-pagination>
        </div>

        <h4>不带页码</h4>
        <div class="demo-row">
            <face-pagination :startPage="1" :pageCount="5" single @pageButtonEvent="pageButtonEvent"></face-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            pageButtonEvent(n){
                console.log(n);
            }
        }
    }
</script>

<style lang="less" scoped>
    .demo-row {
        margin-bottom:20px;
    }
</style>
