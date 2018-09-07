<template>
    <span
        class="face-tag"
        :class="[
          type ? 'face-tag-' + type : '',
          size ? 'face-tag-' + size : '',
          plain ? 'face-tag-plain' : ''
        ]"
    >
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'face-tag',

        props: {
            type:{
                type:String,
                default:'default'
            },
            size:String,
            plain: Boolean
        }
    }
</script>

<style lang="less">
    .face-tag {
        display: inline-block;
        white-space: nowrap;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        padding: 0 5px;
        line-height: 20px;
        -webkit-user-select: none;
        -webkit-text-size-adjust:none;
        font-size: 12px;
        border-radius: 4px;
    }
    .face-tag-default {
        color: #fff;
        background: #c9c9c9;
        border: 1px solid #c9c9c9;
        &.face-tag-plain {
            color: #999;
            border-color: #c9c9c9;
            background: transparent;
        }
    }
    .face-tag-primary {
        color: #fff;
        background: @default-color;
        border: 1px solid @default-color;
        &.face-tag-plain {
            color: @default-color;
            border-color: @default-color;
            background: transparent;
        }
    }
    .face-tag-orange {
        color: #fff;
        background: #f60;
        border: 1px solid #f60;
        &.face-tag-plain {
            color: #f60;
            border-color: #f60;
            background: transparent;
        }
    }
    .face-tag-large {
        line-height: 24px;
        padding: 0 10px;
    }
    .face-tag-small {
        line-height: 16px;
        padding: 0 5px;
        font-size: 10px;
    }

</style>
