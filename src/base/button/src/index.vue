<template>
    <button
        class='face-button'
        :disabled="disabled"
        :style="{'opacity':disabled ? '.5' : ''}"
        @click="handleClick"
        :class="[
          type ? 'face-button-' + type : '',
          size ? 'face-button-' + size : '',
          disabled ? 'face-button-disabled' : '',
          plain ? 'face-button-plain' : ''
        ]"
    >
        <i :class="icon ? 'face-icon ' + icon :''" v-if="icon"></i>
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'bf-base-button',

        props: {
            type:{
                type:String,
                default:'default'
            },
            size:String,
            disabled: Boolean,
            plain: Boolean,
            icon: {
                type:String,
                default:''
            }
        },

        methods: {
            handleClick(event){
                if (this.disabled) return
                this.$emit('click', event)
            }
        }
    }
</script>
