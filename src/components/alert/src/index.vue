<template>
    <div class="face-alert"
         v-show="visible"
         :class="[
          type ? 'face-alert-' + type : '',
          center ? 'face-alert-center' : '',
          close ? 'face-alert-close' : ''
        ]"
    >
        <i v-if="icon" class="face-icon face-alert-icon" :class="[icon ? icon : '']"></i>
        <slot></slot>
        <i v-if="close" class="face-icon components-close bim-close" @click="closeClick"></i>
    </div>
</template>

<script>
    export default {
        name: 'face-alert',

        props: {
            visible:{
                type:Boolean,
                default:false
            },
            close: Boolean,
            center: Boolean,
            icon:{
                type:String,
                default:null
            },
            type:{
                type:String,
                default:'default'
            },

        },

        data(){
            return {
                time: null
            }
        },

        watch:{
            'visible':{
                handler(curVal,oldVal){
                    if(curVal && !this.close){
                        clearTimeout(this.time);
                        this.time = setTimeout(()=>{
                            this.$emit("update:visible", false);
                        }, 3000);
                    }
                },
                deep:true
            }
        },

        methods: {
            closeClick(){
                this.$emit("update:visible", false);
                this.$emit('closeClick')
            }
        }
    }
</script>

<style lang="less">
    .face-alert {
        position:fixed;
        z-index:99;
        left:50%;
        top:0px;
        transform:translate(-50%,0);
        min-width: 300px;
        padding:0 10px;
        line-height: 40px;
        text-align: left;
        border-radius:0 0 6px 6px;
        color:@default-color;
        background:#f4f4f5;
        font-size:16px;
        box-sizing: border-box;
    .face-alert-icon {
        margin-right:5px;
    }
    &.face-alert-close {
         padding-right:30px;
    .components-close {
        position: absolute;
        right:10px;
        top:0px;
        cursor: pointer;
        color:#999;
        line-height: 40px;
        &:hover {
           color:@primary-color;
        }
      }
    }
    &.face-alert-center {
         text-align: center;
     }
    &.face-alert-success{
         color:@success-color;
         background:#e5ffdc;
     }
    &.face-alert-warning{
         color: @waring-color;
         background:#fdf6ec;
     }
    &.face-alert-error{
         color: @danger-color;
         background:#ffdedc;
     }
    }
</style>
