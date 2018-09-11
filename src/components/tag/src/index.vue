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
        background: @border-color;
        border: 1px solid @border-color;
        &.face-tag-plain {
            color: @border-color;
            border-color: @border-color;
            background: transparent;
        }
    }
    .face-tag-primary {
        color: #fff;
        background: @primary-color;
        border: 1px solid @primary-color;
        &.face-tag-plain {
            color: @primary-color;
            border-color: @primary-color;
            background: transparent;
        }
    }
    .face-tag-orange {
        color: #fff;
        background: @second-color;
        border: 1px solid @second-color;
        &.face-tag-plain {
            color: @second-color;
            border-color: @second-color;
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
