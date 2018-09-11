<template>
    <div class="face-popup"
         v-show="visible"
    >
        <div class="face-popup-body">
            <div class="face-popup-head"><i v-if="close" class="face-icon components-close bim-close" @click="closeButtonEvent"></i>{{title}}</div>
            <div class="face-popup-content" :class="[
              center ? 'face-popup-center' : ''
            ]">
                <slot></slot>
            </div>
            <div class="face-popup-btns" v-if="confirmButtonText || cancelButtonText">
                <face-button size="small" type="primary" v-if="confirmButtonText" @click="confirmButtonEvent">{{confirmButtonText}}</face-button>
                <face-button size="small" v-if="cancelButtonText" @click="cancelButtonEvent">{{cancelButtonText}}</face-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'face-popup',

        props: {
            visible:{
                type:Boolean,
                default:false
            },
            close: Boolean,
            center: Boolean,
            title:String,
            confirmButtonText:String,
            cancelButtonText:String
        },

        methods: {
            closeButtonEvent(){
                this.$emit("update:visible", false);
                this.$emit('closeButtonEvent');
            },
            confirmButtonEvent(){
                this.$emit('confirmButtonEvent');
            },
            cancelButtonEvent(){
                this.$emit("update:visible", false);
                this.$emit('cancelButtonEvent');
            }
        }
    }
</script>

<style lang="less">
    .face-popup {
        position:fixed;
        z-index:99;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:@popup-bg;
        box-sizing: border-box;
        .face-popup-body {
            position: absolute;
            background: #fff;
            left:50%;
            top:50%;
            min-width:420px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            text-align: left;
            overflow: hidden;
            border-radius: 4px;
            padding-bottom: 10px;
            vertical-align: middle;
            transform: translate(-50%,-50%);
            .face-popup-head {
                background-color: @popup-head-bg;
                color: #fff;
                line-height: 40px;
                padding: 0 10px;
            }
            .components-close {
                float:right;
                margin-top: 13px;
                cursor: pointer;
                &:hover {
                    color:@primary-color;
                }
            }
            .face-popup-content {
                position: relative;
                padding: 10px 15px;
                color: @default-color;
                font-size: 14px;
            }
            .face-popup-center {
                text-align: center;
            }
            .face-popup-btns {
                padding: 5px 15px 0;
                text-align: right;
                .face-button {
                    margin-left:10px;
                }
            }
        }
    }
</style>
