<template>
    <div class="components-wrap">
        <h2>Button -- 按钮</h2>

        <h4>基本用法</h4>
        <div class="demo-row">
            <face-button>Default</face-button>
            <face-button type="primary">Primary</face-button>
            <face-button type="warning">Warning</face-button>
        </div>
        <div class="demo-row">
            <face-button plain>Default</face-button>
            <face-button type="primary" plain>Primary</face-button>
            <face-button type="warning" plain>Warning</face-button>
        </div>

        <h4>禁用状态</h4>
        <div class="demo-row">
            <face-button disabled>Default</face-button>
            <face-button type="primary" disabled>Primary</face-button>
            <face-button type="warning" disabled>Warning</face-button>
        </div>
        <div class="demo-row">
            <face-button plain disabled>Default</face-button>
            <face-button type="primary" plain disabled>Primary</face-button>
            <face-button type="warning" plain disabled>Warning</face-button>
        </div>

        <h4>图标按钮</h4>
        <div class="demo-row">
            <face-button type="primary" plain icon="bim-delete16">Primary</face-button>
            <face-button type="primary" plain icon="bim-settings">Primary</face-button>
            <face-button type="primary" icon="bim-view">Primary</face-button>
            <face-button type="primary" icon="bim-share">Primary</face-button>
        </div>

        <h4>不同尺寸</h4>
        <div class="demo-row">
            <face-button size="large">Default</face-button>
            <face-button>Default</face-button>
            <face-button size="medium">Default</face-button>
            <face-button size="small">Default</face-button>
        </div>

        <h4>事件绑定</h4>
        <div class="demo-row">
            <face-button @click="buttonEvent('Default')">Default</face-button>
            <face-button type="primary" @click="buttonEvent('Primary')">Primary</face-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            buttonEvent:(str)=>{
                alert(str + '-Button Clicked')
            }
        }
    }
</script>

<style lang="less" scoped>
    .demo-row {
        margin-bottom:20px;
        .face-button {
            margin-right: 10px;
        }
    }
    .face-button .red {
        color: #ff0000;
    }
    .bg-green {
        background-color: green !important;
        border-color: green !important;
    }


</style>
