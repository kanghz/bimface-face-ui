<template>
    <div class="components-wrap">
        <h2>Tag -- 标签</h2>

        <h4>基本用法</h4>
        <div class="demo-row">
            <face-tag>标签一</face-tag>
            <face-tag type="primary">标签二</face-tag>
            <face-tag type="orange">标签三</face-tag>
        </div>
        <div class="demo-row">
            <face-tag plain>标签一</face-tag>
            <face-tag type="primary" plain>标签二</face-tag>
            <face-tag type="orange" plain>标签三</face-tag>
        </div>

        <h4>不同尺寸</h4>
        <div class="demo-row">
            <face-tag size="large" plain>标签一</face-tag>
            <face-tag plain>标签二</face-tag>
            <face-tag size="small" plain>标签三</face-tag>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .demo-row {
        margin-bottom:20px;
        .face-tag {
            margin-right: 10px;
        }
    }
</style>