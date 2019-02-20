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
