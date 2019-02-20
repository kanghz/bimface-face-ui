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
