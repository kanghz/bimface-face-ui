<template>
    <div class="components-wrap">
        <h2>Popup -- 弹出层</h2>

        <h4>基本用法</h4>
        <div class="demo-row">
            <face-button @click="popupVisible1 = true">Popup Default</face-button>

            <face-popup :visible.sync="popupVisible1" title="标题名称" close
                        @closeButtonEvent="closeButtonEvent"
            >
                <p>这里可添加任意内容。</p>
            </face-popup>
        </div>

        <h4>带Button</h4>
        <div class="demo-row">
            <face-button @click="popupVisible2 = true">Popup Button</face-button>

            <face-popup :visible.sync="popupVisible2" title="标题名称" close
                        confirmButtonText="确定"
                        @confirmButtonEvent="confirmButtonEvent"
                        cancelButtonText="取消"
                        @cancelButtonEvent="cancelButtonEvent"
                        @closeButtonEvent="closeButtonEvent"
            >
                <p>这里可添加任意内容。</p>
            </face-popup>
        </div>

        <h4>取消关闭按钮</h4>
        <div class="demo-row">
            <face-button @click="popupVisible3 = true">Popup No CloseButton</face-button>

            <face-popup :visible.sync="popupVisible3" title="标题名称"
                        cancelButtonText="取消"
                        @cancelButtonEvent="cancelButtonEvent"
                        @closeButtonEvent="closeButtonEvent"
            >
                <p>这里可添加任意内容。</p>
            </face-popup>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                popupVisible1: false,
                popupVisible2: false,
                popupVisible3: false
            };
        },

        methods:{
            confirmButtonEvent(){
                console.log('confirmButtonEvent');
            },
            cancelButtonEvent(){
                console.log('cancelButtonEvent');
            },
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