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
