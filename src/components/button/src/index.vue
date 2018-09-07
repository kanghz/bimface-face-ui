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
        name: 'face-button',

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

<style lang="less">
    .face-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        padding: 12px 20px;
        transition: .1s;
        font-weight: 500;
        -webkit-user-select: none;
        font-size: 14px;
        border-radius: 4px;
        &:hover {
            opacity:.7;
        }
        i {
            margin-right:5px;
        }
    }
    .face-button-primary {
        background:@default-color;
        color:#fff;
        border-color:@default-color;
        &.face-button-plain {
            background:transparent;
            color:@default-color;
            border:1px solid @default-color;
        }
    }
    .face-button-warning {
        background:#f99d0b;
        color:#fff;
        border-color:#f99d0b;
        &.face-button-plain {
            background:transparent;
            color:#f99d0b;
            border:1px solid #f99d0b;
        }
    }
    .face-button-disabled {
        cursor: default;
    }
    .face-button-large {
        padding: 16px 30px;
    }
    .face-button-medium {
        padding: 9px 15px;
    }
    .face-button-small {
        padding: 7px 15px;
    }
</style>
