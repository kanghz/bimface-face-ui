<template>
    <div class="components-wrap">
        <h2>Alert -- 警告</h2>

        <h4>基本用法</h4>
        <div class="demo-row">
            <face-button @click="alertVisible = true">Alert Default</face-button>
            <face-button @click="alertSuccessVisible = true">Alert Success</face-button>
            <face-button @click="alertWarningVisible = true">Alert Warning</face-button>
            <face-button @click="alertErrorVisible = true">Alert Error</face-button>
        </div>

        <h4>带图标</h4>
        <div class="demo-row">
            <face-button @click="alertIconVisible = true">Alert Icon</face-button>
        </div>

        <h4>文字居中</h4>
        <div class="demo-row">
            <face-button @click="alertCenterVisible = true">Alert Center</face-button>
        </div>

        <h4>可关闭</h4>
        <div class="demo-row">
            <face-button @click="alertCloseVisible = true">Alert CloseBtn</face-button>
        </div>

        <face-alert :visible.sync="alertVisible">default</face-alert>
        <face-alert :visible.sync="alertSuccessVisible" type="success">success</face-alert>
        <face-alert :visible.sync="alertWarningVisible" type="warning">warning</face-alert>
        <face-alert :visible.sync="alertErrorVisible" type="error">error</face-alert>

        <face-alert :visible.sync="alertIconVisible" icon="bim-success" type="success">success</face-alert>

        <face-alert :visible.sync="alertCenterVisible" icon="bim-success" center type="success">success</face-alert>

        <face-alert :visible.sync="alertCloseVisible" type="success" close @closeClick="closeButtonEvent">Please Try clicking the close button to see the effect...</face-alert>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                alertVisible: false,
                alertSuccessVisible: false,
                alertWarningVisible: false,
                alertErrorVisible: false,
                alertIconVisible:false,
                alertCenterVisible:false,
                alertCloseVisible:false
            };
        },

        methods:{
            closeButtonEvent(){
                console.log('closeButtonEvent');
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
</style>
