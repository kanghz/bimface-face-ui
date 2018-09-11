<template>
    <div class="face-loading" v-if="visible">
        <div class="face-loading-outer">
            <div class="face-loading-inner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'face-loading',

        props: {
            visible:{
                type:Boolean,
                default:false
            }
        }
    }
</script>
